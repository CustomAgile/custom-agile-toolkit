[custom-agile-toolkit](../README.md) > ["Client"](../modules/_client_.md) > [Client](../classes/_client_.client.md)

# Class: Client

## Hierarchy

**Client**

## Index

### Constructors

* [constructor](_client_.client.md#constructor)

### Properties

* [apiKey](_client_.client.md#apikey)
* [options](_client_.client.md#options)
* [project](_client_.client.md#project)
* [workspace](_client_.client.md#workspace)

### Accessors

* [defaultOptions](_client_.client.md#defaultoptions)
* [defaultLookbackRequest](_client_.client.md#defaultlookbackrequest)
* [defaultRallyServer](_client_.client.md#defaultrallyserver)

### Methods

* [_decorateObject](_client_.client.md#_decorateobject)
* [_request](_client_.client.md#_request)
* [delete](_client_.client.md#delete)
* [get](_client_.client.md#get)
* [getCollection](_client_.client.md#getcollection)
* [query](_client_.client.md#query)
* [queryLookback](_client_.client.md#querylookback)
* [save](_client_.client.md#save)
* [_prepareUrl](_client_.client.md#_prepareurl)
* [delay](_client_.client.md#delay)
* [getIdFromRef](_client_.client.md#getidfromref)
* [getRef](_client_.client.md#getref)
* [getTypeFromRef](_client_.client.md#gettypefromref)
* [manageResponse](_client_.client.md#manageresponse)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Client**(apiKey: *`string`*, options?: *[ClientOptions](../interfaces/_api_.api.clientoptions.md)*): [Client](_client_.client.md)

*Defined in [Client.ts:16](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L16)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| apiKey | `string` | - |
| `Default value` options | [ClientOptions](../interfaces/_api_.api.clientoptions.md) |  {server: Client.defaultRallyServer,project: undefined,workspace: undefined} |

**Returns:** [Client](_client_.client.md)

___

## Properties

<a id="apikey"></a>

### `<Private>` apiKey

**● apiKey**: *`string`*

*Defined in [Client.ts:39](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L39)*

___
<a id="options"></a>

### `<Private>` options

**● options**: *[ClientOptions](../interfaces/_api_.api.clientoptions.md)*

*Defined in [Client.ts:45](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L45)*

___
<a id="project"></a>

###  project

**● project**: *`string`*

*Defined in [Client.ts:41](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L41)*

___
<a id="workspace"></a>

###  workspace

**● workspace**: *`string`*

*Defined in [Client.ts:40](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L40)*

___

## Accessors

<a id="defaultoptions"></a>

###  defaultOptions

getdefaultOptions(): [QueryOptions](../interfaces/_api_.api.queryoptions.md)

*Defined in [Client.ts:370](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L370)*

**Returns:** [QueryOptions](../interfaces/_api_.api.queryoptions.md)

___
<a id="defaultlookbackrequest"></a>

### `<Static>` defaultLookbackRequest

getdefaultLookbackRequest(): [QueryOptions](../interfaces/_api_.api.queryoptions.md)

*Defined in [Client.ts:385](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L385)*

**Returns:** [QueryOptions](../interfaces/_api_.api.queryoptions.md)

___
<a id="defaultrallyserver"></a>

### `<Static>` defaultRallyServer

getdefaultRallyServer(): `string`

*Defined in [Client.ts:50](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L50)*

The default Rally server Rally to be used

**Returns:** `string`

___

## Methods

<a id="_decorateobject"></a>

###  _decorateObject

▸ **_decorateObject**(rallyObject: *[RallyObject](../interfaces/_api_.api.rallyobject.md)*): `Promise`<`void`>

*Defined in [Client.ts:316](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L316)*

Adds the delete and save options to each object

**Parameters:**

| Name | Type |
| ------ | ------ |
| rallyObject | [RallyObject](../interfaces/_api_.api.rallyobject.md) |

**Returns:** `Promise`<`void`>

___
<a id="_request"></a>

### `<Private>` _request

▸ **_request**(typeOrRef: *`string`*, objectID?: *`any`*, params?: *`object`*, action: *`string`*): `Promise`<`any`>

*Defined in [Client.ts:286](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L286)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| typeOrRef | `string` | - |
| `Default value` objectID | `any` |  null |
| `Default value` params | `object` |  {} |
| action | `string` | - |

**Returns:** `Promise`<`any`>

___
<a id="delete"></a>

###  delete

▸ **delete**(inputOrRef: *`string` \| [RallyObject](../interfaces/_api_.api.rallyobject.md)*, params?: *`object`*, ignoreDelay?: *`boolean`*): `Promise`<`any`>

*Defined in [Client.ts:327](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L327)*

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

▸ **get**(typeOrRef: *`string`*, objectID?: *`any`*, params?: *[QueryOptions](../interfaces/_api_.api.queryoptions.md)*): `Promise`<[RallyObject](../interfaces/_api_.api.rallyobject.md)>

*Defined in [Client.ts:249](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L249)*

Returns a Rally object by ref or by type and ID

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| typeOrRef | `string` | - |
| `Default value` objectID | `any` |  null |
| `Default value` params | [QueryOptions](../interfaces/_api_.api.queryoptions.md) |  {} |

**Returns:** `Promise`<[RallyObject](../interfaces/_api_.api.rallyobject.md)>

___
<a id="getcollection"></a>

###  getCollection

▸ **getCollection**(rallyObject: *[RallyObject](../interfaces/_api_.api.rallyobject.md)*, collectionName: *`string`*, params?: *[QueryOptions](../interfaces/_api_.api.queryoptions.md)*): `Promise`<[RallyObject](../interfaces/_api_.api.rallyobject.md)>

*Defined in [Client.ts:258](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L258)*

Gets a subcollection stored on the Rally object

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| rallyObject | [RallyObject](../interfaces/_api_.api.rallyobject.md) | - |
| collectionName | `string` | - |
| `Default value` params | [QueryOptions](../interfaces/_api_.api.queryoptions.md) |  {} |

**Returns:** `Promise`<[RallyObject](../interfaces/_api_.api.rallyobject.md)>

___
<a id="query"></a>

###  query

▸ **query**(type: *`string`*, query?: *[QueryOptions](../interfaces/_api_.api.queryoptions.md)*, params?: *`object`*): `Promise`<[QueryResponse](../interfaces/_api_.api.queryresponse.md)<[RallyObject](../interfaces/_api_.api.rallyobject.md)>>

*Defined in [Client.ts:142](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L142)*

returns an array modified to have additional meta data on it containing the results

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| type | `string` | - |
| `Default value` query | [QueryOptions](../interfaces/_api_.api.queryoptions.md) |  {} |
| `Default value` params | `object` |  {} |

**Returns:** `Promise`<[QueryResponse](../interfaces/_api_.api.queryresponse.md)<[RallyObject](../interfaces/_api_.api.rallyobject.md)>>

___
<a id="querylookback"></a>

###  queryLookback

▸ **queryLookback**(request: *[Request](../interfaces/_api_.api.lookback.request.md)*, workspaceId?: *`number`*): `Promise`<[Response](../interfaces/_api_.api.lookback.response.md)>

*Defined in [Client.ts:87](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L87)*

Returns a collection of results from the Lookback Api

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| request | [Request](../interfaces/_api_.api.lookback.request.md) | - |
| `Default value` workspaceId | `number` | 0 |

**Returns:** `Promise`<[Response](../interfaces/_api_.api.lookback.response.md)>

___
<a id="save"></a>

###  save

▸ **save**(type: *`string`*, rallyObject: *`Partial`<[RallyObject](../interfaces/_api_.api.rallyobject.md)>*): `Promise`<[RallyObject](../interfaces/_api_.api.rallyobject.md)>

▸ **save**(type: *`string`*, rallyObject: *`Partial`<[RallyObject](../interfaces/_api_.api.rallyobject.md)>*, queryOptions: *[QueryOptions](../interfaces/_api_.api.queryoptions.md)*): `Promise`<[RallyObject](../interfaces/_api_.api.rallyobject.md)>

▸ **save**(rallyObject: *`Partial`<[RallyObject](../interfaces/_api_.api.rallyobject.md)>*, queryOptions: *[QueryOptions](../interfaces/_api_.api.queryoptions.md)*): `Promise`<[RallyObject](../interfaces/_api_.api.rallyobject.md)>

▸ **save**(rallyObject: *`Partial`<[RallyObject](../interfaces/_api_.api.rallyobject.md)>*): `Promise`<[RallyObject](../interfaces/_api_.api.rallyobject.md)>

*Defined in [Client.ts:180](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L180)*

Saves the current state of the Rally object to Rally. Creating a new object on the server if no \_ref is provided in rallyObject

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | `string` |  The type of object to be created |
| rallyObject | `Partial`<[RallyObject](../interfaces/_api_.api.rallyobject.md)> |  A new or existing Rally object |

**Returns:** `Promise`<[RallyObject](../interfaces/_api_.api.rallyobject.md)>

*Defined in [Client.ts:181](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L181)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| rallyObject | `Partial`<[RallyObject](../interfaces/_api_.api.rallyobject.md)> |
| queryOptions | [QueryOptions](../interfaces/_api_.api.queryoptions.md) |

**Returns:** `Promise`<[RallyObject](../interfaces/_api_.api.rallyobject.md)>

*Defined in [Client.ts:182](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L182)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| rallyObject | `Partial`<[RallyObject](../interfaces/_api_.api.rallyobject.md)> |
| queryOptions | [QueryOptions](../interfaces/_api_.api.queryoptions.md) |

**Returns:** `Promise`<[RallyObject](../interfaces/_api_.api.rallyobject.md)>

*Defined in [Client.ts:183](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L183)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| rallyObject | `Partial`<[RallyObject](../interfaces/_api_.api.rallyobject.md)> |

**Returns:** `Promise`<[RallyObject](../interfaces/_api_.api.rallyobject.md)>

___
<a id="_prepareurl"></a>

### `<Static>``<Private>` _prepareUrl

▸ **_prepareUrl**(server: *`string`*, type: *`string`*, action?: *`boolean` \| `string` \| `number`*, params?: *[QueryOptions](../interfaces/_api_.api.queryoptions.md)*): `string`

*Defined in [Client.ts:400](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L400)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| server | `string` | - |
| type | `string` | - |
| `Default value` action | `boolean` \| `string` \| `number` | &quot;&quot; |
| `Default value` params | [QueryOptions](../interfaces/_api_.api.queryoptions.md) |  {} |

**Returns:** `string`

___
<a id="delay"></a>

### `<Static>``<Private>` delay

▸ **delay**(millisecondsOfDelay: *`number`*, scopeFuction?: *`Function`*): `Promise`<`Object`>

*Defined in [Client.ts:419](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L419)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| millisecondsOfDelay | `number` | - |
| `Default value` scopeFuction | `Function` |  () &#x3D;&gt; { } |

**Returns:** `Promise`<`Object`>

___
<a id="getidfromref"></a>

### `<Static>` getIdFromRef

▸ **getIdFromRef**(ref: *`string`*): `string`

*Defined in [Client.ts:359](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L359)*

Gets the ID portion of a ref

**Parameters:**

| Name | Type |
| ------ | ------ |
| ref | `string` |

**Returns:** `string`

___
<a id="getref"></a>

### `<Static>` getRef

▸ **getRef**(input: *`string` \| [RallyObject](../interfaces/_api_.api.rallyobject.md)*, objectID?: *`number`*): `string`

*Defined in [Client.ts:341](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L341)*

returns the ref from a rally object or returns the ref is input is passed as a string

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| input | `string` \| [RallyObject](../interfaces/_api_.api.rallyobject.md) | - |
| `Default value` objectID | `number` | 0 |

**Returns:** `string`

___
<a id="gettypefromref"></a>

### `<Static>` getTypeFromRef

▸ **getTypeFromRef**(ref: *`string`*): `string`

*Defined in [Client.ts:366](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L366)*

Gets the type portion of a ref

**Parameters:**

| Name | Type |
| ------ | ------ |
| ref | `string` |

**Returns:** `string`

___
<a id="manageresponse"></a>

### `<Static>` manageResponse

▸ **manageResponse**(response: *`object`*): `Promise`<`any`>

*Defined in [Client.ts:57](https://github.com/ferentchak/rally-node-sdk/blob/52b036e/Client.ts#L57)*

The default server for Rally to be used

**Parameters:**

**response: `object`**

| Name | Type |
| ------ | ------ |
| json | `function` |
| ok | `any` |
| status | `any` |
| statusText | `any` |

**Returns:** `Promise`<`any`>

___

