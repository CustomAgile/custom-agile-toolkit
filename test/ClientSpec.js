let chai = require('chai');
const { Client } = require('../built/index');

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
  const options = client.defaultOptions;
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
      const options = client.defaultOptions;
      options.query = query.query;
      options.project = projectRef;
      options.workspace = workspaceRef;
      options.pagesize = 1;
      let defectsResponse = await defaultClient.query('Defect', query);
      expect(defectsResponse.$params).to.deep.equal(options);
    });

    it('should get a page of story data', async () => {
      const query = client.defaultOptions;
      let projects = await client.query('Project', query);
      expect(projects.length).to.not.equal(0);
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
          .to.equal(76894);
      });
      it('Should get the id from long ref', () => {
        const result = Client.getIdFromRef('https://rally1.rallydev.com/slm/webservice/v2.0/project/76894');
        expect(result).to.equal(76894);
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
      it('Should return null from random string', () => {
        expect(Client.getTypeFromRef('Who likes tacos I do')).to.equal(null);
      });
    });

    describe('getTypeFromRef', function getRef() {
      it('Should get the type from shorted ref', () => {

      });
    });
  });

  describe('lookback', function lookback() {
    it('return data', async () => {
      // lookback is now taking a very long time to respond
      this.timeout(50000);

      const query = {
        find: { ObjectID: defectId },
        fields: true,
        hydrate: [],
        start: 0,
        pagesize: 10,
        removeUnauthorizedSnapshots: true
      };
      const response = await client.queryLookback(query);
      expect(response.length > 0).to.equal(true);
      expect(response.$rawResponse.Warnings).to.deep.equal(['Max page size limited to 100 when fields=true']);
      expect(response.$rawResponse.PageSize).to.equal(10);
      expect(response.$rawResponse.HasMore).to.equal(true);
    });

    it('handle errors', async () => {
      const query = {
        find: { ObjectID: defectId },
        fields: true,
        hydrate: [],
        start: 0,
        pagesize: 10,
        removeUnauthorizedSnapshots: true
      };
      try {
        await client.queryLookback(query, 1234);
        expect.fail('Expected Error');
      } catch (err) {
        expect(err.message).to.deep.equal('Forbidden Code:403');
      }
    });

    describe('paging', async function paging() {
      let response, secondPageResponse;
      const pagesize = 15;
      const query = {
        find: {
          ObjectID: defectId,
          _ValidFrom: {
            $gte: '2011-07-01TZ',
            $lt: '2018-03-19T15:26:34.663Z'
          },
        },
        fields: true,
        hydrate: [],
        start: 0,
        sort: '_ValidFrom',
        pagesize,
        removeUnauthorizedSnapshots: true
      };
      before(async () => {
        response = await client.queryLookback(query);
      });

      it('should include a promise to get the next page', async () => {
        expect(response.$getNextPage).to.be.a('function');
        expect(response.length).to.equal(pagesize);
        expect(response.$rawResponse.PageSize).to.equal(pagesize);
        expect(response.$rawResponse.HasMore).to.equal(true);
        expect(response.$rawResponse.TotalResultCount).to.equal(25);
        expect(response.$hasMore).to.equal(true);
        expect(response.length).to.equal(pagesize);

        secondPageResponse = await response.$getNextPage();

        expect(secondPageResponse.$rawResponse.StartIndex)
          .to.equal(response.$rawResponse.StartIndex + pagesize);
        expect(secondPageResponse.length)
          .to.equal(response.$rawResponse.TotalResultCount - pagesize);
      });
      it('should reject the promise if at final page', async () => {
        secondPageResponse = await response.$getNextPage();

        try {
          // no third page

          expect(secondPageResponse.$hasMore).to.equal(false);
          await secondPageResponse.$getNextPage();
          expect.fail('expect an error when asking for next page when that doesn\'t exist');
        } catch (err) {
          expect(err.message).to.equal('No more pages in this request');
        }
      });

      it('should be able to get all pages', async () => {
        const allResponse = await response.$getAll();
        expect(allResponse.$rawResponse.StartIndex)
          .to.equal(response.$rawResponse.StartIndex);
        expect(response.$hasMore).to.equal(true);
        expect(allResponse.$hasMore).to.equal(false);
        expect(allResponse.length).to.equal(response.$rawResponse.TotalResultCount);
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
    let defect;
    before(async () => {
      defect = await client.get(shortRef);
      const rawTags = defect.Tags._tagsNameArray;
      expect(rawTags.length).to.equal(2, 'Precheck failed expected two tags');
    });
    it('Should get a collection', async () => {
      const tags = await client.getCollection(defect, 'Tags', {});
      expect(tags.length).to.equal(2, 'Expected two tags returned from sub collection');
      expect(defect.Tags.length).to.equal(2, 'Expect the object to have it\'s subcollection filled');
      const [tag1, tag2] = tags;

      expect(tag1.Name).to.equal('Test Tag 1');
      expect(tag2.Name).to.equal('Test Tag 2');
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
