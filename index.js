
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
            console.error(apiKey);
            throw new Error('Api key is required');
        }
        this.options = options;
        this.server = options.server || RallyClient.defaultRallyServer;
        this.apiKey = apiKey;
    }

    /**
     * The default server for Rally to be used
     */
    static get defaultRallyServer() {
        return 'https://rally1.rallydev.com';
    }

    /**
     * The default server for Rally to be used
     */
    static async manageResponse(response) {
        if (!response.ok) {
            console.error(response.status);
            console.error(response.statusText);
            throw new Error(`${response.statusText} Code:${response.status}`);
        }
        const resp = await response.json();
        const { QueryResult } = resp;
        const unwrappedResponse = resp[_.keys(resp)[0]];
        const errors = unwrappedResponse.Errors || resp.Errors;
        if (errors && errors.length) {
            throw new Error(errors.map(e => `Rally Server Error: ${e}`).join(','));
        }
        if (QueryResult) {
            return QueryResult.Results;
        }
        if (unwrappedResponse.Object) {
            return unwrappedResponse.Object;
        }
        throw new Error('Response type not found');
    }

    /**
     * 
     * @param {string} type 
     * @param {RallyApi.QueryOptions} query 
     * @param {[string:any]} params 
     * @returns {Promise<object[]>}
     */
    async query(...args) {
        const rawResponse = await this.queryRaw(...args);
        return RallyClient.manageResponse(rawResponse);
    }

    /**
     * Returns all information from the API including request information
     * @param {string} type 
     * @param {RallyClient.QueryOptions} query 
     * @param {[string:any]} params 
     * @returns {Promise<object[]>}
     */
    async queryRaw(type, query = {}, params = {}) {
        const finalParams = _.defaults(query, params, RallyClient.defaultOptions);
        const url = RallyClient.prepareUrl(this.server, type, false, finalParams);
        const headers = {
            zsessionid: this.apiKey,
            'Access-Control-Allow-Origin': '*'
        };
        const rawResponse = await fetch(url, {
            method: 'GET',
            headers,
            credentials: 'include'
        });
        rawResponse.params = finalParams;
        return rawResponse;
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
        let url = RallyClient.prepareUrl(this.server, type, action, params);

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
        return RallyClient.manageResponse(rawResponse);
    }

    // /**
    //  * 
    //  * @param {string} typeOrRef 
    //  * @param {number} objectID 
    //  * @returns {Promise}
    //  */
    // async get(typeOrRef, objectID) {
    //     const ref = Request.getRef(typeOrRef, objectID);
    // }

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
     * @returns {RallyClient.QueryOptions}
     * 
     */
    static get defaultOptions() {
        /**
         * @type {RallyClient.QueryOptions}
         */
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

    static prepareUrl(server, type, action = false, params = {}) {
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
