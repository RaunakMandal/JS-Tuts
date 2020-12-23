// Global Context
// Execution Context
// ->->-> <-<-<-
// -> Variable Object
// -> Scope Chain
// -> this

// Function declarations are scanned and made available
// Function declarations are scanned and made undefined

tipper(10);
tipper("10");
tipper("A");

function tipper(a) { //scanned and made available
    var bill = parseInt(a);
    console.log(bill + 5);
}

// bigTipper(200);
var bigTipper = function(a) { //scanned and made undefined
    var bill = parseInt(a);
    console.log(bill + 15);
}

bigTipper("200");


console.log(myName); // not available
var myName = "Raunak Mandal";

function sayName() {
    var myName = "Saxy boi";
    console.log(myName);
}

sayName();
console.log(myName);