const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
// const name = prompt("What's your name? ");
// console.log(`Hi, I'm ${name}.`);

let num1 = prompt("Please enter the first number ");
num1 = parseInt(num1);

if (isNaN(num1)) {
  console.log("Number invaled");
}

let num2 = prompt("Please enter the secound number ");
num2 = parseInt(num2);

if (isNaN(num2)) {
  console.log("Number invaled");
}

let opt = prompt("Please choose the operation (+, -, /, *): ");

if (opt === "+" || opt === "-" || opt === "*" || opt === "/") {
  if (opt === "+") console.log(`${num1} + ${num2} = ${num1 + num2}`);
  if (opt === "-") console.log(`${num1} - ${num2} = ${num1 - num2}`);
  if (opt === "*") console.log(`${num1} * ${num2} = ${num1 * num2}`);
  if (opt === "/") console.log(`${num1} / ${num2} = ${num1 / num2}`);
} else console.log("opertaion invaled");
