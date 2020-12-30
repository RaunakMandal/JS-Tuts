function sayHello() {
    console.log("Hello");
}
function sayHelloParam(name) {
    console.log("Hello "+name);
    console.log(`Hello there, ${name}`); // use dollars
}

// sayHello(); // Calling the function
// sayHello();

sayHelloParam("Raunak"); // Calling the function
sayHelloParam();

sayHello; // Referencing a function


function namaste() {
    return "Hello in India"; // have to store somewhere
}

var greetings = namaste();

console.log(greetings);
console.log(namaste());