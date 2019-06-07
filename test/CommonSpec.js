let chai = require('chai');

const Toolkit = require('../built/index');

const { Client, Common } = Toolkit;
const apiKey = require('../apikey.conf');// just the api key

const project = 300390419952;
const project2 = 300342594356;
const workspace = 288874995536;
const projectRef = `/project/${project}`;
const project2Ref = `/project/${project2}`;
const workspaceRef = `/workspace/${workspace}`;
const client = new Client(
  apiKey,
  {
    project: projectRef,
    workspace: workspaceRef
  }
);
const common = new Common(client);

const { expect } = chai;
describe('Rally Common', function requestFoo() {
  this.timeout(50000);

  describe('getCollection', function getCollection() {
    let projectObject, projectObject2;
    before(async () => {
      projectObject = await client.get(projectRef);
      projectObject2 = await client.get(project2Ref);
    });

    it('Should getAllChildProjects', async () => {
      let countedLength = 0;
      // make sure Children is not required
      delete projectObject.Children;
      const allProjects = await common.getAllChildProjects(
        [projectObject],
        ['Name', 'State', 'ObjectID'],
        (projects) => {
          countedLength += projects.length;
        }
      );
      expect(allProjects.length).to.equal(11, 'Expected two tags returned from sub collection');
      const closedProjects = allProjects.filter(p => p.State === 'Closed');
      expect(closedProjects.length).to.equal(10, 'Expected two tags returned from sub collection');
    });

    it('Should getAllChildProjects with multi inputs', async () => {
      // eslint-disable-next-line no-unused-vars
      let countedLength = 0;
      // make sure Children is not required
      delete projectObject.Children;
      const allProjects = await common.getAllChildProjects(
        [projectObject, projectObject2],
        ['Name', 'State', 'ObjectID'],
        (projects) => {
          countedLength += projects.length;
        }
      );
      // this is a horrible test. It will break the minute anyone plays in that project but it will work for now
      expect(allProjects.length).to.equal(2093, 'Expected projects returned from sub collection');
      const closedProjects = allProjects.filter(p => p.State === 'Closed');
      expect(closedProjects.length).to.equal(963, 'Expected closed project to be returned from sub collection');

      // expect(countedLength).to.equal(allProjects.length, 'Expected all projects to have returned from the partial function');
    });
  });
});
