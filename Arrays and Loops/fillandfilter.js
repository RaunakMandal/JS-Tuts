// Fill //

var test = [2, 4, 6, 8, 10];

/* fill (val, start, end)
if no first given, start from 0
if no end given, goes up to end */

console.log(test.fill("Nice Fill"));


// Filter //

const nums = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 21];
const res = nums.filter((num)=> num%2!=0); // Filtered out the method

console.log(res);