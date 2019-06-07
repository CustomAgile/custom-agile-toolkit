let chai = require('chai');
let _ = require('lodash');

const Toolkit = require('../built/index');

const { Throttle, Client } = Toolkit;

const { expect } = chai;
describe('Throttle', function requestFoo() {
  this.timeout(50000);

  describe('MaxConcurrent', function getCollection() {
    let throttle;
    before(async () => {
    });

    it('make sure with Throttle 1 they are called in order', async () => {
      let current = 0;
      let completed = 0;
      throttle = new Throttle(1);
      function createAction() {
        current++;
        let c = current;
        let action = async () => {
          completed++;
          return c - completed;
        };
        return throttle.queueAction(action);
      }
      let actions = [];
      _.times(30, () => actions.push(createAction()));
      expect(actions.length, 'enough actions created').equal(30);

      const resp = await Promise.all(actions);
      expect(resp.length, 'enough responses created').equal(30);

      expect(completed, 'Completed Count Check').equal(current);
      resp.forEach((p) => {
        expect(p).equal(0);
      });
    });

    it('make sure with Throttle 3 allows only three at a time', async () => {
      let current = 0;
      let completed = 0;
      let maxAttained = 0;
      const maxPromises = 3;
      throttle = new Throttle(maxPromises);
      function createAction() {
        current++;
        let c = current;
        let action = async () => {
          maxAttained++;
          expect(maxAttained, 'enough actions created').lte(maxPromises);

          await Client.delay(50 + (2 * current));
          maxAttained--;

          completed++;
          return c - completed;
        };
        return throttle.queueAction(action);
      }
      let totalActions = 8;
      let actions = [];
      _.times(totalActions, () => actions.push(createAction()));
      expect(actions.length, 'enough actions created').equal(totalActions);

      const resp = await Promise.all(actions);
      expect(resp.length, 'enough responses created').equal(totalActions);

      expect(completed, 'Completed Count Check').equal(current);
      resp.forEach((p) => {
        expect(p).equal(0);
      });
    });
  });

  describe('Error Retry', async () => {
    it('make sure error retries work', async () => {
      let current = 0;
      let completed = 0;
      const failTimes = 1;
      throttle = new Throttle(3);
      function createAction() {
        let errors = failTimes;
        current++;
        let c = current;
        let action = async () => {
          if (errors > 0) {
            errors--;
            throw new Error('I am broken');
          }
          completed++;
          return c - completed;
        };
        return throttle.queueAction(action, 3);
      }
      let actions = [];
      _.times(30, () => actions.push(createAction()));
      expect(actions.length, 'enough actions created').equal(30);

      const resp = await Promise.all(actions);
      expect(resp.length, 'enough responses created').equal(30);

      expect(completed, 'Completed Count Check').equal(current);
      resp.forEach((p) => {
        expect(p).equal(0);
      });
    });

    it('make sure if more exceptions occur than retries it throws its error', async () => {
      throttle = new Throttle(2);
      let errorCount = 0;
      function createAction() {
        let action = async () => {
          errorCount++;
          throw new Error('I am broken');
        };
        return throttle.queueAction(action, 2);
      }
      let actions = [];
      const actionCount = 2;
      _.times(actionCount, () => actions.push(createAction()));
      expect(actions.length, 'enough actions created').equal(actionCount);

      try {
        await Promise.all(actions);
        expect(true, 'Error expected').equal(false);
      } catch (err) {
        expect(errorCount, 'Expected Errors to equal').equal(5);
        expect(err.message, 'Expected Error Message').equal('I am broken');
      }
    });
  });
});
