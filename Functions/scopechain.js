var name = "Raunak";

console.log("Line number 3", name);

function sayName() {
    // var name = "whatever";
    console.log("Line number 6", name);
    sayName2();
    function sayName2() {
        // var name = "Mr R";
        console.log("Line number 10", name); // it will get the variable from its top scopes
    }
}


sayName();