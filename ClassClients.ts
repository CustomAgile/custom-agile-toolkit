import * as RallyApi from './Api';
import { RallyClient } from './Client';

export class Client {
    constructor(
        client: RallyClient,
        typeName: string
    ) {
        this.client = client;
        this.typeName = typeName;
    }
    /**
     * Private
     */
    client: RallyClient
    /**
     * Private
     */
    typeName: string
    /**
     * returns an array modified to have additional meta data on it containing the results
     */
    async query(type, query: RallyApi.QueryOptions = {}, params = {}):
        Promise<RallyApi.QueryResponse> {
        return this.client.query(this.typeName, query, params);
    }

    /**
     * Saves the current state of the Rally object to Rally.
     * Creating a new object on the server if no _ref is provided in rallyObject
     * @param rallyObject A new or existing Rally object
     */
    async save(rallyObject: Partial<RallyApi.RallyObject>): Promise<RallyApi.RallyObject>
    async save(
        rallyObject: Partial<RallyApi.RallyObject>,
        queryOptions: RallyApi.QueryOptions = {}
    ): Promise<RallyApi.RallyObject> {
        return this.client.save(rallyObject, queryOptions);
    }

    /**
     * Returns a Rally object by ref or by type and ID
     */
    async get(typeOrRef: string, objectID = 0, params: RallyApi.QueryOptions = {}): Promise<RallyApi.RallyObject> {
        return this.client.get(typeOrRef, objectID, params);
    }

    /**
     * Gets a subcollection stored on the Rally object
     */
    async getCollection(rallyObject: RallyApi.RallyObject, collectionName: string, params: RallyApi.QueryOptions = {}): Promise<RallyApi.QueryResponse> {
        return this.client.getCollection(rallyObject, collectionName, params);
    }

    /**
     * 
     * @param  inputOrRef Either a Rally object or the ref for a Rally object
     * @param  params Optional Params to be sent with the request
     * @param  ignoreDelay Pass true if you don't want to wait 500 ms longer to return. This time gives the Rally server a chance to finish deleting
     */
    async delete(inputOrRef: string | RallyApi.RallyObject, params = {}, ignoreDelay = false) {
        return this.client.delete(inputOrRef, params, ignoreDelay);
    }
}
