const multiplyTwoNumbers = () => {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const result = num1 * num2;
  document.getElementById("result").innerText = result;
};
const divideTwoNumbers = () => {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const result = num1 / num2;
  document.getElementById("result").innerText = result;
};


const displayMsg = () => {
  console.log('Hello World');
}

// setTimeout(displayMsg, 5000);
const timerId2 = setInterval(displayMsg, 1000);
console.log((timerId2._onTimeout));
