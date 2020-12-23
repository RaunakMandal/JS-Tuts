// if any of the login is done then allow

var email = true;
var facebook = false;
var google = true;

if(email || facebook || google) {
    console.log("You are logged in");
}
else {
    console.log("Invalid Login");
}