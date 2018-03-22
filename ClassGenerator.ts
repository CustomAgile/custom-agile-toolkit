import apiKey = require('./apikey.conf');
import RallyClient = require('./RallyClient');
import fs = require('fs');
import TypeDef = require('./declare/RallyTypes')
const client = new RallyClient(apiKey);

const doIt = async () => {
    const [result] = (await client.query('typedefinition', { fetch: true, pagesize: 2000 }))
        .filter((r: TypeDef) => r.Queryable);
    [result].filter((r: TypeDef) => r.Queryable)
        .forEach((r: TypeDef) => {
            fs.writeFileSync(`declare/${r.ElementName}.d.json`, JSON.stringify(r, null, 2));
        });
};

const getModule = (types:TypeDef[]) => {

};

const getClass = (type: TypeDef) => {
    const template =
`
interface ${type.ElementName} extends RallyApi.RallyObject {
}
`;
};

doIt()
    .then(console.log)
    .catch(console.error);
