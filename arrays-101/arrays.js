// 2.0 create an array with no elements inside of it, log the array
let numbers = [];
console.log("2.0:", numbers);

// 2.1 use array.push to add a number to the array, log the array
numbers.push(3);
console.log("2.1:", numbers);

// 2.2 create a new array with a number already inside of it, log the array
let moreNumbers = [7];
console.log("2.2:", moreNumbers);

// 2.3 use array.pop to remove an element from the back of the array
numbers.pop();
console.log("2.3:", numbers);

// 2.4 push two more numbers into your array
numbers.push(4);
numbers.push(9);
console.log("2.4:", numbers);

// 2.5 use spread syntax to combine arrays from above problems, log the results
let combined = [...numbers, ...moreNumbers];
console.log("2.5:", combined);

// 2.6 use array.find to locate one of the elements in your array, log the located result
let found = combined.find(num => num === 4);
console.log("2.6 Found:", found);

// 2.7 use array.every to determine if every single number is above "5", log the result
let allAbove5 = combined.every(num => num > 5);
console.log("2.7 Every >5:", allAbove5);

// 2.8 use array.filter to remove any numbers smaller than 5, log the result
let filtered = combined.filter(num => num >= 5);
console.log("2.8 Filtered ≥5:", filtered);

// 2.9 use array.sort to sort the items from smallest to largest
let sorted = [...combined].sort((a, b) => a - b);
console.log("2.9 Sorted:", sorted);

// 2.91 use array.reverse to reverse the items so that they are now largest to smallest
let reversed = [...sorted].reverse();
console.log("2.91 Reversed:", reversed);

// 2.92 use array.reduce to sum up the entire list of numbers in the array
let sum = combined.reduce((acc, curr) => acc + curr, 0);
console.log("2.92 Sum:", sum);

// 2.93 use array.map to scale each number in the array up by a factor of 10
let scaled = combined.map(num => num * 10);
console.log("2.93 Scaled x10:", scaled);
