import * as Toolkit from './index';

import fetch = require('node-fetch');
import _ = require('lodash');
import url = require('url');
const { URLSearchParams } = url;

export class Client {
    constructor(
        apiKey: string,

        options: Toolkit.Api.ClientOptions = {
            server: Client.defaultRallyServer,
            project: undefined,
            workspace: undefined
        }
    ) {
        if (!_.isString(apiKey)) {
            throw new Error('Api key is required');
        }
        this.options = options;
        this.options.server = options.server || Client.defaultRallyServer;
        this.apiKey = apiKey;
        this.workspace = options.workspace;
        this.project = options.project;
    }

    /**
     * @private
     */
    apiKey: string
    workspace: string
    project: string
    /**
     * @private
     */
    options: Toolkit.Api.ClientOptions

    /**
     * The default Rally server Rally to be used
     */
    static get defaultRallyServer() {
        return 'https://rally1.rallydev.com';
    }

    /**
     * The default server for Rally to be used
     */
    static async manageResponse(response: { ok: any; statusText: any; status: any; json: () => void; }) {
        if (!response.ok) {
            throw new Error(`${response.statusText} Code:${response.status}`);
        }
        const resp:any = await response.json();
        const unwrappedResponse = resp[_.keys(resp)[0]];
        const errors = unwrappedResponse.Errors || resp.Errors;
        if (errors && errors.length) {
            throw new Error(errors.map((e: any) => `Rally Server Error: ${e}`).join(','));
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

    /**
     * Returns a collection of results from the Lookback Api
     */
    async queryLookback(request: Toolkit.Api.Lookback.Request, workspaceId = 0): Promise<Toolkit.Api.Lookback.Response> {
        const workspace = workspaceId ? `/workspace/${workspaceId}` : this.workspace;
        const url = `${this.options.server}/analytics/v2.0/service/rally${workspace}/artifact/snapshot/query`;
        const finalParams = _.defaults(request, Client.defaultLookbackRequest);
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
        /** @type {Promise<Toolkit.Api.Lookback.Response>} */
        const resp = await Client.manageResponse(rawResponse);
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
     * returns an array modified to have additional meta data on it containing the results
     */
    async query(type: string, query: Toolkit.Api.QueryOptions = {}, params = {}):
        Promise<Toolkit.Api.QueryResponse<Toolkit.Api.RallyObject>> {
        const finalParams = _.defaults(query, params, this.defaultOptions);
        const url = Client._prepareUrl(this.options.server, type, false, finalParams);
        const headers = {
            zsessionid: this.apiKey,
            'Access-Control-Allow-Origin': '*'
        };
        const rawResponse = await fetch(url, {
            method: 'GET',
            headers,
            credentials: 'include'
        });
        let resp = await Client.manageResponse(rawResponse);
        resp.$params = finalParams;
        resp.forEach((d: Toolkit.Api.RallyObject) => this._decorateObject(d));
        return resp;
    }

    /**
     * Saves the current state of the Rally object to Rally.
     * Creating a new object on the server if no _ref is provided in rallyObject
     * @param type The type of object to be created
     * @param rallyObject A new or existing Rally object
     */
    async save(type: string, rallyObject: Partial<Toolkit.Api.RallyObject>): Promise<Toolkit.Api.RallyObject>
    async save(type: string, rallyObject: Partial<Toolkit.Api.RallyObject>, queryOptions: Toolkit.Api.QueryOptions): Promise<Toolkit.Api.RallyObject>
    async save(rallyObject: Partial<Toolkit.Api.RallyObject>, queryOptions: Toolkit.Api.QueryOptions): Promise<Toolkit.Api.RallyObject>
    async save(rallyObject: Partial<Toolkit.Api.RallyObject>): Promise<Toolkit.Api.RallyObject>
    async save(
        arg1: Partial<Toolkit.Api.RallyObject> | string,
        arg2: Partial<Toolkit.Api.RallyObject> | Toolkit.Api.QueryOptions = {},
        arg3: Toolkit.Api.QueryOptions = {}
    ): Promise<Toolkit.Api.RallyObject> {
        let type: string, url: string, rallyObject: any, params: Toolkit.Api.QueryOptions | Partial<Toolkit.Api.RallyObject>;
        rallyObject = _.isObject(arg1) ? arg1 : arg2;
        if (_.isString(arg1)) {
            type = arg1;
            rallyObject = arg2;
            params = arg3;
        } else if (_.isObject(rallyObject) && _.isString(rallyObject._ref)) {
            params = arg2;
            rallyObject = arg1;
        } else {
            throw new Error('Input must be either a string representing a type like "Defect" or an object containing a string field "_ref"');
        }
        const headers = {
            zsessionid: this.apiKey,
            'Access-Control-Allow-Origin': '*'
        };
        if (!rallyObject.Project && this.options.project) {
            rallyObject.Project = this.options.project;
        }
        if (rallyObject._ref) {
            url = Client._prepareUrl(
                this.options.server,
                Client.getTypeFromRef(rallyObject._ref),
                Client.getIdFromRef(rallyObject._ref),
                params
            );
        } else {
            const action = _.isNumber(rallyObject.ObjectID) ? `${rallyObject.ObjectID}` : 'create';

            url = Client._prepareUrl(this.options.server, type, action, params);

            if (_.isNumber(rallyObject.ObjectID)) {
                url = `${url}/${rallyObject.ObjectID}?`;
            } else {
                url = `${url}/create?`;
            }
        }
        const wrapper = {};
        wrapper[type] = rallyObject;
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

        let resp = await Client.manageResponse(rawResponse);
        resp.$params = params;
        this._decorateObject(resp);
        return resp;
    }

    /**
     * Returns a Rally object by ref or by type and ID
     */
    async get(typeOrRef: string, objectID = 0, params: Toolkit.Api.QueryOptions = {}): Promise<Toolkit.Api.RallyObject> {
        const result = await this._request(typeOrRef, objectID, params, 'GET');
        this._decorateObject(result);
        return result;
    }

    /**
     * Gets a subcollection stored on the Rally object
     */
    async getCollection(rallyObject: Toolkit.Api.RallyObject, collectionName: string, params: Toolkit.Api.QueryOptions = {}): Promise<Toolkit.Api.RallyObject> {
        const finalParams = _.defaults(params, this.defaultOptions);
        const ref = Client.getRef(rallyObject);
        const type = Client.getTypeFromRef(ref);
        const objectId = Client.getIdFromRef(ref);
        const action = `${objectId}/${collectionName}`;
        const url = Client._prepareUrl(this.options.server, type, action, finalParams);
        const headers = {
            zsessionid: this.apiKey,
            'Access-Control-Allow-Origin': '*'
        };
        const rawResponse = await fetch(url, {
            method: 'GET',
            headers,
            credentials: 'include'
        });
        let resp = await Client.manageResponse(rawResponse);
        resp.$params = finalParams;
        resp.forEach((d: Toolkit.Api.RallyObject) => this._decorateObject(d));
        rallyObject[collectionName] = _.defaults(resp, rallyObject[collectionName]);

        return resp;
    }

    /**
     * @private
     */
    async _request(typeOrRef: string, objectID = 0, params = {}, action: string) {
        let type = typeOrRef;
        if (!objectID) {
            type = Client.getTypeFromRef(typeOrRef);
            objectID = Client.getIdFromRef(typeOrRef);
        }
        const finalParams = _.defaults(params, { fetch: true }, this.defaultOptions);
        delete finalParams.project;
        delete finalParams.workspace;
        const url = Client._prepareUrl(this.options.server, type, objectID, finalParams);
        const headers = {
            zsessionid: this.apiKey,
            'Access-Control-Allow-Origin': '*'
        };
        const rawResponse = await fetch(url, {
            method: action,
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
    async _decorateObject(rallyObject: Toolkit.Api.RallyObject) {
        rallyObject.$save = () => this.save(rallyObject);
        rallyObject.$delete = () => this.delete(rallyObject);
    }

    /**
     * 
     * @param  inputOrRef Either a Rally object or the ref for a Rally object
     * @param  params Optional Params to be sent with the request
     * @param  ignoreDelay Pass true if you don't want to wait 500 ms longer to return. This time gives the Rally server a chance to finish deleting
     */
    async delete(inputOrRef: string | Toolkit.Api.RallyObject, params = {}, ignoreDelay = false) {
        let ref: any = inputOrRef;
        ref = _.isObject(ref) ? ref._ref : ref;
        const resp = await this._request(ref, 0, params, 'DELETE');
        if (!ignoreDelay) {
            // delete returns before the server has finished deleting adding in a fake wait to hope it is done before 
            const delayResult = await Client.delay(500);
        }
        return resp;
    }

    /**
     * returns the ref from a rally object or returns the ref is input is passed as a string
     */
    static getRef(input: string | Toolkit.Api.RallyObject, objectID: number = 0): string {
        let obj: any;
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
    static getIdFromRef(ref: string): number {
        if (!_.isString(ref)) return null;
        const [id] = ref.split('/').reverse();
        return Number(id) || null;
    }

    /**
     * Gets the type portion of a ref
     */
    static getTypeFromRef(ref: string): string {
        if (!_.isString(ref)) return null;
        const [, type = null] = ref.split('/').reverse();
        return type;
    }

    get defaultOptions(): Toolkit.Api.QueryOptions {
        const defaultRequest = {
            fetch: ['ObjectID', 'Name'],
            start: 1,
            pagesize: 2000,
            projectScopeUp: true,
            projectScopeDown: true,
            compact: true,
            includePermissions: true,
            project: undefined,
            workspace: this.workspace
        };
        return defaultRequest;
    }

    static get defaultLookbackRequest(): Toolkit.Api.QueryOptions {
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
    static _prepareUrl(server: string, type: string, action: boolean | string | number = '', params: Toolkit.Api.QueryOptions = {}) {
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
     */
    static delay(millisecondsOfDelay: number, scopeFuction: Function = () => { }) {
        return new Promise(((resolve) => {
            setTimeout(resolve.bind(null, scopeFuction), millisecondsOfDelay);
        }));
    }
}
