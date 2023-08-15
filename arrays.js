// // Array methods
// const myFavouriteFruits = new Array("Banana", "Apple", "Kiwi");
// myFavouriteFruits.push("Cherry"); // Adds an element to the last on the array
// myFavouriteFruits.pop(); // Removes the last element in the array
// myFavouriteFruits.shift(); // Removes the first element in the array
// myFavouriteFruits.unshift("Avocado"); // Adds an element to the first in the array
// console.log(myFavouriteFruits.indexOf("Apple"));
// console.log(myFavouriteFruits);

// const someFruits = [
//   "Strawberry",
//   "Pineapple",
//   "Pear",
//   "Orange",
//   "PawPaw",
//   "Watermelon",
//   "Cucumber",
// ];

// console.log(someFruits.slice(0, 4));
// console.log(someFruits);
// console.log(someFruits.splice(0, 2, "Tomato", "Kiwi"));
// console.log(someFruits);
// console.log(someFruits.splice(0, 1));
// console.log(someFruits);

// const someFruitsString = someFruits.slice(0, 3).reverse();
// console.log(someFruitsString);
// console.log(someFruits.join(", "));

// const capitalizeString = someFruits.map((fruit) => fruit.toUpperCase());
// console.log(capitalizeString);

// const numbers = [1, 2, 3, 4, 5, 6];
// const squaredNumbers = numbers.map((n) => n * n);

// console.log(squaredNumbers);

// const higherOrderFunctions = (callback) => {
//   const string = "HOF's are really cool!";
//   callback(string);
// };

// higherOrderFunctions(console.log);

// // FOREACH
// const namesOfPeople = ["oluchi", "amaka", "jude", "ada"];
// const titleCasedName = [];

// const capitalizedName = namesOfPeople.forEach((name) => {
//   const titleCased = name[0].toLocaleUpperCase() + name.slice(1);
//   titleCasedName.push(titleCased);
// });

// console.log(titleCasedName);

// const countries = [
//   "Netherlands",
//   "Norway",
//   "Myanmar",
//   "Georgia",
//   "UK",
//   "Uruguay",
//   "New Zealand",
// ];

// // FILTER
// const countriesStartingWithLetter = countries.filter(
//   (country) => country[0] === "g".toUpperCase()
// );
// console.log(countriesStartingWithLetter);

// // SORT
// const famousBirthYears = [1990, 2001, 1989, 2023, 2005, 1993, 2000];
// famousBirthYears.sort((a, b) => b - a);
// console.log(famousBirthYears);

// const rc = countries.reduce((a, b) => a + ", " + b);
// console.log(rc);

// const scores = [10, 25, 15, 28, 37, 40];

// const totalScore = scores.reduce((prev, next) => prev + next);
// console.log(totalScore);


// const greaterThan20 = scores.every((score) => score > 9);
// console.log(greaterThan20);

// const containsAtLeastALetter = countries.some((country) => country.includes('Geo'));
// console.log(containsAtLeastALetter);

// const p = countries.findIndex((country) => country.startsWith('G'));

// console.log(p);

// const ten = scores.find((sc) => sc > 10);
// console.log(ten);
