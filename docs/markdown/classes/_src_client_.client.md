[custom-agile-toolkit](../README.md) > ["src/Client"](../modules/_src_client_.md) > [Client](../classes/_src_client_.client.md)

# Class: Client

## Hierarchy

**Client**

## Index

### Constructors

* [constructor](_src_client_.client.md#constructor)

### Properties

* [apiKey](_src_client_.client.md#apikey)
* [options](_src_client_.client.md#options)
* [project](_src_client_.client.md#project)
* [throttle](_src_client_.client.md#throttle)
* [workspace](_src_client_.client.md#workspace)

### Accessors

* [defaultQueryOptions](_src_client_.client.md#defaultqueryoptions)
* [defaultLookbackRequest](_src_client_.client.md#defaultlookbackrequest)
* [defaultRallyServer](_src_client_.client.md#defaultrallyserver)

### Methods

* [_decorateObject](_src_client_.client.md#_decorateobject)
* [_request](_src_client_.client.md#_request)
* [delete](_src_client_.client.md#delete)
* [get](_src_client_.client.md#get)
* [getCollection](_src_client_.client.md#getcollection)
* [query](_src_client_.client.md#query)
* [queryLookback](_src_client_.client.md#querylookback)
* [save](_src_client_.client.md#save)
* [_prepareUrl](_src_client_.client.md#_prepareurl)
* [delay](_src_client_.client.md#delay)
* [getIdFromRef](_src_client_.client.md#getidfromref)
* [getRef](_src_client_.client.md#getref)
* [getTypeFromRef](_src_client_.client.md#gettypefromref)
* [manageResponse](_src_client_.client.md#manageresponse)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Client**(apiKey: *`string`*, options?: *[ClientOptions](../interfaces/_src_api_.api.clientoptions.md)*): [Client](_src_client_.client.md)

*Defined in [src/Client.ts:23](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L23)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| apiKey | `string` | - |
| `Default value` options | [ClientOptions](../interfaces/_src_api_.api.clientoptions.md) |  {server: Client.defaultRallyServer,project: undefined,workspace: undefined,maxConcurrentRequests: 5,maxReadRetrys: 5,maxWriteRetrys: 0} |

**Returns:** [Client](_src_client_.client.md)

___

## Properties

<a id="apikey"></a>

### `<Private>` apiKey

**● apiKey**: *`string`*

*Defined in [src/Client.ts:56](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L56)*

___
<a id="options"></a>

###  options

**● options**: *[ClientOptions](../interfaces/_src_api_.api.clientoptions.md)*

*Defined in [src/Client.ts:60](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L60)*

___
<a id="project"></a>

###  project

**● project**: *`string`*

*Defined in [src/Client.ts:59](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L59)*

___
<a id="throttle"></a>

###  throttle

**● throttle**: *`Throttle`*

*Defined in [src/Client.ts:57](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L57)*

___
<a id="workspace"></a>

###  workspace

**● workspace**: *`string`*

*Defined in [src/Client.ts:58](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L58)*

___

## Accessors

<a id="defaultqueryoptions"></a>

###  defaultQueryOptions

**get defaultQueryOptions**(): [QueryOptions](../interfaces/_src_api_.api.queryoptions.md)

*Defined in [src/Client.ts:398](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L398)*

**Returns:** [QueryOptions](../interfaces/_src_api_.api.queryoptions.md)

___
<a id="defaultlookbackrequest"></a>

### `<Static>` defaultLookbackRequest

**get defaultLookbackRequest**(): [QueryOptions](../interfaces/_src_api_.api.queryoptions.md)

*Defined in [src/Client.ts:413](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L413)*

**Returns:** [QueryOptions](../interfaces/_src_api_.api.queryoptions.md)

___
<a id="defaultrallyserver"></a>

### `<Static>` defaultRallyServer

**get defaultRallyServer**(): `string`

*Defined in [src/Client.ts:65](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L65)*

The default Rally server Rally to be used

**Returns:** `string`

___

## Methods

<a id="_decorateobject"></a>

###  _decorateObject

▸ **_decorateObject**(rallyObject: *[RallyObject](../interfaces/_src_api_.api.rallyobject.md)*): `Promise`<`void`>

*Defined in [src/Client.ts:344](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L344)*

Adds the delete and save options to each object

**Parameters:**

| Name | Type |
| ------ | ------ |
| rallyObject | [RallyObject](../interfaces/_src_api_.api.rallyobject.md) |

**Returns:** `Promise`<`void`>

___
<a id="_request"></a>

### `<Private>` _request

▸ **_request**(typeOrRef: *`string`*, objectID: *`any`*, params: *[QueryOptions](../interfaces/_src_api_.api.queryoptions.md)*, action: *"DELETE"*): `Promise`<`any`>

▸ **_request**(typeOrRef: *`string`*, objectID: *`any`*, params: *[QueryOptions](../interfaces/_src_api_.api.queryoptions.md)*, action: *"PUT"*): `Promise`<`any`>

▸ **_request**(typeOrRef: *`string`*, objectID: *`any`*, params: *[QueryOptions](../interfaces/_src_api_.api.queryoptions.md)*, action: *"GET"*): `Promise`<`any`>

*Defined in [src/Client.ts:308](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L308)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| typeOrRef | `string` |  The string name for a type \`defect\` or a string ref object \`/defect/1234/\` |
| objectID | `any` |  \- |
| params | [QueryOptions](../interfaces/_src_api_.api.queryoptions.md) |  \- |
| action | "DELETE" |   |

**Returns:** `Promise`<`any`>

*Defined in [src/Client.ts:309](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L309)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| typeOrRef | `string` |
| objectID | `any` |
| params | [QueryOptions](../interfaces/_src_api_.api.queryoptions.md) |
| action | "PUT" |

**Returns:** `Promise`<`any`>

*Defined in [src/Client.ts:310](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L310)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| typeOrRef | `string` |
| objectID | `any` |
| params | [QueryOptions](../interfaces/_src_api_.api.queryoptions.md) |
| action | "GET" |

**Returns:** `Promise`<`any`>

___
<a id="delete"></a>

###  delete

▸ **delete**(inputOrRef: *`string` \| [RallyObject](../interfaces/_src_api_.api.rallyobject.md)*, params?: *`object`*, ignoreDelay?: *`boolean`*): `Promise`<`any`>

*Defined in [src/Client.ts:355](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L355)*

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

▸ **get**(typeOrRef: *`string`*, objectID?: *`any`*, params?: *[QueryOptions](../interfaces/_src_api_.api.queryoptions.md)*): `Promise`<[RallyObject](../interfaces/_src_api_.api.rallyobject.md)>

*Defined in [src/Client.ts:264](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L264)*

Returns a Rally object by ref or by type and ID

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| typeOrRef | `string` | - |
| `Default value` objectID | `any` |  null |
| `Default value` params | [QueryOptions](../interfaces/_src_api_.api.queryoptions.md) |  {} |

**Returns:** `Promise`<[RallyObject](../interfaces/_src_api_.api.rallyobject.md)>

___
<a id="getcollection"></a>

###  getCollection

▸ **getCollection**(rallyObject: *[RallyObject](../interfaces/_src_api_.api.rallyobject.md)*, collectionName: *`string`*, params?: *[QueryOptions](../interfaces/_src_api_.api.queryoptions.md)*): `Promise`<[RallyObject](../interfaces/_src_api_.api.rallyobject.md)[]>

*Defined in [src/Client.ts:273](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L273)*

Gets a subcollection stored on the Rally object

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| rallyObject | [RallyObject](../interfaces/_src_api_.api.rallyobject.md) | - |
| collectionName | `string` | - |
| `Default value` params | [QueryOptions](../interfaces/_src_api_.api.queryoptions.md) |  {} |

**Returns:** `Promise`<[RallyObject](../interfaces/_src_api_.api.rallyobject.md)[]>

___
<a id="query"></a>

###  query

▸ **query**(type: *`string`*, query?: *[QueryOptions](../interfaces/_src_api_.api.queryoptions.md)*, params?: *`object`*): `Promise`<[QueryResponse](../interfaces/_src_api_.api.queryresponse.md)<[RallyObject](../interfaces/_src_api_.api.rallyobject.md)>>

*Defined in [src/Client.ts:153](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L153)*

returns an array modified to have additional meta data on it containing the results

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| type | `string` | - |
| `Default value` query | [QueryOptions](../interfaces/_src_api_.api.queryoptions.md) |  {} |
| `Default value` params | `object` |  {} |

**Returns:** `Promise`<[QueryResponse](../interfaces/_src_api_.api.queryresponse.md)<[RallyObject](../interfaces/_src_api_.api.rallyobject.md)>>

___
<a id="querylookback"></a>

###  queryLookback

▸ **queryLookback**(request: *[Request](../interfaces/_src_api_.api.lookback.request.md)*, workspaceId?: *`number`*): `Promise`<[Response](../interfaces/_src_api_.api.lookback.response.md)>

*Defined in [src/Client.ts:99](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L99)*

Returns a collection of results from the Lookback Api

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| request | [Request](../interfaces/_src_api_.api.lookback.request.md) | - |
| `Default value` workspaceId | `number` | 0 |

**Returns:** `Promise`<[Response](../interfaces/_src_api_.api.lookback.response.md)>

___
<a id="save"></a>

###  save

▸ **save**(type: *`string`*, rallyObject: *`Partial`<[RallyObject](../interfaces/_src_api_.api.rallyobject.md)>*): `Promise`<[RallyObject](../interfaces/_src_api_.api.rallyobject.md)>

▸ **save**(type: *`string`*, rallyObject: *`Partial`<[RallyObject](../interfaces/_src_api_.api.rallyobject.md)>*, queryOptions: *[QueryOptions](../interfaces/_src_api_.api.queryoptions.md)*): `Promise`<[RallyObject](../interfaces/_src_api_.api.rallyobject.md)>

▸ **save**(rallyObject: *`Partial`<[RallyObject](../interfaces/_src_api_.api.rallyobject.md)>*, queryOptions: *[QueryOptions](../interfaces/_src_api_.api.queryoptions.md)*): `Promise`<[RallyObject](../interfaces/_src_api_.api.rallyobject.md)>

▸ **save**(rallyObject: *`Partial`<[RallyObject](../interfaces/_src_api_.api.rallyobject.md)>*): `Promise`<[RallyObject](../interfaces/_src_api_.api.rallyobject.md)>

*Defined in [src/Client.ts:193](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L193)*

Saves the current state of the Rally object to Rally. Creating a new object on the server if no \_ref is provided in rallyObject

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | `string` |  The type of object to be created |
| rallyObject | `Partial`<[RallyObject](../interfaces/_src_api_.api.rallyobject.md)> |  A new or existing Rally object |

**Returns:** `Promise`<[RallyObject](../interfaces/_src_api_.api.rallyobject.md)>

*Defined in [src/Client.ts:194](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L194)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |
| rallyObject | `Partial`<[RallyObject](../interfaces/_src_api_.api.rallyobject.md)> |
| queryOptions | [QueryOptions](../interfaces/_src_api_.api.queryoptions.md) |

**Returns:** `Promise`<[RallyObject](../interfaces/_src_api_.api.rallyobject.md)>

*Defined in [src/Client.ts:195](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L195)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| rallyObject | `Partial`<[RallyObject](../interfaces/_src_api_.api.rallyobject.md)> |
| queryOptions | [QueryOptions](../interfaces/_src_api_.api.queryoptions.md) |

**Returns:** `Promise`<[RallyObject](../interfaces/_src_api_.api.rallyobject.md)>

*Defined in [src/Client.ts:196](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L196)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| rallyObject | `Partial`<[RallyObject](../interfaces/_src_api_.api.rallyobject.md)> |

**Returns:** `Promise`<[RallyObject](../interfaces/_src_api_.api.rallyobject.md)>

___
<a id="_prepareurl"></a>

### `<Static>``<Private>` _prepareUrl

▸ **_prepareUrl**(server: *`string`*, type: *`string`*, action?: *`boolean` \| `string` \| `number`*, params?: *[QueryOptions](../interfaces/_src_api_.api.queryoptions.md)*): `string`

*Defined in [src/Client.ts:428](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L428)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| server | `string` | - |
| type | `string` | - |
| `Default value` action | `boolean` \| `string` \| `number` | &quot;&quot; |
| `Default value` params | [QueryOptions](../interfaces/_src_api_.api.queryoptions.md) |  {} |

**Returns:** `string`

___
<a id="delay"></a>

### `<Static>``<Private>` delay

▸ **delay**(millisecondsOfDelay: *`number`*, scopeFuction?: *`Function`*): `Promise`<`Object`>

*Defined in [src/Client.ts:447](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L447)*

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

*Defined in [src/Client.ts:387](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L387)*

Gets the ID portion of a ref

**Parameters:**

| Name | Type |
| ------ | ------ |
| ref | `string` |

**Returns:** `string`

___
<a id="getref"></a>

### `<Static>` getRef

▸ **getRef**(input: *`string` \| [RallyObject](../interfaces/_src_api_.api.rallyobject.md)*, objectID?: *`number`*): `string`

*Defined in [src/Client.ts:369](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L369)*

returns the ref from a rally object or returns the ref is input is passed as a string

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| input | `string` \| [RallyObject](../interfaces/_src_api_.api.rallyobject.md) | - |
| `Default value` objectID | `number` | 0 |

**Returns:** `string`

___
<a id="gettypefromref"></a>

### `<Static>` getTypeFromRef

▸ **getTypeFromRef**(ref: *`string`*): `string`

*Defined in [src/Client.ts:394](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L394)*

Gets the type portion of a ref

**Parameters:**

| Name | Type |
| ------ | ------ |
| ref | `string` |

**Returns:** `string`

___
<a id="manageresponse"></a>

### `<Static>` manageResponse

▸ **manageResponse**(response: *[ResponseData](../modules/_src_client_.md#responsedata)*): `Promise`<`any`>

*Defined in [src/Client.ts:71](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Client.ts#L71)*

The default server for Rally to be used

**Parameters:**

| Name | Type |
| ------ | ------ |
| response | [ResponseData](../modules/_src_client_.md#responsedata) |

**Returns:** `Promise`<`any`>

___

