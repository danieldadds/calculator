// variables

let userDisplay;
let prevNum = "";
let operator;
let numberOne;
let numberTwo;

let tempArray = [];

// query selectors and buttons

// console.log(parseInt(numberOne, 10));

let display = document.getElementById("display");

document.getElementById("one").addEventListener("click", function () {
  prevNum = prevNum + "1";
  console.log(prevNum);
  display.innerText = prevNum;
});

document.getElementById("two").addEventListener("click", function () {
  prevNum = prevNum + "2";
  console.log(prevNum);
  display.innerText = prevNum;
});

document.getElementById("three").addEventListener("click", function () {
  prevNum = prevNum + "3";
  console.log(prevNum);
  display.innerText = prevNum;
});

document.getElementById("four").addEventListener("click", function () {
  prevNum = prevNum + "4";
  console.log(prevNum);
  display.innerText = prevNum;
});

document.getElementById("five").addEventListener("click", function () {
  prevNum = prevNum + "5";
  console.log(prevNum);
  display.innerText = prevNum;
});

document.getElementById("six").addEventListener("click", function () {
  prevNum = prevNum + "6";
  console.log(prevNum);
  display.innerText = prevNum;
});

document.getElementById("seven").addEventListener("click", function () {
  prevNum = prevNum + "7";
  console.log(prevNum);
  display.innerText = prevNum;
});

document.getElementById("eight").addEventListener("click", function () {
  prevNum = prevNum + "8";
  console.log(prevNum);
  display.innerText = prevNum;
});

document.getElementById("nine").addEventListener("click", function () {
  prevNum = prevNum + "9";
  console.log(prevNum);
  display.innerText = prevNum;
});

document.getElementById("zero").addEventListener("click", function () {
  prevNum = prevNum + "0";
  console.log(prevNum);
  display.innerText = prevNum;
});

// operators

document.getElementById("add").addEventListener("click", function () {
  tempArray.push(prevNum);
  prevNum = "";
  console.log(tempArray);
  tempArray.push("add");
});

document.getElementById("multiply").addEventListener("click", function () {
  tempArray.push(prevNum);
  prevNum = "";
  console.log(tempArray);
  tempArray.push("multiply");
});

document.getElementById("subtract").addEventListener("click", function () {
  tempArray.push(prevNum);
  prevNum = "";
  console.log(tempArray);
  tempArray.push("subtract");
});

document.getElementById("divide").addEventListener("click", function () {
  tempArray.push(prevNum);
  prevNum = "";
  console.log(tempArray);
  tempArray.push("divide");
});

document.getElementById("clear").addEventListener("click", function () {
  tempArray = [];
  prevNum = "";
  display.innerText = "0";
});

// equals functionality

document.getElementById("equals").addEventListener("click", function () {
  tempArray.push(prevNum);

  console.log(tempArray);

  numberOne = tempArray[0];
  operator = tempArray[1];
  numberTwo = tempArray[2];

  numberOne = parseInt(numberOne, 10);
  numberTwo = parseInt(numberTwo, 10);

  userDisplay = theMath(numberOne, numberTwo, operator);

  display.innerText = userDisplay;
  console.log(userDisplay);
  tempArray = [];
  prevNum = userDisplay;
});

// operators

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function theMath(num1, num2, operator) {
  switch (operator) {
    case "add":
      return add(num1, num2);
      break;
    case "subtract":
      return subtract(num1, num2);
      break;
    case "multiply":
      return multiply(num1, num2);
      break;
    case "divide":
      return divide(num1, num2);
      break;
  }
}
