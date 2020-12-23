// Purchase logic
// verify details
// if anything is wrong, abort
// else continue

var isLoggedIn = true;
var isEmailValid = false;
var cardInfo = true;

// if(isLoggedIn) {
//     console.log("User is Logged in");
//     if(isEmailValid) {
//         console.log("Email is verified");
//         if(cardInfo) {
//             console.log("Card Info is Correct");
//             console.log("Purchase Successful");
//         }
//     }
// }

if(isLoggedIn && isEmailValid && cardInfo) {
    console.log("Purchase successful");
}
else {
    console.log("One or more criteria didn't met");
}