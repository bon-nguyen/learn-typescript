/* Typescript basics & basic types*/
-> Module introduction

`number`: 1, 5.5, -10    => All number, no differentiation between integers of floats
`string`: 'Hi', "Hi", `Hi`  => All text values
`boolean`: true, false => Just these two "Truthy" or "falsy" values
`object`: {age: 30} => Any Javascript object, more specific types (Types of object) are possible
`Array`: [1, 2, 3] => Any Javascript Arr, type can be flexible or strict (Regarding the element types) 
`Tuple`: [1, 2] => is a typed `array` Add by typescript: Fixed-length array.
let ourTuple: `[number, boolean, string]`

ourTuple = `[5, false, 'Coding God was here']`
`Enum`: enum {NEW, OLD} => Added by typescript Automatically enumerated global constant identifiers 
Important: Often, you'll see enums with all-uppercase values but `not a "must-do"`. You can go with `Any value name`
`Any`. * . Any kind of value, no specific type assignment 
  
Important: it is `string` and `number` (etc..). NOT `String`, `Number`
=-> the core primitive types in Typescript are all lowercase!
===> The key difference is: javascript uses "dynamic types" (Resolved at runtime). Typescript uses 'static types' 

Question 1: Why are "Types" useful and offer and advantage compare to vanilla Javascript.
-> Types allow you to detect if data of a wrong type is used or pass around, hance you can avoid unexpected runtime errors

`Union | OR`: (name: string | number) are used when a value can be more than single types

`Literal types` is available in Typescript today: strings, numbers, and boolean, by using literal types you can allow an exact value which a strings number or boolean must have.
==> Especially useful when used in conjunction with `union types`.

`Type aliases` we've been using object types and union types by writing them directly in type annotations (Chú thích). This is convenient, but it's common to want to use the same type more than once and refer to it by a single name.

A type alias is exactly that - a `name` for any `type`
Note: cannot use `type aliases` to create `different/distinct` version of the same type

`Function return Typed & void`

Function passing data around in Javascript. TYpescript specify the types of bold the `Input` and `Output` values 
**** -> Parameter type annotations(chú thích) -> Add parameter to declare 
***Example : `function greet(name: string)` have `Annotations` typescript will check the right arguments
**** -> Return `annotations` 
*** Example `function getData()`: number{}  Return type annotations appear after parameter list.

`Anonymous Functions`

NOtes: Simple inference rules, you don't need to ex

`Void` void is used where there is no data. 
example:
function sayHo ():void {
    console.log("Hi"); -> As only null or  undefined is assignable to void
}

`Callback function` can return something, even of the argument on which they dose NOT expect a returned value; 

``

`Section 3 ** The typescript compiler (and Configuration)`
Can generate a tsconfig.json
`combine all file .ts` ->> tsc

=>> tsc -w `auto combine ts`

`Using watch Mode`

`Compiling the Entire Project/ Multiple Files`
Create a tsconfig.json ->> cmt: tsc --init



>> How we can manage multiple files with typescript