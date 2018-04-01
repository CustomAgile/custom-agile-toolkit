[custom-agile-toolkit](../README.md) > ["ClassClients"](../modules/_classclients_.md) > [ClassClients](../modules/_classclients_.classclients.md) > [CumulativeFlowData](../classes/_classclients_.classclients.cumulativeflowdata.md)



# Class: CumulativeFlowData

## Hierarchy


 [ClassClientBase](_classclients_.classclients.classclientbase.md)`CumulativeFlowData`

**↳ CumulativeFlowData**







## Index

### Constructors

* [constructor](_classclients_.classclients.cumulativeflowdata.md#constructor)


### Properties

* [client](_classclients_.classclients.cumulativeflowdata.md#client)
* [typeName](_classclients_.classclients.cumulativeflowdata.md#typename)


### Methods

* [delete](_classclients_.classclients.cumulativeflowdata.md#delete)
* [get](_classclients_.classclients.cumulativeflowdata.md#get)
* [getCollection](_classclients_.classclients.cumulativeflowdata.md#getcollection)
* [query](_classclients_.classclients.cumulativeflowdata.md#query)
* [save](_classclients_.classclients.cumulativeflowdata.md#save)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new CumulativeFlowData**(apiKey: *`string`*, options: *[ClientOptions](../interfaces/_api_.api.clientoptions.md)*): [CumulativeFlowData](_classclients_.classclients.cumulativeflowdata.md)


### ⊕ **new CumulativeFlowData**(client: *[Client](_client_.client.md)*): [CumulativeFlowData](_classclients_.classclients.cumulativeflowdata.md)


*Overrides [ClassClientBase](_classclients_.classclients.classclientbase.md).[constructor](_classclients_.classclients.classclientbase.md#constructor)*

*Defined in ClassClients.ts:215*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| apiKey | `string`   |  - |
| options | [ClientOptions](../interfaces/_api_.api.clientoptions.md)   |  - |





**Returns:** [CumulativeFlowData](_classclients_.classclients.cumulativeflowdata.md)

*Overrides [ClassClientBase](_classclients_.classclients.classclientbase.md).[constructor](_classclients_.classclients.classclientbase.md#constructor)*

*Defined in ClassClients.ts:216*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| client | [Client](_client_.client.md)   |  - |





**Returns:** [CumulativeFlowData](_classclients_.classclients.cumulativeflowdata.md)

---


## Properties
<a id="client"></a>

### «Private» client

**●  client**:  *[Client](_client_.client.md)* 

*Inherited from [ClassClientBase](_classclients_.classclients.classclientbase.md).[client](_classclients_.classclients.classclientbase.md#client)*

*Defined in ClassClients.ts:23*






___

<a id="typename"></a>

### «Private» typeName

**●  typeName**:  *`string`* 

*Inherited from [ClassClientBase](_classclients_.classclients.classclientbase.md).[typeName](_classclients_.classclients.classclientbase.md#typename)*

*Defined in ClassClients.ts:27*






___


## Methods
<a id="delete"></a>

###  delete

► **delete**(inputOrRef: *`string`⎮[RallyObject](../interfaces/_api_.api.rallyobject.md)*, params?: *`object`*, ignoreDelay?: *`boolean`*): `Promise`.<`any`>



*Inherited from [ClassClientBase](_classclients_.classclients.classclientbase.md).[delete](_classclients_.classclients.classclientbase.md#delete)*

*Defined in ClassClients.ts:73*




**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| inputOrRef | `string`⎮[RallyObject](../interfaces/_api_.api.rallyobject.md)  | - |   Either a Rally object or the ref for a Rally object |
| params | `object`  |  {} |   Optional Params to be sent with the request |
| ignoreDelay | `boolean`  | false |   Pass true if you don't want to wait 500 ms longer to return. This time gives the Rally server a chance to finish deleting |





**Returns:** `Promise`.<`any`>





___

<a id="get"></a>

###  get

► **get**(typeOrRef: *`string`*, objectID?: *`number`*, params?: *[QueryOptions](../interfaces/_api_.api.queryoptions.md)*): `Promise`.<`CumulativeFlowData`>



*Inherited from [ClassClientBase](_classclients_.classclients.classclientbase.md).[get](_classclients_.classclients.classclientbase.md#get)*

*Defined in ClassClients.ts:54*



Returns a Rally object by ref or by type and ID


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| typeOrRef | `string`  | - |   - |
| objectID | `number`  | 0 |   - |
| params | [QueryOptions](../interfaces/_api_.api.queryoptions.md)  |  {} |   - |





**Returns:** `Promise`.<`CumulativeFlowData`>





___

<a id="getcollection"></a>

###  getCollection

► **getCollection**(rallyObject: *`CumulativeFlowData`*, collectionName: *`string`*, params?: *[QueryOptions](../interfaces/_api_.api.queryoptions.md)*): `Promise`.<[QueryResponse](../interfaces/_api_.api.queryresponse.md)[RallyObject](../interfaces/_api_.api.rallyobject.md)>



*Inherited from [ClassClientBase](_classclients_.classclients.classclientbase.md).[getCollection](_classclients_.classclients.classclientbase.md#getcollection)*

*Defined in ClassClients.ts:62*



Gets a subcollection stored on the Rally object


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| rallyObject | `CumulativeFlowData`  | - |   - |
| collectionName | `string`  | - |   - |
| params | [QueryOptions](../interfaces/_api_.api.queryoptions.md)  |  {} |   - |





**Returns:** `Promise`.<[QueryResponse](../interfaces/_api_.api.queryresponse.md)[RallyObject](../interfaces/_api_.api.rallyobject.md)>





___

<a id="query"></a>

###  query

► **query**(type: *`any`*, query?: *[QueryOptions](../interfaces/_api_.api.queryoptions.md)*, params?: *`object`*): `Promise`.<[QueryResponse](../interfaces/_api_.api.queryresponse.md)`CumulativeFlowData`>



*Inherited from [ClassClientBase](_classclients_.classclients.classclientbase.md).[query](_classclients_.classclients.classclientbase.md#query)*

*Defined in ClassClients.ts:31*



returns an array modified to have additional meta data on it containing the results


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| type | `any`  | - |   - |
| query | [QueryOptions](../interfaces/_api_.api.queryoptions.md)  |  {} |   - |
| params | `object`  |  {} |   - |





**Returns:** `Promise`.<[QueryResponse](../interfaces/_api_.api.queryresponse.md)`CumulativeFlowData`>





___

<a id="save"></a>

###  save

► **save**(rallyObject: *`Partial`.<`CumulativeFlowData`>*): `Promise`.<`CumulativeFlowData`>



*Inherited from [ClassClientBase](_classclients_.classclients.classclientbase.md).[save](_classclients_.classclients.classclientbase.md#save)*

*Defined in ClassClients.ts:42*



Saves the current state of the Rally object to Rally. Creating a new object on the server if no _ref is provided in rallyObject


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| rallyObject | `Partial`.<`CumulativeFlowData`>   |  A new or existing Rally object |





**Returns:** `Promise`.<`CumulativeFlowData`>





___


