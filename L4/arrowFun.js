function isEven(element) {
    // if(element % 2 === 0) {
    //     return true;
    // }
    // return false;

    return element % 2 === 0;
}

var isEven2 = (element) => {
    return element % 2 === 0;
};

console.log(isEven2(20));

var res = [2, 4, 6, 8, 10].every(isEven2)  // goes to every element \\\ also the is even is reference
console.log(res); // if all passes then true, if one fails then false



// Call back

var result = [2, 4, 6, 8, 10].every((e) => (e%2===0));
console.log(result);