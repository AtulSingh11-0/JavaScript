/*
to convert any datatype to another datatype 
syntax : Datatype (variable_name)
here the datatype in which u want to convert, should have its first alphabet in uppercase
*/

// conversion to Number
let dummy = null
let converted = Number(dummy)
// console.log(converted);
// console.log(typeof converted);
/*
"33" -> 33;
"33abc" -> NaN;
null -> 0;
undefined -> NaN;
true -> 1; false -> 0;
*/

// conversion to Boolean
let something = undefined
let boolVal = Boolean(something)
// console.log(boolVal);
// console.log(typeof boolVal);
/*
"abc" -> true; "" -> false;
1 -> true; 0 -> false;
null -> undefined -> NaN -> false;
*/

// conversion to String
let fella = undefined
let stringVal = String(fella)
// console.log(stringVal);
// console.log(typeof stringVal);
/*
1 -> 0 -> true -> false -> string
NaN -> null -> undefined -> string
*/