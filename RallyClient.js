
const fetch = require('node-fetch');
const _ = require('lodash');
const { URLSearchParams } = require('url');

class RallyClient {
    constructor(
        /** @type{string} */apiKey,
        options = {
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
    }

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

    /**
     * 
     * @param {RallyApi.Lookback.Request} request 
     * @returns {Promise<RallyApi.Lookback.Response>}
     */
    async queryLookback(request, workspace = 0) {
        workspace = workspace || this.workspace;
        const url = `${this.options.server}/analytics/v2.0/service/rally/workspace/${workspace}/artifact/snapshot/query`;
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
        if (resp.$hasMore) {
            resp.$getNextPage = async () => {
                const newRequest = _.cloneDeep(request);
                newRequest.start += newRequest.pagesize;
                return this.queryLookback(newRequest, workspace);
            };
            resp.$getAll = async () => {
                // TODO: eventually make this more concurrent
                let clonedCurrent = _.cloneDeep(resp);
                let currentResponse = await resp.$getNextPage();
                clonedCurrent = [...clonedCurrent, currentResponse];
                while (currentResponse.$hasMore) {
                    currentResponse = await currentResponse.$getNextPage();
                    clonedCurrent = [...clonedCurrent, currentResponse];
                }
                clonedCurrent.$getNextPage = async () => { throw new Error('No more pages in this request'); };
                clonedCurrent.$getAll = async () => clonedCurrent;
                clonedCurrent.$hasMore = false;
                clonedCurrent.$rawResponse = resp.$rawResponse;
                return clonedCurrent;
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
     * @returns {Promise<object[]>}
     */
    async query(type, query = {}, params = {}) {
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
        return resp;
    }

    /**
     * 
     * @param {string} type 
     * @param {[string:any]} data 
     * @param {[string:any]} params 
     * @returns {Promise<object>}
     */
    async save(type, data, params = {}) {
        const headers = {
            zsessionid: this.apiKey,
            'Access-Control-Allow-Origin': '*'
        };
        if (!data.Project && this.options.project) {
            data.Project = this.options.project;
        }
        const action = _.isNumber(data.ObjectID) ? `${data.ObjectID}` : 'create';
        let url = RallyClient.prepareUrl(this.options.server, type, action, params);

        if (_.isNumber(data.ObjectID)) {
            url = `${url}/${data.ObjectID}?`;
        } else {
            url = `${url}/create?`;
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
        return resp;
    }

    /**
     * 
     * @param {string} typeOrRef 
     * @param {number} objectID 
     * @returns {Promise}
     */
    async get(typeOrRef, objectID = 0, params = {}) {
        let type = typeOrRef;
        if (!objectID) {
            type = RallyClient.getTypeFromRef(typeOrRef);
            objectID = RallyClient.getIdFromRef(typeOrRef);
        }
        const finalParams = _.defaults(params, { fetch: true }, RallyClient.defaultOptions);
        delete finalParams.project;
        delete finalParams.workspace;
        const url = RallyClient.prepareUrl(this.options.server, type, objectID.toString(), finalParams);
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
        resp = resp[_.keys(resp)[0]];
        resp.$params = finalParams;
        return resp;
    }

    /**
     * 
     * @param {string} typeOrRef 
     * @param {number} objectID 
     * @returns {string}
     */
    static getRef(typeOrRef, objectID) {
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
     * @returns {RallyClient.QueryOptions}
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
     * @returns {RallyClient.QueryOptions}
     * 
     */
    static get defaultLookbackRequest() {
        return {
            find: {},
            fields: ['ObjectID', 'Name'],
            hydrate: [],
            start: 0,
            pagesize: 100,
            removeUnauthorizedSnapshots: true
        };
    }

    /**
     * 
     * @param {string} server 
     * @param {string} type 
     * @param {string} action 
     * @param {object} params 
     */
    static prepareUrl(server, type, action = '', params = {}) {
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
        let url = `${server}slm/webservice/v2.0/${type}${action}`;
        url += `?${searchParams.toString()}`;
        return url;
    }
}

module.exports = { RallyClient };
