// const _ = r('lodash');

class Bulk {
    constructor(/** @type{RallyClient} */request) {
        this.request = request;
        this.requests = [];
    }

    /**
     * Used to prepare the bulk request into the format rally expects
     */
    prepare(...args) {
        return {};
    }

    addRequest() {
        
    }
}

module.exports = { Bulk };
