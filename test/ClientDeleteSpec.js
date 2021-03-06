let chai = require('chai');
const { Client } = require('../built/index');

const apiKey = require('../apikey.conf');// just the api key

const project = 199606970176;
const workspace = 199606969760;
const projectRef = `/project/${project}`;
const workspaceRef = `/workspace/${workspace}`;
const client = new Client(
  apiKey,
  {
    project: projectRef,
    workspace: workspaceRef,
    maxWriteRetrys: 20
  }
);

function delay(t, v) {
  return new Promise(((resolve) => {
    setTimeout(resolve.bind(null, v), t);
  }));
}
const { expect } = chai;
describe('Rally Client', function requestFoo() {
  this.timeout(50000);

  describe('delete', function getRef() {
    describe('happy path', () => {
      this.retries(70);

      let defectToDeleted;

      beforeEach(async () => {
        const defect = {
          Project: projectRef,
          Name: 'test defect for delete',
          c_CreatedByAutomatedTest: true
        };

        defectToDeleted = await client.save('Defect', defect);
      });
      it('Should delete the defect by passing the object', async () => {
        this.retries(7);

        expect(defectToDeleted);
        await client.delete(defectToDeleted);
        try {
          await delay(1000);
          await client.get(defectToDeleted._ref);
          expect.fail(null, null, 'Error expected in delete call');
        } catch (err) {
          expect(err.message).to.equal('Rally Server Error: Cannot find object to read');
        }
      });

      it('Should delete the defect by using the method on the object', async () => {
        this.retries(7);

        expect(defectToDeleted);
        await defectToDeleted.$delete();

        try {
          await delay(1000);
          await client.get(defectToDeleted._ref);
          expect.fail(null, null, 'Error expected in delete call');
        } catch (err) {
          expect(err.message).to.equal('Rally Server Error: Cannot find object to read');
        }
      });
    });

    it('Should error when given a defect that doesn\'t exist', async () => {
      try {
        await client.delete('https://rally1.rallydev.com/slm/webservice/v2.x/defect/1234');
        expect.fail(null, null, 'Error expected');
      } catch (err) {
        expect(err.message).to.equal('Rally Server Error: Object to delete cannot be null');
      }
    });

    it('should de able to delete using $delete on query results', async function queryDelete() {
      this.retries(70);
      

      const bulkDefect = {
        Project: projectRef,
        Name: 'test defect for query delete',
        c_CreatedByAutomatedTest: true
      };
      let defectToDeleted2 = await client.save('Defect', bulkDefect);
      const query = {
        query: `(Name = "${bulkDefect.Name}")`,
        project: projectRef,
        workspace: workspaceRef
      };
      let defectsResponse = await client.query('Defect', query);

      const deletePromises = defectsResponse.map(d => d.$delete());
      const deleteResponse = await Promise.all(deletePromises);
      expect(deletePromises.length > 0, "Expecting to have a defect to delete").to.equal(true);
      try {
        const { FormattedID } = await client.get(defectToDeleted2._ref);
        expect.fail(null, null, `Error expected ${FormattedID}`);
      } catch (err) {
        expect(err.message).to.equal('Rally Server Error: Cannot find object to read');
      }
      return deleteResponse;
    });
  });
  // final cleanup
  after(async () => {
    try{

      const query = {
        query: '(c_CreatedByAutomatedTest = true)',
        project: projectRef,
        workspace: workspaceRef
      };
      let defectsResponse = await client.query('Defect', query);
      const deletePromises = defectsResponse.map(d => d.$delete());
  
      const resp = await Promise.all(deletePromises);
    }
    catch{

    }
    return {  };
  });
});
