"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const f = require("node-fetch");
const _ = require("lodash");
const urlModule = require("url");
const Ref_1 = require("./Ref");
const fetch = f;
let inBrowser = false;
let URLSearchParams = urlModule;
if (urlModule.URLSearchParams) {
    inBrowser = true;
    URLSearchParams = urlModule.URLSearchParams || urlModule;
}
class Client {
    constructor(apiKey, options = {
        server: Client.defaultRallyServer,
        project: undefined,
        workspace: undefined,
        maxConcurrentRequests: 5,
        maxReadRetrys: 5,
        maxWriteRetrys: 0
    }) {
        if (!_.isString(apiKey) && !inBrowser) {
            throw new Error('Api key is required');
        }
        this.options = _.defaults(options, {
            server: Client.defaultRallyServer,
            project: undefined,
            workspace: undefined,
            maxConcurrentRequests: 5,
            maxReadRetrys: 5,
            maxWriteRetrys: 0
        });
        console.log(this.options);
        this.options.server = options.server || Client.defaultRallyServer;
        this.apiKey = apiKey;
        this.workspace = options.workspace;
        this.project = options.project;
        this.maxConcurrentRequests = _.isNumber(options.maxConcurrentRequests) ? options.maxConcurrentRequests : 5;
        ;
    }
    /**
     * The default Rally server Rally to be used
     */
    static get defaultRallyServer() {
        return 'https://rally1.rallydev.com';
    }
    /** The default server for Rally to be used*/
    static async manageResponse(response) {
        if (!response.ok) {
            throw new Error(`${response.statusText} Code:${response.status}`);
        }
        const resp = await response.json();
        const unwrappedResponse = resp[_.keys(resp)[0]] || '';
        const errors = unwrappedResponse.Errors || resp.Errors;
        if (errors && errors.length) {
            throw new Error(errors.map((e) => `Rally Server Error: ${e}`).join(','));
        }
        let returnedValue = resp;
        if (resp.QueryResult) {
            returnedValue = resp.QueryResult.Results;
            resp.TotalResultCount = resp.QueryResult.TotalResultCount;
            resp.PageSize = resp.QueryResult.PageSize;
            delete resp.QueryResult;
        }
        else if (resp.Results) {
            returnedValue = resp.Results;
            delete resp.Results;
        }
        else if (unwrappedResponse.Object) {
            returnedValue = unwrappedResponse.Object;
            delete resp.Object;
        }
        returnedValue.$rawResponse = resp;
        return returnedValue;
    }
    /** Returns a collection of results from the Lookback Api */
    async queryLookback(request, workspaceId = 0) {
        const workspace = workspaceId ? `/workspace/${workspaceId}` : this.workspace;
        const url = `${this.options.server}/analytics/v2.0/service/rally${workspace}/artifact/snapshot/query`;
        const finalParams = _.defaults(request, Client.defaultLookbackRequest);
        let headers = {};
        if (this.apiKey) {
            headers.zsessionid = this.apiKey;
        }
        const body = JSON.stringify(request, null, 2);
        const rawResponse = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers,
            credentials: 'include',
            body
        });
        /** @type {Promise<Toolkit.Api.Lookback.Response>} */
        const resp = await Client.manageResponse(rawResponse);
        resp.$params = finalParams;
        resp.$hasMore = resp.$rawResponse.HasMore;
        const firstRawResponse = resp.$rawResponse;
        resp.$getNextPage = async () => {
            if (resp.$hasMore) {
                const newRequest = _.cloneDeep(request);
                newRequest.start += newRequest.pagesize;
                return this.queryLookback(newRequest, workspaceId);
            }
            else {
                throw new Error('No more pages in this request');
            }
        };
        resp.$getAll = async () => {
            // TODO: eventually make this more concurrent
            // await Promise.all([who(), what(), where()]);
            let currentResponse = resp;
            currentResponse.$hasMore = resp.$hasMore;
            let allResponses = currentResponse;
            while (currentResponse.$hasMore) {
                currentResponse = await currentResponse.$getNextPage();
                allResponses = [...currentResponse, ...allResponses];
            }
            allResponses.$getNextPage = async () => { throw new Error('No more pages in this request'); };
            allResponses.$getAll = async () => allResponses;
            allResponses.$hasMore = false;
            allResponses.$rawResponse = firstRawResponse;
            return allResponses;
        };
        return resp;
    }
    /** returns an array modified to have additional meta data on it containing the results */
    async query(type, query = {}, params = {}) {
        const finalParams = _.defaults(query, params, this.defaultQueryOptions);
        const url = Client._prepareUrl(this.options.server, type, false, finalParams);
        let headers = {};
        if (this.apiKey) {
            headers.zsessionid = this.apiKey;
        }
        const rawResponse = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers,
            credentials: 'include'
        });
        /** @type {Promise<Toolkit.Api.QueryResponse>}  */
        let resp = await Client.manageResponse(rawResponse);
        resp.$params = finalParams;
        resp.$hasMore = resp.$rawResponse.TotalResultCount >= finalParams.start + finalParams.pagesize;
        resp.$getNextPage = async () => {
            if (resp.$hasMore) {
                let newQuery = _.cloneDeep(query);
                newQuery.start += query.pagesize;
                return this.query(type, newQuery, params);
            }
            else {
                throw new Error('No more pages in this request');
            }
        };
        resp.forEach((d) => this._decorateObject(d));
        return resp;
    }
    async save(arg1, arg2 = {}, arg3 = {}) {
        let type, url, rallyObject, params;
        rallyObject = _.isObject(arg1) ? arg1 : arg2;
        if (_.isString(arg1)) {
            type = arg1;
            rallyObject = arg2;
            params = arg3;
        }
        else if (_.isObject(rallyObject) && _.isString(rallyObject._ref)) {
            params = arg2;
            rallyObject = arg1;
        }
        else {
            throw new Error('Input must be either a string representing a type like "Defect" or an object containing a string field "_ref"');
        }
        let headers = {};
        if (this.apiKey) {
            headers.zsessionid = this.apiKey;
        }
        if (!rallyObject.Project && this.options.project) {
            rallyObject.Project = this.options.project;
        }
        if (rallyObject._ref) {
            url = Client._prepareUrl(this.options.server, Client.getTypeFromRef(rallyObject._ref), Client.getIdFromRef(rallyObject._ref), params);
        }
        else {
            const action = _.isNumber(rallyObject.ObjectID) ? `${rallyObject.ObjectID}` : 'create';
            url = Client._prepareUrl(this.options.server, type, action, params);
            if (_.isNumber(rallyObject.ObjectID)) {
                url = `${url}/${rallyObject.ObjectID}?`;
            }
            else {
                url = `${url}/create?`;
            }
        }
        const wrapper = {};
        wrapper[type] = rallyObject;
        const body = JSON.stringify(wrapper);
        const rawResponse = await fetch(url, {
            method: 'PUT',
            mode: "cors",
            headers,
            credentials: 'include',
            body
        });
        let resp = await Client.manageResponse(rawResponse);
        resp.$params = params;
        this._decorateObject(resp);
        return resp;
    }
    /**
     * Returns a Rally object by ref or by type and ID
     */
    async get(typeOrRef, objectID = null, params = {}) {
        const result = await this._request(typeOrRef, objectID, params, 'GET');
        this._decorateObject(result);
        return result;
    }
    /**
     * Gets a subcollection stored on the Rally object
     */
    async getCollection(rallyObject, collectionName, params = {}) {
        const finalParams = _.defaults(params, this.defaultQueryOptions);
        const ref = Client.getRef(rallyObject);
        const type = Client.getTypeFromRef(ref);
        const objectId = Client.getIdFromRef(ref);
        const action = `${objectId}/${collectionName}`;
        const url = Client._prepareUrl(this.options.server, type, action, finalParams);
        let headers = {};
        if (this.apiKey) {
            headers.zsessionid = this.apiKey;
        }
        const rawResponse = await fetch(url, {
            method: 'GET',
            mode: "cors",
            headers,
            credentials: 'include'
        });
        let resp = await Client.manageResponse(rawResponse);
        resp.$params = finalParams;
        resp.forEach((d) => this._decorateObject(d));
        rallyObject[collectionName] = _.cloneDeep(_.defaults(resp, rallyObject[collectionName]));
        return resp;
    }
    /**
     * @private
     */
    async _request(typeOrRef, objectID = null, params = {}, action) {
        let type = typeOrRef;
        if (Ref_1.Ref.isRef(typeOrRef)) {
            type = Client.getTypeFromRef(typeOrRef);
            objectID = Client.getIdFromRef(typeOrRef);
        }
        const finalParams = _.defaults(params, { fetch: true }, this.defaultQueryOptions);
        delete finalParams.project;
        delete finalParams.workspace;
        const url = Client._prepareUrl(this.options.server, type, objectID, finalParams);
        const headers = {
            zsessionid: this.apiKey
        };
        const rawResponse = await fetch(url, {
            method: action,
            mode: "cors",
            headers,
            credentials: 'include'
        });
        let resp = await Client.manageResponse(rawResponse);
        resp = resp[_.keys(resp)[0]];
        resp.$params = finalParams;
        return resp;
    }
    /**
     *
     *  Adds the delete and save options to each object
     */
    async _decorateObject(rallyObject) {
        rallyObject.$save = () => this.save(rallyObject);
        rallyObject.$delete = () => this.delete(rallyObject);
    }
    /**
     *
     * @param  inputOrRef Either a Rally object or the ref for a Rally object
     * @param  params Optional Params to be sent with the request
     * @param  ignoreDelay Pass true if you don't want to wait 500 ms longer to return. This time gives the Rally server a chance to finish deleting
     */
    async delete(inputOrRef, params = {}, ignoreDelay = false) {
        let ref = inputOrRef;
        ref = _.isObject(ref) ? ref._ref : ref;
        const resp = await this._request(ref, null, params, 'DELETE');
        if (!ignoreDelay) {
            // delete returns before the server has finished deleting adding in a fake wait to hope it is done before 
            const delayResult = await Client.delay(500);
        }
        return resp;
    }
    /**
     * returns the ref from a rally object or returns the ref is input is passed as a string
     */
    static getRef(input, objectID = 0) {
        let obj;
        if (_.isObject(input)) {
            obj = input;
            if (_.isString(obj._ref)) {
                return obj._ref;
            }
            throw new Error('_ref must be specified to use getRef from a RallyObject');
        }
        if (_.isNumber(objectID) && objectID) {
            return `/${input}/${objectID}`;
        }
        return input.toString();
    }
    /**
     * Gets the ID portion of a ref
     */
    static getIdFromRef(ref) {
        return Ref_1.Ref.getId(ref);
    }
    /**
     * Gets the type portion of a ref
     */
    static getTypeFromRef(ref) {
        return Ref_1.Ref.getType(ref);
    }
    get defaultQueryOptions() {
        const defaultRequest = {
            fetch: ['ObjectID', 'Name'],
            start: 1,
            pagesize: 2000,
            projectScopeUp: true,
            projectScopeDown: true,
            compact: false,
            includePermissions: true,
            project: undefined,
            workspace: this.workspace
        };
        return defaultRequest;
    }
    static get defaultLookbackRequest() {
        const value = {
            find: {},
            fields: ['ObjectID', 'Name'],
            hydrate: [],
            start: 0,
            pagesize: 100,
            removeUnauthorizedSnapshots: true
        };
        return value;
    }
    /**
     * @private
     */
    static _prepareUrl(server, type, action = '', params = {}) {
        if (_.isNumber(action))
            action = action.toString();
        if (!params.workspace) {
            delete params.workspace;
        }
        if (!params.project) {
            delete params.project;
        }
        const searchParams = new URLSearchParams(params);
        if (!server.endsWith('/')) {
            server += '/';
        }
        action = _.isString(action) ? `/${action}` : '';
        return `${server}slm/webservice/v2.0/${type}${action}?${searchParams.toString()}`;
    }
    /**
     * @private
     */
    static async delay(millisecondsOfDelay, scopeFuction = () => { }) {
        return new Promise(((resolve) => {
            setTimeout(resolve.bind(null, scopeFuction), millisecondsOfDelay);
        }));
    }
}
exports.Client = Client;
//# sourceMappingURL=Client.js.map