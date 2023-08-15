// IIFE
(function () {
  console.log("IIFE function");
})();

const anon = function () {
  return "I am an anonymous function";
};
console.log(anon());

// Dice Simulator
const diceSim = (die1, die2) => {
  die1 = Math.floor(Math.random() * 6) + 1;
  die2 = Math.floor(Math.random() * 6) + 1;
  if (die1 === 6 && die2 === 6) {
    console.log("DOUBLE SIX!!!");
  }

  console.log(`${die1} ${die2}`);
};
setTimeout(diceSim, 1000);
console.log("Rolling : ");
