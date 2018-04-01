import * as RallyApi from './Api';
export declare class RallyClient {
    constructor(apiKey: string, options?: RallyApi.ClientOptions);
    /**
     * @private
     */
    apiKey: string;
    workspace: string;
    project: string;
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
    /**
     * Returns a collection of results from the Lookback Api
     */
    queryLookback(/** @type {RallyApi.Lookback.Request} */ request: any, workspaceId?: number): Promise<RallyApi.Lookback.Response>;
    /**
     * returns an array modified to have additional meta data on it containing the results
     */
    query(type: any, query?: RallyApi.QueryOptions, params?: {}): Promise<RallyApi.QueryResponse>;
    /**
     * Saves the current state of the Rally object to Rally.
     * Creating a new object on the server if no _ref is provided in rallyObject
     * @param type The type of object to be created
     * @param rallyObject A new or existing Rally object
     */
    save(type: string, rallyObject: Partial<RallyApi.RallyObject>, ...rest: any[]): Promise<RallyApi.RallyObject>;
    save(rallyObject: Partial<RallyApi.RallyObject>, ...rest: any[]): Promise<RallyApi.RallyObject>;
    save(rallyObject: Partial<RallyApi.RallyObject>): Promise<RallyApi.RallyObject>;
    /**
     * Returns a Rally object by ref or by type and ID
     */
    get(typeOrRef: string, objectID?: number, params?: RallyApi.QueryOptions): Promise<RallyApi.RallyObject>;
    /**
     * Gets a subcollection stored on the Rally object
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
     * @param  inputOrRef Either a Rally object or the ref for a Rally object
     * @param  params Optional Params to be sent with the request
     * @param  ignoreDelay Pass true if you don't want to wait 500 ms longer to return. This time gives the Rally server a chance to finish deleting
     */
    delete(inputOrRef: string | RallyApi.RallyObject, params?: {}, ignoreDelay?: boolean): Promise<any>;
    /**
     * returns the ref from a rally object or returns the ref is input is passed as a string
     */
    static getRef(input: string | RallyApi.RallyObject, objectID?: number): string;
    /**
     * Gets the ID portion of a ref
     */
    static getIdFromRef(ref: string): number;
    /**
     * Gets the type portion of a ref
     */
    static getTypeFromRef(ref: string): string;
    readonly defaultOptions: RallyApi.QueryOptions;
    static readonly defaultLookbackRequest: RallyApi.QueryOptions;
    /**
     * @private
     */
    static _prepareUrl(server: any, type: string, action?: boolean | string | number, params?: RallyApi.QueryOptions): string;
    /**
     * @private
     */
    static delay(millisecondsOfDelay: number, scopeFuction?: Function): Promise<{}>;
}
