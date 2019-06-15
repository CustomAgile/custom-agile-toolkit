[custom-agile-toolkit](../README.md) > ["src/ClassClients"](../modules/_src_classclients_.md) > [ClassClients](../modules/_src_classclients_.classclients.md) > [TestCaseStep](../classes/_src_classclients_.classclients.testcasestep.md)

# Class: TestCaseStep

## Hierarchy

 [ClassClientBase](_src_classclients_.classclients.classclientbase.md)<`TestCaseStep`>

**↳ TestCaseStep**

## Index

### Constructors

* [constructor](_src_classclients_.classclients.testcasestep.md#constructor)

### Properties

* [client](_src_classclients_.classclients.testcasestep.md#client)
* [typeName](_src_classclients_.classclients.testcasestep.md#typename)

### Methods

* [delete](_src_classclients_.classclients.testcasestep.md#delete)
* [get](_src_classclients_.classclients.testcasestep.md#get)
* [getCollection](_src_classclients_.classclients.testcasestep.md#getcollection)
* [query](_src_classclients_.classclients.testcasestep.md#query)
* [save](_src_classclients_.classclients.testcasestep.md#save)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TestCaseStep**(apiKey: *`string`*, options: *[ClientOptions](../interfaces/_src_api_.api.clientoptions.md)*): [TestCaseStep](_src_classclients_.classclients.testcasestep.md)

⊕ **new TestCaseStep**(client: *[Client](_src_client_.client.md)*): [TestCaseStep](_src_classclients_.classclients.testcasestep.md)

*Overrides [ClassClientBase](_src_classclients_.classclients.classclientbase.md).[constructor](_src_classclients_.classclients.classclientbase.md#constructor)*

*Defined in [src/ClassClients.ts:656](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/ClassClients.ts#L656)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| apiKey | `string` |
| options | [ClientOptions](../interfaces/_src_api_.api.clientoptions.md) |

**Returns:** [TestCaseStep](_src_classclients_.classclients.testcasestep.md)

*Overrides [ClassClientBase](_src_classclients_.classclients.classclientbase.md).[constructor](_src_classclients_.classclients.classclientbase.md#constructor)*

*Defined in [src/ClassClients.ts:657](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/ClassClients.ts#L657)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| client | [Client](_src_client_.client.md) |

**Returns:** [TestCaseStep](_src_classclients_.classclients.testcasestep.md)

___

## Properties

<a id="client"></a>

### `<Private>` client

**● client**: *[Client](_src_client_.client.md)*

*Inherited from [ClassClientBase](_src_classclients_.classclients.classclientbase.md).[client](_src_classclients_.classclients.classclientbase.md#client)*

*Defined in [src/ClassClients.ts:23](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/ClassClients.ts#L23)*

___
<a id="typename"></a>

### `<Private>` typeName

**● typeName**: *`string`*

*Inherited from [ClassClientBase](_src_classclients_.classclients.classclientbase.md).[typeName](_src_classclients_.classclients.classclientbase.md#typename)*

*Defined in [src/ClassClients.ts:27](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/ClassClients.ts#L27)*

___

## Methods

<a id="delete"></a>

###  delete

▸ **delete**(inputOrRef: *`string` \| [RallyObject](../interfaces/_src_api_.api.rallyobject.md)*, params?: *`object`*, ignoreDelay?: *`boolean`*): `Promise`<`any`>

*Inherited from [ClassClientBase](_src_classclients_.classclients.classclientbase.md).[delete](_src_classclients_.classclients.classclientbase.md#delete)*

*Defined in [src/ClassClients.ts:73](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/ClassClients.ts#L73)*

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| inputOrRef | `string` \| [RallyObject](../interfaces/_src_api_.api.rallyobject.md) | - |  Either a Rally object or the ref for a Rally object |
| `Default value` params | `object` |  {} |  Optional Params to be sent with the request |
| `Default value` ignoreDelay | `boolean` | false |  Pass true if you don't want to wait 500 ms longer to return. This time gives the Rally server a chance to finish deleting |

**Returns:** `Promise`<`any`>

___
<a id="get"></a>

###  get

▸ **get**(typeOrRef: *`string`*, objectID?: *`number`*, params?: *[QueryOptions](../interfaces/_src_api_.api.queryoptions.md)*): `Promise`<`TestCaseStep`>

*Inherited from [ClassClientBase](_src_classclients_.classclients.classclientbase.md).[get](_src_classclients_.classclients.classclientbase.md#get)*

*Defined in [src/ClassClients.ts:54](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/ClassClients.ts#L54)*

Returns a Rally object by ref or by type and ID

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| typeOrRef | `string` | - |
| `Default value` objectID | `number` | 0 |
| `Default value` params | [QueryOptions](../interfaces/_src_api_.api.queryoptions.md) |  {} |

**Returns:** `Promise`<`TestCaseStep`>

___
<a id="getcollection"></a>

###  getCollection

▸ **getCollection**(rallyObject: *`TestCaseStep`*, collectionName: *`string`*, params?: *[QueryOptions](../interfaces/_src_api_.api.queryoptions.md)*): `Promise`<[QueryResponse](../interfaces/_src_api_.api.queryresponse.md)<[RallyObject](../interfaces/_src_api_.api.rallyobject.md)>>

*Inherited from [ClassClientBase](_src_classclients_.classclients.classclientbase.md).[getCollection](_src_classclients_.classclients.classclientbase.md#getcollection)*

*Defined in [src/ClassClients.ts:62](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/ClassClients.ts#L62)*

Gets a subcollection stored on the Rally object

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| rallyObject | `TestCaseStep` | - |
| collectionName | `string` | - |
| `Default value` params | [QueryOptions](../interfaces/_src_api_.api.queryoptions.md) |  {} |

**Returns:** `Promise`<[QueryResponse](../interfaces/_src_api_.api.queryresponse.md)<[RallyObject](../interfaces/_src_api_.api.rallyobject.md)>>

___
<a id="query"></a>

###  query

▸ **query**(type: *`any`*, query?: *[QueryOptions](../interfaces/_src_api_.api.queryoptions.md)*, params?: *`object`*): `Promise`<[QueryResponse](../interfaces/_src_api_.api.queryresponse.md)<`TestCaseStep`>>

*Inherited from [ClassClientBase](_src_classclients_.classclients.classclientbase.md).[query](_src_classclients_.classclients.classclientbase.md#query)*

*Defined in [src/ClassClients.ts:31](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/ClassClients.ts#L31)*

returns an array modified to have additional meta data on it containing the results

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| type | `any` | - |
| `Default value` query | [QueryOptions](../interfaces/_src_api_.api.queryoptions.md) |  {} |
| `Default value` params | `object` |  {} |

**Returns:** `Promise`<[QueryResponse](../interfaces/_src_api_.api.queryresponse.md)<`TestCaseStep`>>

___
<a id="save"></a>

###  save

▸ **save**(rallyObject: *`Partial`<`TestCaseStep`>*): `Promise`<`TestCaseStep`>

*Inherited from [ClassClientBase](_src_classclients_.classclients.classclientbase.md).[save](_src_classclients_.classclients.classclientbase.md#save)*

*Defined in [src/ClassClients.ts:42](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/ClassClients.ts#L42)*

Saves the current state of the Rally object to Rally. Creating a new object on the server if no \_ref is provided in rallyObject

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| rallyObject | `Partial`<`TestCaseStep`> |  A new or existing Rally object |

**Returns:** `Promise`<`TestCaseStep`>

___

