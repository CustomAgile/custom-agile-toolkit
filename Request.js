const fetch = require('node-fetch');
const _ = require('lodash');
const { URL, URLSearchParams } = require('url');

const manageResponse = async (response) => {
    if (!response.ok) {
        console.error(response.status);
        console.error(response.statusText);
        return Promise.reject(new Error(`${response.statusText} Code:${response.status}`));
    }
    const resp = await response.json();
    const { QueryResult } = resp;
    const unwrappedResponse = resp[_.keys(resp)[0]];
    const errors = unwrappedResponse.Errors || resp.Errors;
    if (errors && errors.length) {
        return Promise.reject(new Error(errors.map(e => `Rally Server Error: ${e}`).join(',')));
    }
    if (QueryResult) {
        return QueryResult.Results;
    }
    if (unwrappedResponse.Object) {
        return unwrappedResponse.Object;
    }
    console.error(resp);
    throw new Error('Response type not found');
};

class Request {
    constructor(
        /** @type{string} */apiKey,
        options = {
            server: 'https://rally1.rallydev.com',
            project: undefined,
            workspace: undefined
        }
    ) {
        if (!_.isString(apiKey)) {
            console.error(apiKey);
            throw new Error('Api key is required');
        }
        this.options = options;
        this.server = options.server;
        this.apiKey = apiKey;
    }

    /**
     * 
     * @param {string} type 
     * @param {RallyClient.QueryOptions} query 
     * @param {[string:any]} params 
     * @returns {Promise<object[]>}
     */
    query(type, params = {}) {
        const url = Request.prepareUrl(this.server, type, false, params);
        const headers = {
            zsessionid: this.apiKey,
            'Access-Control-Allow-Origin': '*'
        };
        return fetch(url, {
            method: 'GET',
            headers,
            credentials: 'include'
        })
        .then(manageResponse);
    }

    /**
 * 
 * @param {string} type 
 * @param {[string:any]} data 
 * @param {[string:any]} params 
 * @returns {Promise<object>}
 */
    save(type, data, params = {}) {
        const headers = {
            zsessionid: this.apiKey,
            'Access-Control-Allow-Origin': '*'
        };
        const action = _.isNumber(data.ObjectID) ? `${data.ObjectID}` : 'create';
        let url = Request.prepareUrl(this.server, type, action, params);
        
        if (_.isNumber(data.ObjectID)) {
            url = `${url}/${data.ObjectID}?`;
        } else {
            url = `${url}/create?`;
        }
        const wrapper = {};
        wrapper[type] = data;
        const body = JSON.stringify(wrapper);
        console.log(body);
        return fetch(
url, 
            {
                method: 'PUT',
                headers,
                credentials: 'include',
                body
            }
)
            .then(manageResponse);
    }

    /**
     * 
     * @param {string} typeOrRef 
     * @param {number} objectID 
     * @returns {Promise}
     */
    get(typeOrRef, objectID) {
        const ref = Request.getRef(typeOrRef, objectID);
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
     * @returns {RallyClient.QueryOptions}
     * 
     */
    static get defaultOptions() {
        /**
         * @type {RallyClient.QueryOptions}
         */
        const defaultRequest = {
            fetch: ['ObjectID', 'Name'],
            x: '(Name contains "name")',
            start: 1,
            pageSize: 200,
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

module.exports = Request;
