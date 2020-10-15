// paste code into web browser console to see the action
function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

let result = calculator(2, 3, multiply);

console.log(result);

debugger;
calculator(2, 3, multiply);
