let chai = require('chai');
const Request = require('../index');
const apiKey = require('./apikey.conf');// just the api key

const project = 109942692864;
const workspace = 109942692528;
const projectRef = `/project/${project}`;
const workspaceRef = `/workspace/${workspace}`;

const getOptions = () => {
  const options = Request.defaultOptions;
  options.project = projectRef;
  options.workspace = workspaceRef;
  return options;
};

const { expect } = chai;
describe('Request', function requestFoo() {
  this.timeout(5000);

  it('should default the server to rally1 if no server is given in the options', function testServer() {
      const request = new Request(apiKey, { project: projectRef });
      expect(request.server).to.equal('https://rally1.rallydev.com');      
  });

  describe('getRef', function getRef() {
    it('should use ref when provided', () => {
      expect(Request.getRef('/project/786')).to.equal('/project/786');
    });
    it('should construct a ref our of a type and id', () => {
      expect(Request.getRef('project', 786)).to.equal('/project/786');
    });
  });
  describe('prepareUrl', function prepareUrl() {
    this.timeout(5000);
    it('should use ref when provided', () => {
      const url = Request.prepareUrl(
        'https://rally1.rallydev.com',
        'project',
        false,
        { test: true }
      );
      expect(url).to.equal('https://rally1.rallydev.com/slm/webservice/v2.0/project?test=true');
    });
  });

  describe('query', function queryFoo() {
    this.timeout(5000);

    it('should get a page of story data', async () => {
      const request = new Request(apiKey);
      const query = Request.defaultOptions;

      return request.query('Project', query)
        .then((projects) => {
          expect(projects.length).to.not.equal(0);
        });
    });
    it('should handle rally errors', async () => {
      const request = new Request(apiKey);
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
      const request = new Request(apiKey, { server });
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
      const request = new Request(apiKey);
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
      const request = new Request(apiKey);
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
  });
});

