// import _ from 'lodash';
// import * as Toolkit from './index';

// export class Common {

//     client: Toolkit.Client

//     constructor(client: Toolkit.Client) {
//         this.client = client;
//     }

//     /**
//      * 
//      * @param allRoots The list of root projects that the child projects will be returned from
//      * @param  fetch 
//      */
//     async getAllChildProjects(allRoots: Toolkit.Api.RallyObject[], fetch: string[] = ['Name', 'Children', 'Workspace']) {
//         if (!allRoots.length) {
//             return [];
//         }
//       const children = await client.getCollection(projectObject, 'Children', options);
//       //
//         //const promises = allRoots.map(r => CustomPromise.wrap(r.getCollection('Children', { fetch, limit: Infinity }).load()));
//         const children = _.flatten(await Promise.all(promises));
//         const decendents = await this.getAllChildProjects(children, fetch);
//         let finalResponse = _.flatten([...decendents, ...allRoots, ...children]);

//         const removeDupes = {};
//         // eslint-disable-next-line no-return-assign
//         finalResponse.forEach((s: { get: (arg0: string) => string | number; }) => removeDupes[s.get('_ref')] = s);
//         finalResponse = Object.values(removeDupes);
//         return finalResponse;
//     }
// }
