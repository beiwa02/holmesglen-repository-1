// Q1.1: Create array, log to console
const unorderedArray = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20]; // Unordered array of numbers
console.log(unorderedArray); // Logs above array to the console

// Q1.2: Sort array in ascending order
const ascendingArray = unorderedArray.sort(function(a, b){return a - b}); // New array; takes unorderedArray and sorts the numbers in ascending order
console.log(ascendingArray); // Logs above array to the console

// Q1.3: Add the 19, 23, 30 to the array; keep sorted or sort again
ascendingArray.push(19, 23, 30); // Add the numbers
ascendingArray.sort(function(a, b){return a - b}); // Reorder the array
console.log(ascendingArray); // Logs above array to the console

// Q1.4: Remove 8, 31 from the array; keep order
ascendingArray.splice(2,1); // Removes 1 item starting at index 2 (removes 8)
ascendingArray.splice(10,1); // Removes 1 item starting at index 10 (removes 31)
console.log(ascendingArray); // Logs above array to the console