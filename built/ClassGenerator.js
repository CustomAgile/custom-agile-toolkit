"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiKey = require("./apikey.conf");
const RallyClient = require("./RallyClient");
const fs = require("fs");
const client = new RallyClient(apiKey);
const doIt = async () => {
    const results = await client.query('typedefinition', { fetch: true, pagesize: 2000 });
    results.forEach((r) => {
        fs.writeFileSync(`declare/${r.ElementName}.d.json`, JSON.stringify(r, null, 2));
    });
};
const getClass = (/**  */ type) => {
};
doIt()
    .then(console.log)
    .catch(console.error);
//# sourceMappingURL=ClassGenerator.js.map