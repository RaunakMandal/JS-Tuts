/* 
    TODO: falsy values
    undefined -> not defined
    null -> empty
    0 -> zero
    '' -> empty
    NaN -> not a number
*/

var user = "2";

if(2 == user) { // == ignores data type
    console.log("true");
}

if(2 === user) { // === data types are used
    console.log("true");
}

console.log("2"+2);
console.log("2"+"2");