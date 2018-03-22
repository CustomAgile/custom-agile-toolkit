import RallyApi = require('./RallyApi');
declare class RallyClient {
    constructor(apiKey: string, options?: RallyApi.ClientOptions);
    /**
     * @private
     */
    apiKey: String;
    workspace: String;
    project: String;
    /**
     * @private
     */
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
    save(type: string, rallyObject: Partial<RallyApi.RallyObject>, params: RallyApi.QueryOptions): Promise<RallyApi.RallyObject>;
    save(rallyObject: Partial<RallyApi.RallyObject>, params: RallyApi.QueryOptions): Promise<RallyApi.RallyObject>;
    save(rallyObject: Partial<RallyApi.RallyObject>): Promise<RallyApi.RallyObject>;
    /**
     *
     * @param typeOrRef
     * @param objectID
     * @param params
     */
    get(typeOrRef: string, objectID?: number, params?: RallyApi.QueryOptions): Promise<RallyApi.RallyObject>;
    /**
     *
     * @param {RallyApi.RallyObject} rallyObject
     * @param {number} objectID
     */
    getCollection(rallyObject: RallyApi.RallyObject, collectionName: string, params?: RallyApi.QueryOptions): Promise<RallyApi.QueryResponse>;
    /**
     * @private
     */
    _request(typeOrRef: any, objectID: number, params: {}, action: any): Promise<any>;
    /**
     *
     *  Adds the delete and save options to each object
     */
    _decorateObject(rallyObject: RallyApi.RallyObject): Promise<void>;
    /**
     *
     * @param {*} inputOrRef Either a Rally object or the ref for a Rally object
     * @param {*} params Optional Params to be sent with the request
     * @param {Boolean} ignoreDelay Pass true if you don't want to wait a 500 ms longer to return. This time gives the Rally server a chance to finish deleting
     */
    delete(inputOrRef: any, params?: {}, ignoreDelay?: boolean): Promise<any>;
    /**
     *
     * @param {string | RallyApi.RallyObject} input
     * @param {number?} objectID
     * @returns {string}
     */
    static getRef(input: string | RallyApi.RallyObject, objectID?: number): string;
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
    static getTypeFromRef(ref: any): string;
    /**
     * @returns {RallyApi.QueryOptions}
     *
     */
    readonly defaultOptions: {
        fetch: string[];
        start: number;
        pagesize: number;
        projectScopeUp: boolean;
        projectScopeDown: boolean;
        compact: boolean;
        includePermissions: boolean;
        project: any;
        workspace: String;
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
     * @private
     * @param {string} server
     * @param {string} type
     * @param {string} action
     * @param {RallyApi.QueryOptions} params
     */
    static _prepareUrl(server: any, type: string, action?: boolean | string | number, params?: RallyApi.QueryOptions): string;
    /**
     * @private
     * @param millisecondsOfDelay
     * @param scopeFuction
     */
    static delay(millisecondsOfDelay: number, scopeFuction?: Function): Promise<{}>;
}
export = RallyClient;
