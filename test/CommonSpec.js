let chai = require('chai');

const Toolkit = require('../built/index');

const { Client, Common } = Toolkit;
const apiKey = require('../apikey.conf');// just the api key

const project = 300390419952;
// 300342594356 better project
const workspace = 288874995536;
const projectRef = `/project/${project}`;
const workspaceRef = `/workspace/${workspace}`;
const client = new Client(
  apiKey,
  {
    project: projectRef,
    workspace: workspaceRef
  }
);
const common = new Common(client);

const getOptions = () => {
  const options = client.defaultOptions;
  options.project = projectRef;
  options.workspace = workspaceRef;
  return options;
};

const { expect } = chai;
describe('Rally Common', function requestFoo() {
  this.timeout(5000);

  describe('getCollection', function getCollection() {
    let projectObject;
    before(async () => {
      projectObject = await client.get(projectRef);
    });

    it('Should getAllChildProjects', async () => {
      const allProjects = await common.getAllChildProjects([projectObject], ['Name', 'State', 'ObjectID']);
      expect(allProjects.length).to.equal(11, 'Expected two tags returned from sub collection');
      const closedProjects = allProjects.filter(p => p.State === 'Closed');
      expect(closedProjects.length).to.equal(10, 'Expected two tags returned from sub collection');
    });
  });
});
