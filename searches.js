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