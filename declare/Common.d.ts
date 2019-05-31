import * as Toolkit from './index';
export declare class Common {
    client: Toolkit.Client;
    constructor(client: Toolkit.Client);
    /**
     *
     * @param allRoots The list of root projects that the child projects will be returned from
     * @param  fetch The list of fields you want fetched on the children. The children field will be added to the user selection
     */
    getAllChildProjects(allRoots: Toolkit.Api.RallyObject[], fetch?: string[]): any;
}
