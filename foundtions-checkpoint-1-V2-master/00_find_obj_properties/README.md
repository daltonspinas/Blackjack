### Find Object Properties

#### 5.00 Points


#### Part 1 - `findObjPropsHasOwn`

The function `findObjPropsHasOwn` accepts an object as an argument.
Loop over the object and return the names of the keys that are on the object instance,
not on its internal prototype (aka .__proto__), to achieve this, use **[Object.prototype.hasOwnProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)**.  

Return all the keys on the object as
a string. If there is more than one key, each key should be separated by a `","` and a `space`.

#### Part 2 - `findObjKeys`

`findObjKeys` achieves the same purpose as Part 1 `findObjPropsHasOwn`.  The only difference, instead of using `Object.prototype.hasOwnProperty` use `Object.keys`, read the next paragraph for more information.

The function `findObjKeys` accepts an object as an argument.
Loop over the object and return the names of the keys that are on the object instance,
not on its internal prototype (aka .__proto__), to achieve this, use **[Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)**.  

Return all the keys on the object as
a string. If there is more than one key, each key should be separated by a `","` and a `space`.



