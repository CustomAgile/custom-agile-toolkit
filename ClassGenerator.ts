import apiKey = require('./apikey.conf');
import fs = require('fs');
import _ = require('lodash');
import * as Types from './Classes';
import { RallyClient, RallyObject } from './index';

const client = new RallyClient(apiKey);

const doIt = async () => {
    let typedefs = (await client.query('typedefinition', { fetch: true, pagesize: 2000 }))
        .map(r => r);

    let mappedtypes = {};
    const mapType = (type: RallyObject) => {
        mappedtypes[type.ObjectID] = type;
    };
    typedefs.forEach(mapType);
    const indexParent = async (type) => {
        const parent = await client.get(type.Parent._ref);
        type.Parent = parent;
        mapType(parent);
        if (parent.Parent) {
            return indexParent(parent);
        }
    };
    const parentPromises = typedefs
        .filter(t => t.Parent)
        .map(indexParent);
    const results = await Promise.all(parentPromises);
    typedefs = _.keys(mappedtypes).sort()
        .map(k => mappedtypes[k]);
    const attributeRequests = typedefs.map(r => client.getCollection(r, 'Attributes', { pagesize: 2000, fetch: true, order: 'Name' }));
    const finished = await Promise.all(attributeRequests);

    // typedefs.forEach(t => {
    //     t.Attributes = t.Attributes.filter(a => a.TypeDefinition._ref === t._ref)
    // });

    fs.writeFileSync(
        'Classes.ts',
        getModule(typedefs)
    );
};

const getModule = (types: any[]) => `
import * as RallyApi from './Api';

${types.map(getClass).join(' ')}
`;

const getClass = (type: Types.TypeDefinition) => {
    const parent = type.Parent ? type.Parent.ElementName : 'RallyApi.RallyObject';

    const template = `
/**
 * ${type.Name}
 * ${type.Note}
 * 
 */
export interface ${type.ElementName} extends ${parent} {
    ${type.Attributes.map(a => ` ${getAttribute(a)}`).join(' ')}
} `;

    return template;
};

const getAttribute = (attr: Types.AttributeDefinition) => {
    const map = {
        integer: 'number',
        date: 'Date',
        raw: 'string',
        decimal: 'number',
        object: 'object',
        string: 'string',
        collection: 'any[]',
        text: 'string',
        boolean: 'boolean',
        state: 'string',
        rating: 'string',
        quantity: 'number',
        map: 'string',
        binary_data: 'string'
    };
    const mapAttributeType = (s: string) => {
        s = s.toLowerCase();
        let type = map[s];
        if (type === 'object') {
            type = attr.AllowedValueType._refObjectName.replace(/\s/g, '');
            if (type === 'PanelDefinition') {
                type = '{[x:string]:any} //not in meta data on rally side';
            }
        }
        if (s === 'collection') {
            type = `${attr.AllowedValueType._refObjectName.replace(/\s/g, '')}[]`;
        }
        if (!type) throw new Error(`Missing type ${s}on attribute ${attr.ElementName}`);
        return type;
    };
    return `
    /**
     * ${attr.Name}
     * ${attr.Note}
     */
    ${attr.ElementName}? : ${mapAttributeType(attr.AttributeType)}
`;
};

doIt()
    .then(console.log)
    .catch(console.error);
