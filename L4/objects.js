var user = { // stored as key-value pair in objects
    firstName : "Raunak", // kets are like string indices
    lastName : "Mandal",
    phone : "+91-9932810125",
    mail : "iamriju2000@gmail.com"
};

console.log(user.firstName + user.lastName); // (.) dot is like accessing a key-value
console.log(user["mail"]);
user.lastName = "Mandalll";
console.log(user);

console.table(user);