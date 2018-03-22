import apiKey = require('./apikey.conf');
import  RallyClient  = require('./RallyClient');
import fs = require('fs');
import TypeDef from './declare/RallyTypes'
const client = new RallyClient(apiKey);
 
const doIt = async () => {
    const [result] = await client.query('typedefinition', { fetch: true, pagesize: 2000 });

    [result].forEach((r:TypeDef) => {
        fs.writeFileSync(`declare/${r.ElementName}.d.json`, JSON.stringify(r, null, 2));
    });
}; 

const getClass = (/**  */ type) => {
    
};

doIt()
    .then(console.log)
    .catch(console.error);
