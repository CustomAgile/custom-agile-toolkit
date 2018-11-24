[custom-agile-toolkit](../README.md) > ["ClassClients"](../modules/_classclients_.md) > [ClassClients](../modules/_classclients_.classclients.md) > [Milestone](../classes/_classclients_.classclients.milestone.md)

# Class: Milestone

## Hierarchy

 [ClassClientBase](_classclients_.classclients.classclientbase.md)<`Milestone`>

**↳ Milestone**

## Index

### Constructors

* [constructor](_classclients_.classclients.milestone.md#constructor)

### Properties

* [client](_classclients_.classclients.milestone.md#client)
* [typeName](_classclients_.classclients.milestone.md#typename)

### Methods

* [delete](_classclients_.classclients.milestone.md#delete)
* [get](_classclients_.classclients.milestone.md#get)
* [getCollection](_classclients_.classclients.milestone.md#getcollection)
* [query](_classclients_.classclients.milestone.md#query)
* [save](_classclients_.classclients.milestone.md#save)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Milestone**(apiKey: *`string`*, options: *[ClientOptions](../interfaces/_api_.api.clientoptions.md)*): [Milestone](_classclients_.classclients.milestone.md)

⊕ **new Milestone**(client: *[Client](_client_.client.md)*): [Milestone](_classclients_.classclients.milestone.md)

*Overrides [ClassClientBase](_classclients_.classclients.classclientbase.md).[constructor](_classclients_.classclients.classclientbase.md#constructor)*

*Defined in [ClassClients.ts:350](https://github.com/ferentchak/rally-node-sdk/blob/8064b9a/ClassClients.ts#L350)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| apiKey | `string` |
| options | [ClientOptions](../interfaces/_api_.api.clientoptions.md) |

**Returns:** [Milestone](_classclients_.classclients.milestone.md)

*Overrides [ClassClientBase](_classclients_.classclients.classclientbase.md).[constructor](_classclients_.classclients.classclientbase.md#constructor)*

*Defined in [ClassClients.ts:351](https://github.com/ferentchak/rally-node-sdk/blob/8064b9a/ClassClients.ts#L351)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| client | [Client](_client_.client.md) |

**Returns:** [Milestone](_classclients_.classclients.milestone.md)

___

## Properties

<a id="client"></a>

### `<Private>` client

**● client**: *[Client](_client_.client.md)*

*Inherited from [ClassClientBase](_classclients_.classclients.classclientbase.md).[client](_classclients_.classclients.classclientbase.md#client)*

*Defined in [ClassClients.ts:23](https://github.com/ferentchak/rally-node-sdk/blob/8064b9a/ClassClients.ts#L23)*

___
<a id="typename"></a>

### `<Private>` typeName

**● typeName**: *`string`*

*Inherited from [ClassClientBase](_classclients_.classclients.classclientbase.md).[typeName](_classclients_.classclients.classclientbase.md#typename)*

*Defined in [ClassClients.ts:27](https://github.com/ferentchak/rally-node-sdk/blob/8064b9a/ClassClients.ts#L27)*

___

## Methods

<a id="delete"></a>

###  delete

▸ **delete**(inputOrRef: * `string` &#124; [RallyObject](../interfaces/_api_.api.rallyobject.md)*, params?: *`object`*, ignoreDelay?: *`boolean`*): `Promise`<`any`>

*Inherited from [ClassClientBase](_classclients_.classclients.classclientbase.md).[delete](_classclients_.classclients.classclientbase.md#delete)*

*Defined in [ClassClients.ts:73](https://github.com/ferentchak/rally-node-sdk/blob/8064b9a/ClassClients.ts#L73)*

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| inputOrRef |  `string` &#124; [RallyObject](../interfaces/_api_.api.rallyobject.md)| - |  Either a Rally object or the ref for a Rally object |
| `Default value` params | `object` |  {} |  Optional Params to be sent with the request |
| `Default value` ignoreDelay | `boolean` | false |  Pass true if you don't want to wait 500 ms longer to return. This time gives the Rally server a chance to finish deleting |

**Returns:** `Promise`<`any`>

___
<a id="get"></a>

###  get

▸ **get**(typeOrRef: *`string`*, objectID?: *`number`*, params?: *[QueryOptions](../interfaces/_api_.api.queryoptions.md)*): `Promise`<`Milestone`>

*Inherited from [ClassClientBase](_classclients_.classclients.classclientbase.md).[get](_classclients_.classclients.classclientbase.md#get)*

*Defined in [ClassClients.ts:54](https://github.com/ferentchak/rally-node-sdk/blob/8064b9a/ClassClients.ts#L54)*

Returns a Rally object by ref or by type and ID

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| typeOrRef | `string` | - |
| `Default value` objectID | `number` | 0 |
| `Default value` params | [QueryOptions](../interfaces/_api_.api.queryoptions.md) |  {} |

**Returns:** `Promise`<`Milestone`>

___
<a id="getcollection"></a>

###  getCollection

▸ **getCollection**(rallyObject: *`Milestone`*, collectionName: *`string`*, params?: *[QueryOptions](../interfaces/_api_.api.queryoptions.md)*): `Promise`<[QueryResponse](../interfaces/_api_.api.queryresponse.md)<[RallyObject](../interfaces/_api_.api.rallyobject.md)>>

*Inherited from [ClassClientBase](_classclients_.classclients.classclientbase.md).[getCollection](_classclients_.classclients.classclientbase.md#getcollection)*

*Defined in [ClassClients.ts:62](https://github.com/ferentchak/rally-node-sdk/blob/8064b9a/ClassClients.ts#L62)*

Gets a subcollection stored on the Rally object

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| rallyObject | `Milestone` | - |
| collectionName | `string` | - |
| `Default value` params | [QueryOptions](../interfaces/_api_.api.queryoptions.md) |  {} |

**Returns:** `Promise`<[QueryResponse](../interfaces/_api_.api.queryresponse.md)<[RallyObject](../interfaces/_api_.api.rallyobject.md)>>

___
<a id="query"></a>

###  query

▸ **query**(type: *`any`*, query?: *[QueryOptions](../interfaces/_api_.api.queryoptions.md)*, params?: *`object`*): `Promise`<[QueryResponse](../interfaces/_api_.api.queryresponse.md)<`Milestone`>>

*Inherited from [ClassClientBase](_classclients_.classclients.classclientbase.md).[query](_classclients_.classclients.classclientbase.md#query)*

*Defined in [ClassClients.ts:31](https://github.com/ferentchak/rally-node-sdk/blob/8064b9a/ClassClients.ts#L31)*

returns an array modified to have additional meta data on it containing the results

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| type | `any` | - |
| `Default value` query | [QueryOptions](../interfaces/_api_.api.queryoptions.md) |  {} |
| `Default value` params | `object` |  {} |

**Returns:** `Promise`<[QueryResponse](../interfaces/_api_.api.queryresponse.md)<`Milestone`>>

___
<a id="save"></a>

###  save

▸ **save**(rallyObject: *`Partial`<`Milestone`>*): `Promise`<`Milestone`>

*Inherited from [ClassClientBase](_classclients_.classclients.classclientbase.md).[save](_classclients_.classclients.classclientbase.md#save)*

*Defined in [ClassClients.ts:42](https://github.com/ferentchak/rally-node-sdk/blob/8064b9a/ClassClients.ts#L42)*

Saves the current state of the Rally object to Rally. Creating a new object on the server if no \_ref is provided in rallyObject

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| rallyObject | `Partial`<`Milestone`> |  A new or existing Rally object |

**Returns:** `Promise`<`Milestone`>

___

