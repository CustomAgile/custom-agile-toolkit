"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bottleneck_1 = require("bottleneck");
//push
// queue, if less than max execute immeadiatly
// execute 
// 
class Throttle {
    /**
     *
     * @param maxPromises The maxiumum number of promises allowed at a time
     */
    constructor(maxPromises = 10, maxRetries = 5) {
        this.maxPromises = maxPromises;
        this.bottleneck = new bottleneck_1.default({
            maxConcurrent: maxPromises
        });
        // this.bottleneck.on('failed', (...args) => {
        //   console.error("failed");
        //   throw new Error("Error")
        // })
    }
    /** Adds and action to the queue, attempts to execute the next action
     * Execution order is not guarenteed
     * @param maxRetries The maxiumum number of automatic retries
     * @param action The action that will be called when the queue is ready
     */
    async queueAction(action, maxRetries = 0) {
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
exports.Throttle = Throttle;
//# sourceMappingURL=Throttle.js.map