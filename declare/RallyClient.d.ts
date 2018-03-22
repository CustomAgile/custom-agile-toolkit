import RallyApi = require('./RallyApi');
declare class RallyClient {
    constructor(apiKey: string, options?: RallyApi.ClientOptions);
    apiKey: String;
    workspace: String;
    project: String;
    options: RallyApi.ClientOptions;
    /**
     * The default Rally server Rally to be used
     */
    static readonly defaultRallyServer: string;
    /**
     * The default server for Rally to be used
     */
    static manageResponse(response: any): Promise<any>;
    queryLookback(/** @type {RallyApi.Lookback.Request} */ request: any, workspaceId?: number): Promise<RallyApi.Lookback.Response>;
    query(type: any, query?: RallyApi.QueryOptions, params?: {}): Promise<RallyApi.QueryResponse>;
    /**
     * Saves the current state of the Rally object to Rally.
     * Creating a new object on the server if no _ref is provided in rallyObject
     * @param type The type of object to be created
     * @param rallyObject A new or existing Rally object
     */
    save(type: string, rallyObject: Partial<RallyApi.RallyObject>, params: RallyApi.QueryOptions): Promise<void>;
    save(rallyObject: Partial<RallyApi.RallyObject>, params: RallyApi.QueryOptions): Promise<void>;
    save(rallyObject: Partial<RallyApi.RallyObject>): Promise<void>;
    /**
     *
     * @param {string} typeOrRef
     * @param {number} objectID
     * @returns {Promise}
     */
    get(typeOrRef: any, objectID?: number, params?: {}): Promise<any>;
    /**
     *
     * @param {RallyApi.RallyObject} object
     * @param {number} objectID
     * @returns {Promise}
     */
    getCollection(typeOrRef: any, objectID?: number, params?: {}): Promise<any>;
    /**
     * @private
     */
    _request(typeOrRef: any, objectID: number, params: {}, action: any): Promise<any>;
    /**
    * Adds the delete and save options to each object
    * @private
    */
    _decorateObject(object: any): Promise<void>;
    /**
     *
     * @param {*} inputOrRef Either a Rally object or the ref for a Rally object
     * @param {*} params Optional Params to be sent with the request
     * @param {Boolean} ignoreDelay Pass true if you don't want to wait a 500 ms longer to return. This time gives the Rally server a chance to finish deleting
     */
    delete(inputOrRef: any, params?: {}, ignoreDelay?: boolean): Promise<any>;
    static getRefFromStringOrObject(input: any): any;
    /**
     *
     * @param {string} typeOrRef
     * @param {number} objectID
     * @returns {string}
     */
    static getRef(typeOrRef: any, objectID: any): string;
    /**
     * Gets the ID portion of a ref
     * @param {string} typeOrRef
     * @returns {string}
     */
    static getIdFromRef(ref: any): number;
    /**
     * Gets the type portion of a ref
     * @param {string} ref
     * @returns {string}
     */
    static getTypeFromRef(ref: any): any;
    /**
     * @returns {RallyApi.QueryOptions}
     *
     */
    static readonly defaultOptions: {
        fetch: string[];
        start: number;
        pagesize: number;
        projectScopeUp: boolean;
        projectScopeDown: boolean;
        compact: boolean;
        includePermissions: boolean;
        project: any;
        workspace: any;
    };
    /**
     * @returns {RallyApi.QueryOptions}
     *
     */
    static readonly defaultLookbackRequest: {
        find: {};
        fields: string[];
        hydrate: any[];
        start: number;
        pagesize: number;
        removeUnauthorizedSnapshots: boolean;
    };
    /**
     *
     * @param {string} server
     * @param {string} type
     * @param {string} action
     * @param {RallyApi.QueryOptions} params
     */
    static prepareUrl(server: any, type: string, action?: boolean | string | number, params?: RallyApi.QueryOptions): string;
    /**
     * @private
     * @param millisecondsOfDelay
     * @param scopeFuction
     */
    static delay(millisecondsOfDelay: number, scopeFuction?: Function): Promise<{}>;
}
export = RallyClient;
