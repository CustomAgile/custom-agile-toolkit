
import _ = require('lodash');
import Bottleneck from "bottleneck";

//push
// queue, if less than max execute immeadiatly

// execute 
// 

export class Throttle {
  /** @private */
  maxPromises: number
  /** @private */
  bottleneck: Bottleneck
  /**
   * 
   * @param maxPromises The maxiumum number of promises allowed at a time
   */
  constructor(maxPromises: number = 10, maxRetries: number = 5) {
    this.maxPromises = maxPromises;
    this.bottleneck = new Bottleneck({
      maxConcurrent: maxPromises
    });
  }

  /** Adds and action to the queue, attempts to execute the next action 
   * Execution order is not guarenteed 
   * @param maxRetries The maxiumum number of automatic retries 
   * @param action The action that will be called when the queue is ready
   */
  async queueAction<R>(action: () => PromiseLike<R>, maxRetries: number = 0) {
    try {
      const resp = await this.bottleneck.wrap(action)();
      return resp;
    }
    catch (err) {
      if (maxRetries > 0) {
        return this.queueAction(action, --maxRetries);
      }
      throw err;
    }
  }


}

