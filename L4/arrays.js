var countries = ["India", "USA", "Japan", "Russia"];

var states = new Array("West Bengal", "Sikkim", "Assam");

console.log(countries[0]);

console.log(states.length);

states[0] = "Punjab";
console.log(states);

var user = ["Raunak Mandal", "iamriju2000@gmail.com", 6, 69, true];
console.log(user);

user.pop();
console.log(user);
user.unshift("NEW VALUE"); // add first and shift
console.log(user);

user.shift(); // removes the first
console.log(user);

console.log(user.indexOf(69)); // gives index

console.log(Array.from("Raunak"));