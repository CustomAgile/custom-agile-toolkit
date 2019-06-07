let chai = require('chai');

const Toolkit = require('../built/index');

const { Client } = Toolkit;
const apiKey = require('../apikey.conf');// just the api key

const project = 199606970176;
const workspace = 199606969760;
const projectRef = `/project/${project}`;
const workspaceRef = `/workspace/${workspace}`;
const defectId = 206176979708;
const defectId2 = 206335021952;
const client = new Client(
  apiKey,
  {
    project: projectRef,
    workspace: workspaceRef
  }
);

const getOptions = () => {
  const options = client.defaultQueryOptions;
  options.project = projectRef;
  options.workspace = workspaceRef;
  return options;
};

const { expect } = chai;
describe('Rally Client', function requestFoo() {
  this.timeout(5000);

  it('should default the server to rally1 if no server is given in the options', function testServer() {
    expect(client.options.server).to.equal('https://rally1.rallydev.com');
  });

  describe('getRef', function getRef() {
    it('should use ref when provided', () => {
      expect(Client.getRef('/project/786')).to.equal('/project/786');
    });
    it('should construct a ref our of a type and id', () => {
      expect(Client.getRef('project', 786)).to.equal('/project/786');
    });
    it('should get the ref from a rally object', () => {
      const fakeRallyObject = { _ref: '/defect/1234' };
      expect(Client.getRef(fakeRallyObject)).to.equal('/defect/1234');
    });
    it('should throw an exception if the rally object doesn\'t have a ref', () => {
      const fakeRallyObject = { _notRef: '/defect/1234' };
      try {
        Client.getRef(fakeRallyObject);
        expect.fail(null, null, 'Exception should of been thrown by Rally');
      } catch (err) {
        expect(err.message).to.equal('_ref must be specified to use getRef from a RallyObject');
      }
    });
  });

  describe('prepareUrl', function prepareUrl() {
    it('should use ref when provided', () => {
      const url = Client._prepareUrl(
        'https://rally1.rallydev.com',
        'project',
        false,
        { test: true }
      );
      expect(url).to.equal('https://rally1.rallydev.com/slm/webservice/v2.0/project?test=true');
    });
  });

  describe('query', function queryFoo() {
    it('should show defaulted query info', async () => {
      const defaultClient = new Client(apiKey);
      const query = {
        query: '(Name Contains "test")',
        project: projectRef,
        workspace: workspaceRef,
        pagesize: 1
      };
      const options = client.defaultQueryOptions;
      options.query = query.query;
      options.project = projectRef;
      options.workspace = workspaceRef;
      options.pagesize = 1;
      let defectsResponse = await defaultClient.query('Defect', query);
      expect(defectsResponse.$params).to.deep.equal(options);
    });

    it('should get a page of story data', async () => {
      const query = client.defaultQueryOptions;
      const pagesize = 1;
      query.pagesize = pagesize;
      let stories = await client.query('hierarchicalrequirement', query);
      expect(stories.length).to.equal(pagesize);
      expect(stories.$getNextPage).to.be.a('function');
      expect(stories.$hasMore).to.be.a('boolean');
    });

    it('should properly set $hasMore', async () => {
      client.query('hierarchicalrequirement', { pagesize: 1 })
        .then((result) => {
          expect(result.$hasMore);
        });

      client.query('project', { pagesize: 2000 })
        .then((result) => {
          expect(!result.$hasMore);
        });
    });

    it('should properly return more results with $getNextPage', async () => {
      client.query('hierarchicalrequirement', { pagesize: 1 })
        .then((result) => {
          result.$getNextPage().then((nextResult) => {
            expect(nextResult);
            expect(nextResult.length > 0);
          });
        });
    });

    it('should handle getNextPage error', async () => {
      client.query('project', { pagesize: 2000 })
        .then((result) => {
          try {
            result.$getNextPage();
            expect.fail('Error not caught');
          } catch (err) {
            expect(err);
            expect(err.message).to.equal('No more pages in this request');
          }
        });
    });

    it('should handle rally errors', async () => {
      const options = getOptions();
      options.query = '(Name zobolts 9)';
      return client.query('Project', options)
        .then((projects) => {
          expect.fail('Error not caught');
        })
        .catch((err) => {
          expect(err);
          expect(err.message).to.equal('Rally Server Error: Could not parse: Unknown operator "zobolts"');
        });
    });

    it('should handle http errors', async () => {
      const server = 'https://rally1.ralfdfdlydev.com';
      const brokenClient = new Client(apiKey, { server });

      try {
        await brokenClient.query('Project', getOptions());
        expect.fail('Error not caught');
      } catch (err) {
        expect(err);
        expect((err.message).includes(server)).to.equal(true);
      }
    });
  });

  describe('save', function save() {
    it('should create a new defect', async () => {
      const defect = {
        Project: projectRef,
        Name: 'test defect',
        c_CreatedByAutomatedTest: true
      };

      const defectObject = await client.save('Defect', defect);

      expect(defectObject);
      expect((defectObject.Name)).to.equal(defect.Name);
      expect((defectObject.ObjectID));
      // defectObject;
    });

    it('should update a defect', async () => {
      const rand = Math.floor((Math.random() * 10000));
      const defect = {
        ObjectID: defectId,
        Project: projectRef,
        Name: `${rand}`
      };

      const defectObject = await client.save('Defect', defect);

      expect(defectObject);
      expect(defectObject.Name).to.equal(defect.Name);
      expect(defectObject.ObjectID).to.equal(defectId);
    });

    it('should update a defect if ref is set without specifying type', async () => {
      const rand = Math.floor((Math.random() * 10000));
      const defect = {
        _ref: `https://rally1.rallydev.com/slm/webservice/v2.x/defect/${defectId2}`,
        ObjectID: -1,
        Project: projectRef,
        Name: `${rand}`
      };

      const defectObject = await client.save(defect);

      expect(defectObject);
      expect(defectObject.Name).to.equal(defect.Name);
      expect((defectObject.ObjectID)).to.equal(defectId2);
    });

    it('should update a defect if a local ref "/defect/1234" is set without specifying type', async () => {
      const rand = Math.floor((Math.random() * 10000));
      const defect = {
        _ref: `/defect/${defectId}`,
        ObjectID: -1,
        Project: projectRef,
        Name: `${rand}`
      };

      const defectObject = await client.save(defect);

      expect(defectObject);
      expect((defectObject.Name)).to.equal(defect.Name);
      expect((defectObject.ObjectID)).to.equal(defectId);
    });

    it('should handle error if input Rally Object has no _ref', async () => {
      const defect = {
        Project: projectRef,
        Name: 'test defect'
      };

      try {
        await client.save(defect);
        expect.fail('exception expected for bad endpoint');
      } catch (err) {
        expect(err.message);
        expect((err.message).includes('Input must be either a string representing a type like "Defect" or an object containing a string field "_ref"')).to.equal(true);
      }
    });

    it('should handle rally errors', async () => {
      const defect = {
        Project: projectRef,
        Name: 'test defect'
      };

      try {
        await client.save('IAMNOTAREALONE', defect);
        expect.fail('exception expected for bad endpoint');
      } catch (err) {
        expect(err.message);
        expect((err.message).includes('Requested type name "iamnotarealone" is unknown')).to.equal(true);
      }
    });
  });

  describe('Ref Tests', () => {
    describe('getIdFromRef', function getRef() {
      it('Should get the id from shorted ref', () => {
        expect(Client.getIdFromRef('/type/76894'))
          .to.equal('76894');
      });
      it('Should get the id from weird permission ref', () => {
        const result = Client.getIdFromRef('https://rally1.rallydev.com/slm/webservice/v2.x/projectpermission/300378604376u288874995968p1');
        expect(result).to.equal('300378604376u288874995968p1');
      });
      it('Should get the id from long ref', () => {
        const result = Client.getIdFromRef('https://rally1.rallydev.com/slm/webservice/v2.0/project/76894');
        expect(result).to.equal('76894');
      });
      it('Should return null from random string', () => {
        expect(Client.getIdFromRef('Who likes tacos I do'))
          .to.equal(null);
      });
    });

    describe('getTypeFromRef', function getRef() {
      it('Should get the type from shorted ref', () => {
        expect(Client.getTypeFromRef('/type/76894')).to.equal('type');
      });
      it('Should get the type from long ref', () => {
        expect(Client.getTypeFromRef('https://rally1.rallydev.com/slm/webservice/v2.0/project/76894'))
          .to.equal('project');
      });
      it('Should get the type from weird permission ref', () => {
        const result = Client.getTypeFromRef('https://rally1.rallydev.com/slm/webservice/v2.x/projectpermission/300378604376u288874995968p1');
        expect(result).to.equal('projectpermission');
      });
      it('Should return null from random string', () => {
        expect(Client.getTypeFromRef('Who likes tacos I do')).to.equal(null);
      });
    });

    describe('getTypeFromRef', function getRef() {
      it('Should get the type from shorted ref', () => {

      });
    });
  });

  describe('get', function getByRef() {
    const id = 206176979708;
    const type = 'defect';
    const shortRef = `/${type}/${id}`;
    const longRef = `https://rally1.rallydev.com/slm/webservice/v2.0${shortRef}`;
    it('Should get the defect from shorted ref', async () => {
      const defect = await client.get(shortRef);

      expect(defect.$delete).to.be.a('function');
      expect(defect.Description).to.equal('', 'should fetch more than regular field defaults');
      expect(defect.ObjectID).to.equal(id);
    });
    it('Should get the defect from long ref', async () => {
      const resp = await client.get(longRef);
      expect(resp.ObjectID).to.equal(id);
      expect(resp.Description).to.equal('', 'should fetch more than regular field defaults');
    });

    it('Should get the defect from type and id', async () => {
      const resp = await client.get(type, id);
      expect(resp.ObjectID).to.equal(id);
      expect(resp.Description).to.equal('', 'should fetch more than regular field defaults');
    });
  });

  describe('getCollection', function getCollection() {
    const id = 206176979708;
    const type = 'defect';
    const shortRef = `/${type}/${id}`;
    let defectObject, projectObject;
    before(async () => {
      defectObject = await client.get(shortRef);
      projectObject = await client.get(projectRef);
      
      const rawTags = defectObject.Tags._tagsNameArray;
      expect(rawTags.length).to.equal(2, 'Precheck failed expected two tags');
    });
    it('Should get a collection', async () => {
      const tags = await client.getCollection(defectObject, 'Tags', {});
      expect(tags.length).to.equal(2, 'Expected two tags returned from sub collection');
      expect(defectObject.Tags.length).to.equal(2, 'Expect the object to have it\'s subcollection filled');
      const [tag1, tag2] = tags;

      expect(tag1.Name).to.equal('Test Tag 1');
      expect(tag2.Name).to.equal('Test Tag 2');
    });

    it('Should get a project child collection', async () => {
      const options = {
        query: '(Name Contains "1")',
        order: 'State desc'
      };

      const children = await client.getCollection(projectObject, 'Children', options);
      expect(children.length).to.equal(2, 'Expected child projects returned from sub collection');
      expect(projectObject.Children.length).to.equal(2, 'Expect the object to have it\'s subcollection filled');
      const [openProject, closedProject] = children;

      expect(openProject.Name).to.equal('Child 1');
      expect(closedProject.Name).to.equal('Closed Project 1');
    });
  });
  // final cleanup
  after(async () => {
    const query = {
      query: '(c_CreatedByAutomatedTest = true)',
      project: projectRef,
      workspace: workspaceRef
    };
    let defectsResponse = await client.query('Defect', query);
    const deletePromises = defectsResponse.map(d => d.$delete());

    const resp = await Promise.all(deletePromises);
    return { resp };
  });
});
