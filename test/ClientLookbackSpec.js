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
xdescribe('Rally Client Lookback', function requestFoo() {
  this.timeout(5000);

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
});
