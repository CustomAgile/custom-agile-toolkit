import Bottleneck from "bottleneck";
export declare class Throttle {
    /** @private */
    maxPromises: number;
    /** @private */
    bottleneck: Bottleneck;
    /**
     *
     * @param maxPromises The maxiumum number of promises allowed at a time
     */
    constructor(maxPromises?: number, maxRetries?: number);
    /** Adds and action to the queue, attempts to execute the next action
     * Execution order is not guarenteed
     * @param maxRetries The maxiumum number of automatic retries
     * @param action The action that will be called when the queue is ready
     */
    queueAction<R>(action: () => PromiseLike<R>, maxRetries?: number): any;
}
