/* Typescript basics & basic types*/
-> Module introduction

`number`: 1, 5.5, -10    => All number, no differentiation between integers of floats
`string`: 'Hi', "Hi", `Hi`  => All text values
`boolean`: true, false => Just these two "Truthy" or "falsy" values
`object`: {age: 30} => Any Javascript object, more specific types (Types of object) are possible
`Array`: [1, 2, 3] => Any Javascript Arr, type can be flexible or strict (Regarding the element types) 
`Tuple`: [1, 2] => Add by typescript: Fixed-length array.
`Enum`: enum {NEW, OLD} => Added by typescript Automatically enumerated global constant identifiers 
Important: Often, you'll see enums with all-uppercase values but `not a "must-do"`. You can go with `Any value name`
`Any`. * . Any kind of value, no specific type assignment 
  
Important: it is `string` and `number` (etc..). NOT `String`, `Number`
=-> the core primitive types in Typescript are all lowercase!
===> The key difference is: javascript uses "dynamic types" (Resolved at runtime). Typescript uses 'static types' 

Question 1: Why are "Types" useful and offer and advantage compare to vanilla Javascript.
-> Types allow you to detect if data of a wrong type is used or pass around, hance you can avoid unexpected runtime errors

