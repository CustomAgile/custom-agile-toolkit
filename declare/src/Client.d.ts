import * as Toolkit from '../index';
export declare class Client {
    constructor(apiKey: string, options?: Toolkit.Api.ClientOptions);
    /**
     * @private
     */
    apiKey: string;
    workspace: string;
    project: string;
    /** Maximum concurrent requests that a client can make */
    maxConcurrentRequests: number;
    /**
     * @private
     */
    options: Toolkit.Api.ClientOptions;
    /**
     * The default Rally server Rally to be used
     */
    static readonly defaultRallyServer: string;
    /** The default server for Rally to be used*/
    static manageResponse(response: {
        ok: any;
        statusText: any;
        status: any;
        json: () => void;
    }): Promise<any>;
    /** Returns a collection of results from the Lookback Api */
    queryLookback(request: Toolkit.Api.Lookback.Request, workspaceId?: number): Promise<Toolkit.Api.Lookback.Response>;
    /** returns an array modified to have additional meta data on it containing the results */
    query(type: string, query?: Toolkit.Api.QueryOptions, params?: {}): Promise<Toolkit.Api.QueryResponse<Toolkit.Api.RallyObject>>;
    /**
     * Saves the current state of the Rally object to Rally.
     * Creating a new object on the server if no _ref is provided in rallyObject
     * @param type The type of object to be created
     * @param rallyObject A new or existing Rally object
     */
    save(type: string, rallyObject: Partial<Toolkit.Api.RallyObject>): Promise<Toolkit.Api.RallyObject>;
    save(type: string, rallyObject: Partial<Toolkit.Api.RallyObject>, queryOptions: Toolkit.Api.QueryOptions): Promise<Toolkit.Api.RallyObject>;
    save(rallyObject: Partial<Toolkit.Api.RallyObject>, queryOptions: Toolkit.Api.QueryOptions): Promise<Toolkit.Api.RallyObject>;
    save(rallyObject: Partial<Toolkit.Api.RallyObject>): Promise<Toolkit.Api.RallyObject>;
    /**
     * Returns a Rally object by ref or by type and ID
     */
    get(typeOrRef: string, objectID?: any, params?: Toolkit.Api.QueryOptions): Promise<Toolkit.Api.RallyObject>;
    /**
     * Gets a subcollection stored on the Rally object
     */
    getCollection(rallyObject: Toolkit.Api.RallyObject, collectionName: string, params?: Toolkit.Api.QueryOptions): Promise<Toolkit.Api.RallyObject[]>;
    /**
     * @private
     */
    _request(typeOrRef: string, objectID: any, params: {}, action: string): Promise<any>;
    /**
     *
     *  Adds the delete and save options to each object
     */
    _decorateObject(rallyObject: Toolkit.Api.RallyObject): Promise<void>;
    /**
     *
     * @param  inputOrRef Either a Rally object or the ref for a Rally object
     * @param  params Optional Params to be sent with the request
     * @param  ignoreDelay Pass true if you don't want to wait 500 ms longer to return. This time gives the Rally server a chance to finish deleting
     */
    delete(inputOrRef: string | Toolkit.Api.RallyObject, params?: {}, ignoreDelay?: boolean): Promise<any>;
    /**
     * returns the ref from a rally object or returns the ref is input is passed as a string
     */
    static getRef(input: string | Toolkit.Api.RallyObject, objectID?: number): string;
    /**
     * Gets the ID portion of a ref
     */
    static getIdFromRef(ref: string): string;
    /**
     * Gets the type portion of a ref
     */
    static getTypeFromRef(ref: string): string;
    readonly defaultOptions: Toolkit.Api.QueryOptions;
    static readonly defaultLookbackRequest: Toolkit.Api.QueryOptions;
    /**
     * @private
     */
    static _prepareUrl(server: string, type: string, action?: boolean | string | number, params?: Toolkit.Api.QueryOptions): string;
    /**
     * @private
     */
    static delay(millisecondsOfDelay: number, scopeFuction?: Function): Promise<{}>;
}
