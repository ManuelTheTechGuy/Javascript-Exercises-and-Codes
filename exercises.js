// Ex.1: Word Sorter
const msg = "webmasterinjavascript";

const alpha = (str) => {
  return str.split("").sort().join(" ");
};
console.log(alpha(msg));

// Ex.2: Vowel Counter
const vowels = ["a", "e", "i", "o", "u"];
const word = "The quick brown fox";
let vowelCounts = 0;

const vowelCounter = () => {
  for (let index = 0; index < word.trim().length; index++) {
    vowels.forEach((vowel) => {
      if (word[index] === vowel) vowelCounts++;
    });
  }
  return `Vowel Counts: ${vowelCounts}`;
};

console.log(vowelCounter());

// Ex.3: Uppercase the first letter of each word

const capitalizeFirstLetter = (str) => {
  const splitedWord = str.split(" ");
  const newArray = [];
  for (let index = 0; index < splitedWord.length; index++) {
    newArray.push(
      splitedWord[index][0].toUpperCase() + splitedWord[index].slice(1)
    );
  }
  return newArray.join(" ");
};

console.log(capitalizeFirstLetter("The quick fast brown fox"));

// Ex.4: Get Current Date
const today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yy = today.getFullYear();

if (dd < 10 && mm < 10) {
  dd = "0" + dd;
  mm = "0" + mm;
}

const td = dd + "-" + mm + "-" + yy;
console.log(td);

// Ex.4: Calculate Multiplication & Division of Two Numbers
const multiplyTwoNumbers = (a, b) => {
  return a * b;
};
const divideTwoNumbers = (a, b) => {
  return a / b;
};

console.log(multiplyTwoNumbers(5, 8));
console.log(divideTwoNumbers(5, 8));

// Ex.5: Which Number Is Larger?
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let max;

rl.question("Enter the first number: ", (num1) => {
  rl.question("Enter the second number: ", (num2) => {
    if (num1 > num2) max = num1;
    else if (num1 === num2) {
      console.log("Both numbers are equal!");
      process.exit();
    } else {
      max = num2;
    }
    console.log(`The max number between ${num1} and ${num2} is ${max}`);
    rl.close();
  });
});

console.log("----------------");

// Ex.6: Return the sign of the product of 3 numbers (+ or -)
const threeNumbers = (num1, num2, num3) => {
  const product = num1 * num2 * num3;
  if (product < 0) return "-";
  else {
    return "+";
  }
};

console.log(threeNumbers(-2, 4, 5));

// Ex.7: Is Array or Not?
const isArray = (input) => {
  if (toString.call(input) === "[object Array]") return true;
  else {
    return false;
  }
};

console.log(isArray([1, 2, 3, 4]));

// Ex.8: Clone an Array
const cloneArray = (array) => {
  return array.slice(0);
};

console.log(cloneArray([1, 2, 3, 4, 5]));

// Ex.8: Join Array Into a String
const joinArray = (array) => {
  const newArrayByComma = array.join(",");
  const newArrayByPlus = array.join("+");
  return `Joined by comma: ${newArrayByComma}\nJoined by plus: ${newArrayByPlus}`;
};

console.log(joinArray(["Red", "Green", "Blue"]));

// Ex.9: Sort an Array
const sortArray = (array) => {
  const sorted = array.sort();
  return sorted;
};

console.log(sortArray([3, 8, 7, 6, 5, -4, 3, 2, 1]));