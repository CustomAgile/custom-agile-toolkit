let chai = require('chai');
const { RallyClient } = require('../index');
const apiKey = require('./apikey.conf');// just the api key

const project = 109942692864;
const workspace = 109942692528;
const projectRef = `/project/${project}`;
const workspaceRef = `/workspace/${workspace}`;

const getOptions = () => {
  const options = RallyClient.defaultOptions;
  options.project = projectRef;
  options.workspace = workspaceRef;
  return options;
};

const { expect } = chai;
describe('Request', function requestFoo() {
  this.timeout(5000);

  it('should default the server to rally1 if no server is given in the options', function testServer() {
    const request = new RallyClient(apiKey, { project: projectRef });
    expect(request.server).to.equal('https://rally1.rallydev.com');
  });

  describe('getRef', function getRef() {
    it('should use ref when provided', () => {
      expect(RallyClient.getRef('/project/786')).to.equal('/project/786');
    });
    it('should construct a ref our of a type and id', () => {
      expect(RallyClient.getRef('project', 786)).to.equal('/project/786');
    });
  });
  describe('prepareUrl', function prepareUrl() {
    this.timeout(5000);
    it('should use ref when provided', () => {
      const url = RallyClient.prepareUrl(
        'https://rally1.rallydev.com',
        'project',
        false,
        { test: true }
      );
      expect(url).to.equal('https://rally1.rallydev.com/slm/webservice/v2.0/project?test=true');
    });
  });

  describe('queryRaw', function queryRaw() {
    it('should show defaulted query info', async () => {
      const request = new RallyClient(apiKey);
      const query = { 
        Query: '(Name Contains "test")',
        project: projectRef,
        workspace: workspaceRef,
        pagesize: 2000
      };
      const options = RallyClient.defaultOptions;
      options.Query = query.Query;
      options.project = projectRef;
      options.workspace = workspaceRef;
      options.pagesize = 2000;
      let defectsResponse = await request.queryRaw('Defect', query);
      expect(defectsResponse.params).to.deep.equal(options);
    });
  });
  describe('query', function queryFoo() {
    this.timeout(5000);

    it('should get a page of story data', async () => {
      const request = new RallyClient(apiKey);
      const query = RallyClient.defaultOptions;

      let projects = await request.query('Project', query);
      expect(projects.length).to.not.equal(0);
    });
    it('should handle rally errors', async () => {
      const request = new RallyClient(apiKey);
      const options = getOptions();
      options.query = '(Name zobolts 9)';
      return request.query('Project', options)
        .then((projects) => {
          fail('Error not caught');
        })
        .catch((err) => {
          expect(err);
          expect(err.message).to.equal('Rally Server Error: Could not parse: Unknown operator "zobolts"');
        });
    });

    it('should handle http errors', async () => {
      const server = 'https://rally1.ralfdfdlydev.com';
      const request = new RallyClient(apiKey, { server });
      return request.query('Project', getOptions())
        .then((projects) => {
          fail('Error not caught');
        })
        .catch((err) => {
          expect(err);
          expect((err.message).includes(server)).to.equal(true);
        });
    });
  });

  describe('save', function save() {
    this.timeout(5000);
    it('should create a new defect', async () => {
      const request = new RallyClient(apiKey);
      const defect = {
        Project: projectRef,
        Name: 'test defect'
      };

      const defectObject = await request.save('Defect', defect);

      expect(defectObject);
      expect((defectObject.Name)).to.equal(defect.Name);
      expect((defectObject.ObjectID));
    });

    it('should update a defect', async () => {
      const rand = Math.floor((Math.random() * 10000));
      const request = new RallyClient(apiKey);
      const defect = {
        ObjectID: 172482267852,
        Project: projectRef,
        Name: `${rand}`
      };

      const defectObject = await request.save('Defect', defect);

      expect(defectObject);
      expect((defectObject.Name)).to.equal(defect.Name);
      expect((defectObject.ObjectID)).to.equal(defect.ObjectID);
    });

    it('should handle rally errors', async () => {
      const request = new RallyClient(apiKey);
      const defect = {
        Project: projectRef,
        Name: 'test defect'
      };

      return request.save('IAMNOTAREALONE', defect)
        .then(() => fail())
        .catch((err) => {
          expect(err.message);
          expect((err.message).includes('Requested type name "iamnotarealone" is unknown')).to.equal(true);
        });
    });
  });
});
