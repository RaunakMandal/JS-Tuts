// Range: start is inclusive, end is exclusive as we go up to end-1 //

var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Slice
// console.log(nums.slice(1));


// Splice
// splice(start, count, value)
nums.splice(1, 3, "Hi");
// it will start at 1, go upto 2nd indx(3), change 1 to 3 as Hi
nums.splice();
console.log(nums);