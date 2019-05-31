import _ = require('lodash');
import * as Toolkit from './index';

export class Common {

    client: Toolkit.Client

    constructor(client: Toolkit.Client) {
        this.client = client;
    }

    /**
     * 
     * @param allRoots The list of root projects that the child projects will be returned from
     * @param  fetch The list of fields you want fetched on the children. The children field will be added to the user selection
     */
    async getAllChildProjects(
        allRoots: Toolkit.Api.RallyObject[],
        fetch: string[] = ['Name', 'Workspace'],
        onEachPageComplete = (onePage) => []
    ) {
        const requiredFetchFields = _.uniq(["Children", ...fetch])
        if (!allRoots.length) {
            return [];
        }

        const promises = allRoots
            .filter(r => {
                if (!r.Children) {
                    return true;
                }
                return !!r.Children.Count;
            })
            .map(async r => {
                try{
                    return this.client.getCollection(r, 'Children', { fetch: requiredFetchFields });
                }
                catch(err){
                    return this.client.getCollection(r, 'Children', { fetch: requiredFetchFields });
                }
            });
        const children = _.flatten(await Promise.all(promises));
        onEachPageComplete([...allRoots, ...children]);
        const decendents = await this.getAllChildProjects(children, fetch, onEachPageComplete);
        let finalResponse = _.flatten([...decendents, ...allRoots, ...children]);

        const removeDupes = {};
        finalResponse.forEach((s) => { removeDupes[s['_ref']] = s; });
        finalResponse = Object.values(removeDupes);
        return finalResponse;
    }
}
