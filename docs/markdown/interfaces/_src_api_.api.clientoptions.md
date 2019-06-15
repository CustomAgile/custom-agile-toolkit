[custom-agile-toolkit](../README.md) > ["src/Api"](../modules/_src_api_.md) > [Api](../modules/_src_api_.api.md) > [ClientOptions](../interfaces/_src_api_.api.clientoptions.md)

# Interface: ClientOptions

## Hierarchy

**ClientOptions**

## Index

### Properties

* [maxConcurrentRequests](_src_api_.api.clientoptions.md#maxconcurrentrequests)
* [maxReadRetrys](_src_api_.api.clientoptions.md#maxreadretrys)
* [maxWriteRetrys](_src_api_.api.clientoptions.md#maxwriteretrys)
* [project](_src_api_.api.clientoptions.md#project)
* [server](_src_api_.api.clientoptions.md#server)
* [workspace](_src_api_.api.clientoptions.md#workspace)

---

## Properties

<a id="maxconcurrentrequests"></a>

### `<Optional>` maxConcurrentRequests

**● maxConcurrentRequests**: *`number`*

*Defined in [src/Api.ts:13](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Api.ts#L13)*

Maximum concurrent requests that a client can make

___
<a id="maxreadretrys"></a>

### `<Optional>` maxReadRetrys

**● maxReadRetrys**: *`number`*

*Defined in [src/Api.ts:15](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Api.ts#L15)*

Maximum number of retry attempts made by a request

___
<a id="maxwriteretrys"></a>

### `<Optional>` maxWriteRetrys

**● maxWriteRetrys**: *`number`*

*Defined in [src/Api.ts:17](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Api.ts#L17)*

Maximum number of retry attempts made by a request

___
<a id="project"></a>

### `<Optional>` project

**● project**: *`string`*

*Defined in [src/Api.ts:9](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Api.ts#L9)*

The Rally projects ref `"/project/1234/"` that requests will be made against by default

___
<a id="server"></a>

### `<Optional>` server

**● server**: *`string`*

*Defined in [src/Api.ts:7](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Api.ts#L7)*

The Rally server that requests will be made against

___
<a id="workspace"></a>

### `<Optional>` workspace

**● workspace**: *`string`*

*Defined in [src/Api.ts:11](https://github.com/ferentchak/rally-node-sdk/blob/4c2e61e/src/Api.ts#L11)*

The Rally workspace ref `"/workspace/1234/"` that requests will be made against by default

___

