console.log(niceFunc());
function niceFunc(){
    return "Nice function"; // context understands there is a function later on
}



if(2===2) {
    console.log("A true statement");
}

myName = "Raunak";

// if(myName === window.myName) { // context window for browsers
//     console.log("A true statement");
// }