// Q1.5 Sequential search
function sequentialSearch(array, query) { // Takes an array and a query value
  let found = -1; // Index of query, defaults to -1 (not found)
  console.log("Looking for " + query + "...");
  for (i = 0; i < array.length; i++) { // Search from start to finish
    if (array[i] == query) { // Compare a value in the array to the query
      found = i; // Stores query's index
      break;
    } else {
      found = -1;
    }
  }
  if (found != -1) { // If the number has been found
    console.log("Found " + query + ". Index: " + found); // Inform user
  } else { // Otherwise
    console.log("Couldn't find " + query + ". Index: " + found); // Inform user
  }
  return found;
}

const numberArray = [3, 17, 23, 32, 46, 50, 54, 61, 88, 94];

sequentialSearch(numberArray, 44); // Looking for 44 (failure)
sequentialSearch(numberArray, 54); // Looking for 54 (success)

// Q1.6 Binary search
function binarySearch(array, query) { // Takes an array and a query value
  let found = -1; // Index of the query, defaults to -1 (not found)
  console.log("Looking for " + query + "...");
  let lowerIndex = 0;
  let upperIndex = (array.length - 1);
  let midIndex = Math.round((upperIndex - lowerIndex) / 2); // Mid point to compare query to

  while (lowerIndex <= upperIndex) {
    midIndex = Math.round(((upperIndex + lowerIndex) / 2)); // Recalculates after each comparison
    if (query == array[midIndex]) {
      found = midIndex; // Index of query
      console.log("Found " + query + ". Index: " + found);
      return found;
    } else if (query > array[midIndex]) {
      lowerIndex = midIndex + 1; // Refocus on upper half of range
    } else {
      upperIndex = midIndex - 1; // Refocus on lower half of range
    }    
  }
  if (found == -1) {
    console.log("Couldn't find " + query + ". Index: " + found);
    return found;
  }
}

const numberArray2 = [3, 17, 23, 32, 46, 50, 54, 61, 88, 94]; // Array of 10 numbers

binarySearch(numberArray2, 24); // Looking for 24 (failure)
binarySearch(numberArray2, 88); // Looking for 88 (success)