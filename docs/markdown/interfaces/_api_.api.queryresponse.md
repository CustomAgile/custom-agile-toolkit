[custom-agile-toolkit](../README.md) > ["Api"](../modules/_api_.md) > [Api](../modules/_api_.api.md) > [QueryResponse](../interfaces/_api_.api.queryresponse.md)

# Interface: QueryResponse

## Type parameters
#### T :  [RallyObject](_api_.api.rallyobject.md)
## Hierarchy

 `Array`<`T`>

**↳ QueryResponse**

## Indexable

\[n: `number`\]:&nbsp;`T`
## Index

### Properties

* [$getAll](_api_.api.queryresponse.md#_getall)
* [$getNextPage](_api_.api.queryresponse.md#_getnextpage)
* [$hasMore](_api_.api.queryresponse.md#_hasmore)
* [$params](_api_.api.queryresponse.md#_params)
* [Array](_api_.api.queryresponse.md#array)
* [length](_api_.api.queryresponse.md#length)

### Methods

* [__@iterator](_api_.api.queryresponse.md#___iterator)
* [__@unscopables](_api_.api.queryresponse.md#___unscopables)
* [concat](_api_.api.queryresponse.md#concat)
* [copyWithin](_api_.api.queryresponse.md#copywithin)
* [entries](_api_.api.queryresponse.md#entries)
* [every](_api_.api.queryresponse.md#every)
* [fill](_api_.api.queryresponse.md#fill)
* [filter](_api_.api.queryresponse.md#filter)
* [find](_api_.api.queryresponse.md#find)
* [findIndex](_api_.api.queryresponse.md#findindex)
* [flatMap](_api_.api.queryresponse.md#flatmap)
* [flatten](_api_.api.queryresponse.md#flatten)
* [forEach](_api_.api.queryresponse.md#foreach)
* [includes](_api_.api.queryresponse.md#includes)
* [indexOf](_api_.api.queryresponse.md#indexof)
* [join](_api_.api.queryresponse.md#join)
* [keys](_api_.api.queryresponse.md#keys)
* [lastIndexOf](_api_.api.queryresponse.md#lastindexof)
* [map](_api_.api.queryresponse.md#map)
* [pop](_api_.api.queryresponse.md#pop)
* [push](_api_.api.queryresponse.md#push)
* [reduce](_api_.api.queryresponse.md#reduce)
* [reduceRight](_api_.api.queryresponse.md#reduceright)
* [reverse](_api_.api.queryresponse.md#reverse)
* [shift](_api_.api.queryresponse.md#shift)
* [slice](_api_.api.queryresponse.md#slice)
* [some](_api_.api.queryresponse.md#some)
* [sort](_api_.api.queryresponse.md#sort)
* [splice](_api_.api.queryresponse.md#splice)
* [toLocaleString](_api_.api.queryresponse.md#tolocalestring)
* [toString](_api_.api.queryresponse.md#tostring)
* [unshift](_api_.api.queryresponse.md#unshift)
* [values](_api_.api.queryresponse.md#values)

---

## Properties

<a id="_getall"></a>

###  $getAll

**● $getAll**: *`function`*

*Defined in [Api.ts:40](https://github.com/ferentchak/rally-node-sdk/blob/e12497b/Api.ts#L40)*

returns all the data from the later pages including this page

#### Type declaration
▸(): `Promise`<[QueryResponse](_api_.api.queryresponse.md)<`T`>>

**Returns:** `Promise`<[QueryResponse](_api_.api.queryresponse.md)<`T`>>

___
<a id="_getnextpage"></a>

###  $getNextPage

**● $getNextPage**: *`function`*

*Defined in [Api.ts:42](https://github.com/ferentchak/rally-node-sdk/blob/e12497b/Api.ts#L42)*

returns the data from the next page

#### Type declaration
▸(): `Promise`<[QueryResponse](_api_.api.queryresponse.md)<`T`>>

**Returns:** `Promise`<[QueryResponse](_api_.api.queryresponse.md)<`T`>>

___
<a id="_hasmore"></a>

###  $hasMore

**● $hasMore**: *`boolean`*

*Defined in [Api.ts:38](https://github.com/ferentchak/rally-node-sdk/blob/e12497b/Api.ts#L38)*

___
<a id="_params"></a>

###  $params

**● $params**: *`any`*

*Defined in [Api.ts:37](https://github.com/ferentchak/rally-node-sdk/blob/e12497b/Api.ts#L37)*

___
<a id="array"></a>

###  Array

**● Array**: *`ArrayConstructor`*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1280*

___
<a id="length"></a>

###  length

**● length**: *`number`*

*Inherited from Array.length*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1121*

Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.

___

## Methods

<a id="___iterator"></a>

###  __@iterator

▸ **__@iterator**(): `IterableIterator`<`T`>

*Inherited from Array.[Symbol.iterator]*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:52*

Iterator

**Returns:** `IterableIterator`<`T`>

___
<a id="___unscopables"></a>

###  __@unscopables

▸ **__@unscopables**(): `object`

*Inherited from Array.[Symbol.unscopables]*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:94*

Returns an object whose properties have the value 'true' when they will be absent when used in a 'with' statement.

**Returns:** `object`

___
<a id="concat"></a>

###  concat

▸ **concat**(...items: *`ConcatArray`<`T`>[]*): `T`[]

▸ **concat**(...items: *(`T` \| `ConcatArray`<`T`>)[]*): `T`[]

*Inherited from Array.concat*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1143*

Combines two or more arrays.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` items | `ConcatArray`<`T`>[] |  Additional items to add to the end of array1. |

**Returns:** `T`[]

*Inherited from Array.concat*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1148*

Combines two or more arrays.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` items | (`T` \| `ConcatArray`<`T`>)[] |  Additional items to add to the end of array1. |

**Returns:** `T`[]

___
<a id="copywithin"></a>

###  copyWithin

▸ **copyWithin**(target: *`number`*, start: *`number`*, end?: *`number`*): `this`

*Inherited from Array.copyWithin*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:66*

Returns the this object after copying a section of the array identified by start and end to the same array starting at position target

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| target | `number` |  If target is negative, it is treated as length+target where length is the length of the array. |
| start | `number` |  If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `Optional` end | `number` |  If not specified, length of the this object is used as its default value. |

**Returns:** `this`

___
<a id="entries"></a>

###  entries

▸ **entries**(): `IterableIterator`<[`number`, `T`]>

*Inherited from Array.entries*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:57*

Returns an iterable of key, value pairs for every entry in the array

**Returns:** `IterableIterator`<[`number`, `T`]>

___
<a id="every"></a>

###  every

▸ **every**(callbackfn: *`function`*, thisArg?: *`any`*): `boolean`

*Inherited from Array.every*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1208*

Determines whether all the members of an array satisfy the specified test.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array. |
| `Optional` thisArg | `any` |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** `boolean`

___
<a id="fill"></a>

###  fill

▸ **fill**(value: *`T`*, start?: *`number`*, end?: *`number`*): `this`

*Inherited from Array.fill*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:55*

Returns the this object after filling the section identified by start and end with value

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `T` |  value to fill array section with |
| `Optional` start | `number` |  index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `Optional` end | `number` |  index to stop filling the array at. If end is negative, it is treated as length+end. |

**Returns:** `this`

___
<a id="filter"></a>

###  filter

▸ **filter**<`S`>(callbackfn: *`function`*, thisArg?: *`any`*): `S`[]

▸ **filter**(callbackfn: *`function`*, thisArg?: *`any`*): `T`[]

*Inherited from Array.filter*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1232*

Returns the elements of an array that meet the condition specified in a callback function.

**Type parameters:**

#### S :  `T`
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array. |
| `Optional` thisArg | `any` |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** `S`[]

*Inherited from Array.filter*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1238*

Returns the elements of an array that meet the condition specified in a callback function.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array. |
| `Optional` thisArg | `any` |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** `T`[]

___
<a id="find"></a>

###  find

▸ **find**<`S`>(predicate: *`function`*, thisArg?: *`any`*): `S` \| `undefined`

▸ **find**(predicate: *`function`*, thisArg?: *`any`*): `T` \| `undefined`

*Inherited from Array.find*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:33*

Returns the value of the first element in the array where predicate is true, and undefined otherwise.

**Type parameters:**

#### S :  `T`
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| predicate | `function` |  find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `Optional` thisArg | `any` |  If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

**Returns:** `S` \| `undefined`

*Inherited from Array.find*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:34*

**Parameters:**

| Name | Type |
| ------ | ------ |
| predicate | `function` |
| `Optional` thisArg | `any` |

**Returns:** `T` \| `undefined`

___
<a id="findindex"></a>

###  findIndex

▸ **findIndex**(predicate: *`function`*, thisArg?: *`any`*): `number`

*Inherited from Array.findIndex*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:45*

Returns the index of the first element in the array where predicate is true, and -1 otherwise.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| predicate | `function` |  find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `Optional` thisArg | `any` |  If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

**Returns:** `number`

___
<a id="flatmap"></a>

###  flatMap

▸ **flatMap**<`U`,`This`>(callback: *`function`*, thisArg?: *`This`*): `U`[]

*Inherited from Array.flatMap*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.array.d.ts:147*

Calls a defined callback function on each element of an array. Then, flattens the result into a new array. This is identical to a map followed by a flatten of depth 1.

**Type parameters:**

#### U 
#### This 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callback | `function` |  A function that accepts up to three arguments. The flatMap method calls the callback function one time for each element in the array. |
| `Optional` thisArg | `This` |  An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** `U`[]

___
<a id="flatten"></a>

###  flatten

▸ **flatten**<`U`>(this: *`U`[][][][][][][][]*, depth: *`7`*): `U`[]

▸ **flatten**<`U`>(this: *`U`[][][][][][][]*, depth: *`6`*): `U`[]

▸ **flatten**<`U`>(this: *`U`[][][][][][]*, depth: *`5`*): `U`[]

▸ **flatten**<`U`>(this: *`U`[][][][][]*, depth: *`4`*): `U`[]

▸ **flatten**<`U`>(this: *`U`[][][][]*, depth: *`3`*): `U`[]

▸ **flatten**<`U`>(this: *`U`[][][]*, depth: *`2`*): `U`[]

▸ **flatten**<`U`>(this: *`U`[][]*, depth?: *`1`*): `U`[]

▸ **flatten**<`U`>(this: *`U`[]*, depth: *`0`*): `U`[]

▸ **flatten**<`U`>(depth?: *`number`*): `any`[]

*Inherited from Array.flatten*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.array.d.ts:158*

Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| this | `U`[][][][][][][][] |
| depth | `7` |  The maximum recursion depth |

**Returns:** `U`[]

*Inherited from Array.flatten*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.array.d.ts:166*

Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| this | `U`[][][][][][][] |
| depth | `6` |  The maximum recursion depth |

**Returns:** `U`[]

*Inherited from Array.flatten*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.array.d.ts:174*

Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| this | `U`[][][][][][] |
| depth | `5` |  The maximum recursion depth |

**Returns:** `U`[]

*Inherited from Array.flatten*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.array.d.ts:182*

Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| this | `U`[][][][][] |
| depth | `4` |  The maximum recursion depth |

**Returns:** `U`[]

*Inherited from Array.flatten*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.array.d.ts:190*

Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| this | `U`[][][][] |
| depth | `3` |  The maximum recursion depth |

**Returns:** `U`[]

*Inherited from Array.flatten*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.array.d.ts:198*

Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| this | `U`[][][] |
| depth | `2` |  The maximum recursion depth |

**Returns:** `U`[]

*Inherited from Array.flatten*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.array.d.ts:206*

Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| this | `U`[][] |
| `Optional` depth | `1` |  The maximum recursion depth |

**Returns:** `U`[]

*Inherited from Array.flatten*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.array.d.ts:214*

Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| this | `U`[] |
| depth | `0` |  The maximum recursion depth |

**Returns:** `U`[]

*Inherited from Array.flatten*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.esnext.array.d.ts:222*

Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. If no depth is provided, flatten method defaults to the depth of 1.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` depth | `number` |  The maximum recursion depth |

**Returns:** `any`[]

___
<a id="foreach"></a>

###  forEach

▸ **forEach**(callbackfn: *`function`*, thisArg?: *`any`*): `void`

*Inherited from Array.forEach*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1220*

Performs the specified action for each element in an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `Optional` thisArg | `any` |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** `void`

___
<a id="includes"></a>

###  includes

▸ **includes**(searchElement: *`T`*, fromIndex?: *`number`*): `boolean`

*Inherited from Array.includes*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2016.array.include.d.ts:27*

Determines whether an array includes a certain element, returning true or false as appropriate.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchElement | `T` |  The element to search for. |
| `Optional` fromIndex | `number` |  The position in this array at which to begin searching for searchElement. |

**Returns:** `boolean`

___
<a id="indexof"></a>

###  indexOf

▸ **indexOf**(searchElement: *`T`*, fromIndex?: *`number`*): `number`

*Inherited from Array.indexOf*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1196*

Returns the index of the first occurrence of a value in an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchElement | `T` |  The value to locate in the array. |
| `Optional` fromIndex | `number` |  The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

**Returns:** `number`

___
<a id="join"></a>

###  join

▸ **join**(separator?: *`string`*): `string`

*Inherited from Array.join*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1153*

Adds all the elements of an array separated by the specified separator string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` separator | `string` |  A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma. |

**Returns:** `string`

___
<a id="keys"></a>

###  keys

▸ **keys**(): `IterableIterator`<`number`>

*Inherited from Array.keys*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:62*

Returns an iterable of keys in the array

**Returns:** `IterableIterator`<`number`>

___
<a id="lastindexof"></a>

###  lastIndexOf

▸ **lastIndexOf**(searchElement: *`T`*, fromIndex?: *`number`*): `number`

*Inherited from Array.lastIndexOf*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1202*

Returns the index of the last occurrence of a specified value in an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchElement | `T` |  The value to locate in the array. |
| `Optional` fromIndex | `number` |  The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array. |

**Returns:** `number`

___
<a id="map"></a>

###  map

▸ **map**<`U`>(callbackfn: *`function`*, thisArg?: *`any`*): `U`[]

*Inherited from Array.map*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1226*

Calls a defined callback function on each element of an array, and returns an array that contains the results.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `Optional` thisArg | `any` |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** `U`[]

___
<a id="pop"></a>

###  pop

▸ **pop**(): `T` \| `undefined`

*Inherited from Array.pop*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1138*

Removes the last element from an array and returns it.

**Returns:** `T` \| `undefined`

___
<a id="push"></a>

###  push

▸ **push**(...items: *`T`[]*): `number`

*Inherited from Array.push*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1134*

Appends new elements to an array, and returns the new length of the array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` items | `T`[] |  New elements of the Array. |

**Returns:** `number`

___
<a id="reduce"></a>

###  reduce

▸ **reduce**(callbackfn: *`function`*): `T`

▸ **reduce**(callbackfn: *`function`*, initialValue: *`T`*): `T`

▸ **reduce**<`U`>(callbackfn: *`function`*, initialValue: *`U`*): `U`

*Inherited from Array.reduce*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1244*

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

**Returns:** `T`

*Inherited from Array.reduce*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1245*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackfn | `function` |
| initialValue | `T` |

**Returns:** `T`

*Inherited from Array.reduce*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1251*

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| initialValue | `U` |  If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

**Returns:** `U`

___
<a id="reduceright"></a>

###  reduceRight

▸ **reduceRight**(callbackfn: *`function`*): `T`

▸ **reduceRight**(callbackfn: *`function`*, initialValue: *`T`*): `T`

▸ **reduceRight**<`U`>(callbackfn: *`function`*, initialValue: *`U`*): `U`

*Inherited from Array.reduceRight*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1257*

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

**Returns:** `T`

*Inherited from Array.reduceRight*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1258*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callbackfn | `function` |
| initialValue | `T` |

**Returns:** `T`

*Inherited from Array.reduceRight*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1264*

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

#### U 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| initialValue | `U` |  If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

**Returns:** `U`

___
<a id="reverse"></a>

###  reverse

▸ **reverse**(): `T`[]

*Inherited from Array.reverse*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1157*

Reverses the elements in an Array.

**Returns:** `T`[]

___
<a id="shift"></a>

###  shift

▸ **shift**(): `T` \| `undefined`

*Inherited from Array.shift*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1161*

Removes the first element from an array and returns it.

**Returns:** `T` \| `undefined`

___
<a id="slice"></a>

###  slice

▸ **slice**(start?: *`number`*, end?: *`number`*): `T`[]

*Inherited from Array.slice*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1167*

Returns a section of an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` start | `number` |  The beginning of the specified portion of the array. |
| `Optional` end | `number` |  The end of the specified portion of the array. |

**Returns:** `T`[]

___
<a id="some"></a>

###  some

▸ **some**(callbackfn: *`function`*, thisArg?: *`any`*): `boolean`

*Inherited from Array.some*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1214*

Determines whether the specified callback function returns true for any element of an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function` |  A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array. |
| `Optional` thisArg | `any` |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** `boolean`

___
<a id="sort"></a>

###  sort

▸ **sort**(compareFn?: *`function`*): `this`

*Inherited from Array.sort*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1172*

Sorts an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` compareFn | `function` |  The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order. |

**Returns:** `this`

___
<a id="splice"></a>

###  splice

▸ **splice**(start: *`number`*, deleteCount?: *`number`*): `T`[]

▸ **splice**(start: *`number`*, deleteCount: *`number`*, ...items: *`T`[]*): `T`[]

*Inherited from Array.splice*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1178*

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| start | `number` |  The zero-based location in the array from which to start removing elements. |
| `Optional` deleteCount | `number` |  The number of elements to remove. |

**Returns:** `T`[]

*Inherited from Array.splice*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1185*

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| start | `number` |  The zero-based location in the array from which to start removing elements. |
| deleteCount | `number` |  The number of elements to remove. |
| `Rest` items | `T`[] |  Elements to insert into the array in place of the deleted elements. |

**Returns:** `T`[]

___
<a id="tolocalestring"></a>

###  toLocaleString

▸ **toLocaleString**(): `string`

*Inherited from Array.toLocaleString*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1129*

Returns a string representation of an array. The elements are converted to string using thier toLocalString methods.

**Returns:** `string`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Inherited from Array.toString*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1125*

Returns a string representation of an array.

**Returns:** `string`

___
<a id="unshift"></a>

###  unshift

▸ **unshift**(...items: *`T`[]*): `number`

*Inherited from Array.unshift*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1190*

Inserts new elements at the start of an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` items | `T`[] |  Elements to insert at the start of the Array. |

**Returns:** `number`

___
<a id="values"></a>

###  values

▸ **values**(): `IterableIterator`<`T`>

*Inherited from Array.values*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:67*

Returns an iterable of values in the array

**Returns:** `IterableIterator`<`T`>

___

