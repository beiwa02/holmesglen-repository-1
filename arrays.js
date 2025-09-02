// Q1.1: Create array, log to console
const unorderedArray = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20]; // Unordered array of numbers
console.log(unorderedArray); // Logs above array to the console

// Q1.2: Sort array in ascending order
const ascendingArray = unorderedArray.sort(function(a, b){return a - b}); // New array; takes unorderedArray and sorts the numbers in ascending order
console.log(ascendingArray); // Logs above array to the console