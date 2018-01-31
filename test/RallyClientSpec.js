let chai = require('chai');
const { RallyClient } = require('../index');
const apiKey = require('./apikey.conf');// just the api key
const loginApiKey = require('./lookback.apikey.conf');// just the api key

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
describe('Rally Client', function requestFoo() {
  this.timeout(5000);

  it('should default the server to rally1 if no server is given in the options', function testServer() {
    const client = new RallyClient(apiKey, { project: projectRef });
    expect(client.options.server).to.equal('https://rally1.rallydev.com');
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

  describe('query', function queryFoo() {
    it('should show defaulted query info', async () => {
      const request = new RallyClient(apiKey);
      const query = {
        Query: '(Name Contains "test")',
        project: projectRef,
        workspace: workspaceRef,
        pagesize: 1
      };
      const options = RallyClient.defaultOptions;
      options.Query = query.Query;
      options.project = projectRef;
      options.workspace = workspaceRef;
      options.pagesize = 1;
      let defectsResponse = await request.query('Defect', query);
      expect(defectsResponse.$params).to.deep.equal(options);
    });

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
      try {
        await request.query('Project', getOptions());
        fail('Error not caught');
      } catch (err) {
        expect(err);
        expect((err.message).includes(server)).to.equal(true);
      }
    });
  });

  describe('save', function save() {
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

      try {
        await request.save('IAMNOTAREALONE', defect);
        fail('exception expected for bad endpoint');
      } catch (err) {
        expect(err.message);
        expect((err.message).includes('Requested type name "iamnotarealone" is unknown')).to.equal(true);
      }
    });
  });
  describe('Ref Tests', () => {
    describe('getIdFromRef', function getRef() {
      it('Should get the id from shorted ref', () => {
        expect(RallyClient.getIdFromRef('/type/76894'))
          .to.equal(76894);
      });
      it('Should get the id from long ref', () => {
        const result = RallyClient.getIdFromRef('https://rally1.rallydev.com/slm/webservice/v2.0/project/76894');
        expect(result).to.equal(76894);
      });
      it('Should return null from random string', () => {
        expect(RallyClient.getIdFromRef('Who likes tacos I do'))
          .to.equal(null);
      });
    });

    describe('getTypeFromRef', function getRef() {
      it('Should get the type from shorted ref', () => {
        expect(RallyClient.getTypeFromRef('/type/76894')).to.equal('type');
      });
      it('Should get the type from long ref', () => {
        expect(RallyClient.getTypeFromRef('https://rally1.rallydev.com/slm/webservice/v2.0/project/76894'))
          .to.equal('project');
      });
      it('Should return null from random string', () => {
        expect(RallyClient.getTypeFromRef('Who likes tacos I do')).to.equal(null);
      });
    });
  });

  describe('lookback', function lookback() {
    const client = new RallyClient(loginApiKey, { project: projectRef });
    it('return data', async () => {
      const query = {
        find: { ObjectID: 50765439113 },
        fields: true,
        hydrate: [],
        start: 0,
        pagesize: 10,
        removeUnauthorizedSnapshots: true
      };
      const response = await client.queryLookback(query, 38034898590);
      expect(response.length > 0).to.equal(true);
      expect(response.$rawResponse.Warnings).to.deep.equal(['Max page size limited to 100 when fields=true']);
      expect(response.$rawResponse.PageSize).to.equal(10);
      expect(response.$rawResponse.HasMore).to.equal(true);
    });

    it('handle errors', async () => {
      const query = {
        find: { ObjectID: 50765439113 },
        fields: true,
        hydrate: [],
        start: 0,
        pagesize: 10,
        removeUnauthorizedSnapshots: true
      };
      try {
        await client.queryLookback(query, 1234);
        fail('Expected Error');
      } catch (err) {
        expect(err.message).to.deep.equal('Forbidden Code:403');
      }
    });

    describe('paging', async function paging() {
      const pagesize = 15;
      const query = {
        find: {
          ObjectID: 50765439113,
          _ValidFrom: {
            $gte: '2011-07-01TZ',
            $lt: '2018-01-31TZ'
          },
        },
        fields: true,
        hydrate: [],
        start: 0,
        sort: '_ValidFrom',
        pagesize,
        removeUnauthorizedSnapshots: true
      };
      const response = await client.queryLookback(query, 38034898590);
      const secondPageResponse = await response.$getNextPage();

      it('should include a promise to get the next page', async () => {
        expect(response.$getNextPage).to.be.a('function');
        expect(response.length).to.equal(pagesize);
        expect(response.$rawResponse.PageSize).to.equal(pagesize);
        expect(response.$rawResponse.HasMore).to.equal(true);
        expect(response.$rawResponse.TotalResultCount).to.equal(25);
        expect(response.$hasMore).to.equal(true);
        expect(response.length).to.equal(pagesize);

        expect(secondPageResponse.$rawResponse.StartIndex)
          .to.equal(response.$rawResponse.StartIndex + pagesize);
        expect(secondPageResponse.length)
          .to.equal(response.$rawResponse.TotalResultCount - pagesize);
      });
      it('should reject the promise if at final page', async () => {
        try {
          // no third page
          expect(secondPageResponse.$hasMore).to.equal(false);
          await secondPageResponse.$getNextPage();
          fail('expect an error when asking for next page when that doesn\'t exist');
        } catch (err) {
          expect(err.message).to.equal('No more pages in this request');
        }
      });

      it('should be able to get all pages', async () => {
        const allResponse = await response.$getAll();
        expect(allResponse.$rawResponse.StartIndex)
          .to.equal(response.$rawResponse.StartIndex);
        expect(allResponse.length).to.equal(response.$rawResponse.TotalResultCount);
        expect(allResponse.$hasMore).to.equal(false);
      });
    });
  });

  describe('get', function getRef() {
    const id = 172482267852;
    const type = 'defect';
    const shortRef = `/${type}/${id}`;
    const longRef = `https://rally1.rallydev.com/slm/webservice/v2.0${shortRef}`;
    const client = new RallyClient(apiKey, { project: projectRef });
    it('Should get the defect from shorted ref', async () => {
      const resp = await client.get(shortRef);
      expect(resp.ObjectID).to.equal(id);
      expect(resp.Description).to.equal('', 'should fetch more than regular field defaults');
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
});
