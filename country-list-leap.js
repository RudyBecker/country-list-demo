let countryList = [
  "Jamaica",
  "Panama",
  "CostaRica",
  "Peru",
  "Brazil",
  "United States",
];

// Insert Switzerland between Jamaica and Panama (2nd Position)
//Arrays are reference types in JavaScript, if you assign an array to a variable or pass an array to a function, it is the reference to the original array that is copied or passed, not the value of the array.
countryList.splice(1, 0, "Switzerland");
console.log(countryList);

//Remove Brazil from Array
//Identify the index of the target item. Use the index as the start element and remove one element
for (var i = 0; i < countryList.length; i++) {
  if (countryList[i] === "Brazil") {
    countryList.splice(i, 1);
  }
}
console.log(countryList);

//Sort countryList Array in Alphabetical Order
console.log(countryList.sort());

//Sort countryList Array in REVERSE Alphabetical Order
var reverseCountryListArray = countryList.sort(function (a, b) {
  if (a > b) return -1;
  else if (a < b) return 1;
  return 0;
});

console.log(reverseCountryListArray);
