<<<<<<< HEAD:rallyClient.ts
import RallyApi = require("./RallyApi");
=======
import RallyApi = require("./rally");
>>>>>>> 8f13a3b0a4c59f83c6140a8398d6bcecea96b346:rallyClient.ts
import fetch = require("node-fetch");
import _ = require("lodash");
import url = require("url");
const { URLSearchParams } = url;

export class RallyClient {
    constructor(
        apiKey: string,

        options: RallyApi.ClientOptions = {
            server: RallyClient.defaultRallyServer,
            project: undefined,
            workspace: undefined
        }
    ) {
        if (!_.isString(apiKey)) {
            throw new Error('Api key is required');
        }
        this.options = options;
        this.options.server = options.server || RallyClient.defaultRallyServer;
        this.apiKey = apiKey;
        this.workspace = options.workspace;
        this.project = options.project;
    }

    apiKey: String
    workspace: String
    project: String
    options: RallyApi.ClientOptions

    /**
     * The default Rally server Rally to be used
     */
    static get defaultRallyServer() {
        return 'https://rally1.rallydev.com';
    }

    /**
     * The default server for Rally to be used
     */
    static async manageResponse(response) {
        if (!response.ok) {
            throw new Error(`${response.statusText} Code:${response.status}`);
        }
        const resp = await response.json();
        const unwrappedResponse = resp[_.keys(resp)[0]];
        const errors = unwrappedResponse.Errors || resp.Errors;
        if (errors && errors.length) {
            throw new Error(errors.map(e => `Rally Server Error: ${e}`).join(','));
        }
        let returnedValue = resp;
        if (resp.QueryResult) {
            returnedValue = resp.QueryResult.Results;
            delete resp.QueryResult;
        }
        if (resp.Results) {
            returnedValue = resp.Results;
            delete resp.Results;
        }
        if (unwrappedResponse.Object) {
            returnedValue = unwrappedResponse.Object;
            delete resp.Object;
        }
        returnedValue.$rawResponse = resp;
        return returnedValue;
    }


    async queryLookback(/** @type {RallyApi.Lookback.Request} */request, workspaceId = 0): Promise<RallyApi.Lookback.Response> {
        const workspace = workspaceId ? `/workspace/${workspaceId}` : this.workspace;
        const url = `${this.options.server}/analytics/v2.0/service/rally${workspace}/artifact/snapshot/query`;
        const finalParams = _.defaults(request, RallyClient.defaultLookbackRequest);
        const headers = {
            zsessionid: this.apiKey,
            'Access-Control-Allow-Origin': '*'
        };
        const body = JSON.stringify(request, null, 2);

        const rawResponse = await fetch(url, {
            method: 'POST',
            headers,
            credentials: 'include',
            body
        });
        /** @type {Promise<RallyApi.Lookback.Response>} */
        const resp = await RallyClient.manageResponse(rawResponse);
        resp.$params = finalParams;
        resp.$hasMore = resp.$rawResponse.HasMore;
        const firstRawResponse = resp.$rawResponse;
        if (resp.$hasMore) {
            resp.$getNextPage = async () => {
                const newRequest = _.cloneDeep(request);
                newRequest.start += newRequest.pagesize;
                return this.queryLookback(newRequest, workspaceId);
            };
            resp.$getAll = async () => {
                // TODO: eventually make this more concurrent
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
        } else {
            resp.$getNextPage = async () => { throw new Error('No more pages in this request'); };
            resp.$getAll = async () => _.cloneDeep(resp);
        }
        return resp;
    }

    /**
     * 
     * @param {string} type 
     * @param {RallyApi.QueryOptions} query 
     * @param {[string:any]} params 
     * @returns {Promise<RallyApi.QueryResponse>}
     */
    async query(type, query: RallyApi.QueryOptions = {}, params = {}):
        Promise<RallyApi.QueryResponse> {
        const finalParams = _.defaults(query, params, RallyClient.defaultOptions);
        const url = RallyClient.prepareUrl(this.options.server, type, false, finalParams);
        const headers = {
            zsessionid: this.apiKey,
            'Access-Control-Allow-Origin': '*'
        };
        const rawResponse = await fetch(url, {
            method: 'GET',
            headers,
            credentials: 'include'
        });
        let resp = await RallyClient.manageResponse(rawResponse);
        resp.$params = finalParams;
        resp.forEach(d => this._decorateObject(d));
        return resp;
    }



    /**
     * 
     * @param {string||[string:any]} input Either a string typename for the following object or an object containing a ref
     * @param {[string:any]} data 
     * @param {[string:any]} params 
     * @returns {Promise<object>}
     */
    async save(input: string, data: RallyApi.RallyObject, params: RallyApi.QueryOptions): Promise<void>
    async save(data: RallyApi.RallyObject, params: RallyApi.QueryOptions): Promise<void>
    async save(data: RallyApi.RallyObject): Promise<void>
    async save(arg1: RallyApi.RallyObject | string, arg2: RallyApi.RallyObject | RallyApi.QueryOptions = {}, arg3: RallyApi.QueryOptions = {}) {
        let type, url, data, params;
        if (_.isString(arg1)) {
            type = arg1;
            data = arg2;
        } else if (_.isObject(arg1)) {
            params = arg2;
            data = arg1;
        } else {
            throw new Error('Input must be either a string representing a type like "Defect" or an object containing a string field "_ref"');
        }
        const headers = {
            zsessionid: this.apiKey,
            'Access-Control-Allow-Origin': '*'
        };
        if (!data.Project && this.options.project) {
            data.Project = this.options.project;
        }
        if (data._ref) {
            url = RallyClient.prepareUrl(
                this.options.server,
                RallyClient.getTypeFromRef(data._ref),
                RallyClient.getIdFromRef(data._ref),
                params);
        } else {
            const action = _.isNumber(data.ObjectID) ? `${data.ObjectID}` : 'create';

            url = RallyClient.prepareUrl(this.options.server, type, action, params);

            if (_.isNumber(data.ObjectID)) {
                url = `${url}/${data.ObjectID}?`;
            } else {
                url = `${url}/create?`;
            }
        }
        const wrapper = {};
        wrapper[type] = data;
        const body = JSON.stringify(wrapper);
        const rawResponse = await fetch(
            url,
            {
                method: 'PUT',
                headers,
                credentials: 'include',
                body
            }
        );

        let resp = await RallyClient.manageResponse(rawResponse);
        resp.$params = params;
        this._decorateObject(resp);
        return resp;
    }

    /**
     * 
     * @param {string} typeOrRef
     * @param {number} objectID 
     * @returns {Promise}
     */
    async get(typeOrRef, objectID = 0, params = {}) {
        const result = this._request(typeOrRef, objectID, params, 'GET');
        this._decorateObject(result);
        return result;
    }

    /**
     * @private
     */
    async _request(typeOrRef, objectID = 0, params = {}, action) {
        let type = typeOrRef;
        if (!objectID) {
            type = RallyClient.getTypeFromRef(typeOrRef);
            objectID = RallyClient.getIdFromRef(typeOrRef);
        }
        const finalParams = _.defaults(params, { fetch: true }, RallyClient.defaultOptions);
        delete finalParams.project;
        delete finalParams.workspace;
        const url = RallyClient.prepareUrl(this.options.server, type, objectID, finalParams);
        const headers = {
            zsessionid: this.apiKey,
            'Access-Control-Allow-Origin': '*'
        };
        const rawResponse = await fetch(url, {
            method: action,
            headers,
            credentials: 'include'
        });

        let resp = await RallyClient.manageResponse(rawResponse);
        resp = resp[_.keys(resp)[0]];
        resp.$params = finalParams;
        return resp;
    }

    /**
    * Adds the delete and save options to each object
    * @private
    */
    async _decorateObject(object) {
        object.$save = () => this.save(object);
        object.$delete = () => this.delete(object);
    }

    /**
     * 
     * @param {*} inputOrRef Either a Rally object or the ref for a Rally object
     * @param {*} params Optional Params to be sent with the request
     * @param {Boolean} ignoreDelay Pass true if you don't want to wait a 500 ms longer to return. This time gives the Rally server a chance to finish deleting
     */
    async delete(inputOrRef, params = {}, ignoreDelay = false) {
        let ref;
        if (_.isObject(inputOrRef)) {
            ref = inputOrRef._ref;
        } else {
            ref = inputOrRef;
        }
        const resp = await this._request(ref, 0, params, 'DELETE');
        if (!ignoreDelay) {
            // delete returns before the server has finished deleting adding in a fake wait to hope it is done before 
            const delayResult = await RallyClient.delay(500);
        }
        return resp;
    }

    static getRefFromStringOrObject(input) {
        let ref;
        if (_.isString(input)) {
            ref = input;
        } else if (_.isObject(input) && _.isString(input._ref)) {
            ref = input._ref;
        } else {
            throw new Error('Input must be either a string representing a type like "Defect" or an object containing a string field "_ref"');
        }
        return ref;
    }

    /**
     * 
     * @param {string} typeOrRef 
     * @param {number} objectID 
     * @returns {string}
     */
    static getRef(typeOrRef, objectID): string {
        if (_.isNumber(objectID)) {
            return `/${typeOrRef}/${objectID}`;
        }
        return typeOrRef;
    }

    /**
     * Gets the ID portion of a ref
     * @param {string} typeOrRef 
     * @returns {string}
     */
    static getIdFromRef(ref) {
        if (!_.isString(ref)) return null;
        const [id] = ref.split('/').reverse();
        return Number(id) || null;
    }

    /**
     * Gets the type portion of a ref
     * @param {string} ref 
     * @returns {string}
     */
    static getTypeFromRef(ref) {
        if (!_.isString(ref)) return null;
        const [, type = null] = ref.split('/').reverse();
        return type;
    }

    /**
     * @returns {RallyApi.QueryOptions}
     * 
     */
    static get defaultOptions() {
        const defaultRequest = {
            fetch: ['ObjectID', 'Name'],
            start: 1,
            pagesize: 200,
            projectScopeUp: true,
            projectScopeDown: true,
            compact: true,
            includePermissions: true,
            project: undefined,
            workspace: undefined
        };
        return defaultRequest;
    }

    /**
     * @returns {RallyApi.QueryOptions}
     * 
     */
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
     * 
     * @param {string} server 
     * @param {string} type 
     * @param {string} action 
     * @param {RallyApi.QueryOptions} params 
     */
    static prepareUrl(server, type: string, action: boolean | string | number = '', params: RallyApi.QueryOptions = {}) {
        if (_.isNumber(action)) action = action.toString();
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
     * @param millisecondsOfDelay
     * @param scopeFuction 
     */
    static delay(millisecondsOfDelay: number, scopeFuction: Function = () => { }) {
        return new Promise(((resolve) => {
            setTimeout(resolve.bind(null, scopeFuction), millisecondsOfDelay);
        }));
    }
}