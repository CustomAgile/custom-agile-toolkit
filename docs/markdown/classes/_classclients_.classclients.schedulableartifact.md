[custom-agile-toolkit](../README.md) > ["ClassClients"](../modules/_classclients_.md) > [ClassClients](../modules/_classclients_.classclients.md) > [SchedulableArtifact](../classes/_classclients_.classclients.schedulableartifact.md)

# Class: SchedulableArtifact

## Hierarchy

 [ClassClientBase](_classclients_.classclients.classclientbase.md)<`SchedulableArtifact`>

**↳ SchedulableArtifact**

## Index

### Constructors

* [constructor](_classclients_.classclients.schedulableartifact.md#constructor)

### Properties

* [client](_classclients_.classclients.schedulableartifact.md#client)
* [typeName](_classclients_.classclients.schedulableartifact.md#typename)

### Methods

* [delete](_classclients_.classclients.schedulableartifact.md#delete)
* [get](_classclients_.classclients.schedulableartifact.md#get)
* [getCollection](_classclients_.classclients.schedulableartifact.md#getcollection)
* [query](_classclients_.classclients.schedulableartifact.md#query)
* [save](_classclients_.classclients.schedulableartifact.md#save)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SchedulableArtifact**(apiKey: *`string`*, options: *[ClientOptions](../interfaces/_api_.api.clientoptions.md)*): [SchedulableArtifact](_classclients_.classclients.schedulableartifact.md)

⊕ **new SchedulableArtifact**(client: *[Client](_client_.client.md)*): [SchedulableArtifact](_classclients_.classclients.schedulableartifact.md)

*Overrides [ClassClientBase](_classclients_.classclients.classclientbase.md).[constructor](_classclients_.classclients.classclientbase.md#constructor)*

*Defined in [ClassClients.ts:548](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/ClassClients.ts#L548)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| apiKey | `string` |
| options | [ClientOptions](../interfaces/_api_.api.clientoptions.md) |

**Returns:** [SchedulableArtifact](_classclients_.classclients.schedulableartifact.md)

*Overrides [ClassClientBase](_classclients_.classclients.classclientbase.md).[constructor](_classclients_.classclients.classclientbase.md#constructor)*

*Defined in [ClassClients.ts:549](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/ClassClients.ts#L549)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| client | [Client](_client_.client.md) |

**Returns:** [SchedulableArtifact](_classclients_.classclients.schedulableartifact.md)

___

## Properties

<a id="client"></a>

### `<Private>` client

**● client**: *[Client](_client_.client.md)*

*Inherited from [ClassClientBase](_classclients_.classclients.classclientbase.md).[client](_classclients_.classclients.classclientbase.md#client)*

*Defined in [ClassClients.ts:23](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/ClassClients.ts#L23)*

___
<a id="typename"></a>

### `<Private>` typeName

**● typeName**: *`string`*

*Inherited from [ClassClientBase](_classclients_.classclients.classclientbase.md).[typeName](_classclients_.classclients.classclientbase.md#typename)*

*Defined in [ClassClients.ts:27](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/ClassClients.ts#L27)*

___

## Methods

<a id="delete"></a>

###  delete

▸ **delete**(inputOrRef: *`string` \| [RallyObject](../interfaces/_api_.api.rallyobject.md)*, params?: *`object`*, ignoreDelay?: *`boolean`*): `Promise`<`any`>

*Inherited from [ClassClientBase](_classclients_.classclients.classclientbase.md).[delete](_classclients_.classclients.classclientbase.md#delete)*

*Defined in [ClassClients.ts:73](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/ClassClients.ts#L73)*

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| inputOrRef | `string` \| [RallyObject](../interfaces/_api_.api.rallyobject.md) | - |  Either a Rally object or the ref for a Rally object |
| `Default value` params | `object` |  {} |  Optional Params to be sent with the request |
| `Default value` ignoreDelay | `boolean` | false |  Pass true if you don't want to wait 500 ms longer to return. This time gives the Rally server a chance to finish deleting |

**Returns:** `Promise`<`any`>

___
<a id="get"></a>

###  get

▸ **get**(typeOrRef: *`string`*, objectID?: *`number`*, params?: *[QueryOptions](../interfaces/_api_.api.queryoptions.md)*): `Promise`<`SchedulableArtifact`>

*Inherited from [ClassClientBase](_classclients_.classclients.classclientbase.md).[get](_classclients_.classclients.classclientbase.md#get)*

*Defined in [ClassClients.ts:54](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/ClassClients.ts#L54)*

Returns a Rally object by ref or by type and ID

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| typeOrRef | `string` | - |
| `Default value` objectID | `number` | 0 |
| `Default value` params | [QueryOptions](../interfaces/_api_.api.queryoptions.md) |  {} |

**Returns:** `Promise`<`SchedulableArtifact`>

___
<a id="getcollection"></a>

###  getCollection

▸ **getCollection**(rallyObject: *`SchedulableArtifact`*, collectionName: *`string`*, params?: *[QueryOptions](../interfaces/_api_.api.queryoptions.md)*): `Promise`<[QueryResponse](../interfaces/_api_.api.queryresponse.md)<[RallyObject](../interfaces/_api_.api.rallyobject.md)>>

*Inherited from [ClassClientBase](_classclients_.classclients.classclientbase.md).[getCollection](_classclients_.classclients.classclientbase.md#getcollection)*

*Defined in [ClassClients.ts:62](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/ClassClients.ts#L62)*

Gets a subcollection stored on the Rally object

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| rallyObject | `SchedulableArtifact` | - |
| collectionName | `string` | - |
| `Default value` params | [QueryOptions](../interfaces/_api_.api.queryoptions.md) |  {} |

**Returns:** `Promise`<[QueryResponse](../interfaces/_api_.api.queryresponse.md)<[RallyObject](../interfaces/_api_.api.rallyobject.md)>>

___
<a id="query"></a>

###  query

▸ **query**(type: *`any`*, query?: *[QueryOptions](../interfaces/_api_.api.queryoptions.md)*, params?: *`object`*): `Promise`<[QueryResponse](../interfaces/_api_.api.queryresponse.md)<`SchedulableArtifact`>>

*Inherited from [ClassClientBase](_classclients_.classclients.classclientbase.md).[query](_classclients_.classclients.classclientbase.md#query)*

*Defined in [ClassClients.ts:31](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/ClassClients.ts#L31)*

returns an array modified to have additional meta data on it containing the results

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| type | `any` | - |
| `Default value` query | [QueryOptions](../interfaces/_api_.api.queryoptions.md) |  {} |
| `Default value` params | `object` |  {} |

**Returns:** `Promise`<[QueryResponse](../interfaces/_api_.api.queryresponse.md)<`SchedulableArtifact`>>

___
<a id="save"></a>

###  save

▸ **save**(rallyObject: *`Partial`<`SchedulableArtifact`>*): `Promise`<`SchedulableArtifact`>

*Inherited from [ClassClientBase](_classclients_.classclients.classclientbase.md).[save](_classclients_.classclients.classclientbase.md#save)*

*Defined in [ClassClients.ts:42](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/ClassClients.ts#L42)*

Saves the current state of the Rally object to Rally. Creating a new object on the server if no \_ref is provided in rallyObject

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| rallyObject | `Partial`<`SchedulableArtifact`> |  A new or existing Rally object |

**Returns:** `Promise`<`SchedulableArtifact`>

___

