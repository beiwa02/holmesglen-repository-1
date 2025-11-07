// Q2.1: Create an object
const myMovie = {
  title: "The Longest Day",
  year: 1964,
}
console.log(myMovie);

// Q2.2: Add properties
myMovie.rating = 5;
myMovie.summary = "World War II movie about Normandy landings";
console.log(myMovie);

// Q2.3: Modify properties
myMovie.rating = 4;
myMovie.year = 1962;
console.log(myMovie);

// Q2.4: Delete property
delete myMovie.summary;
console.log(myMovie);