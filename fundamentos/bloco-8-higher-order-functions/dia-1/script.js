const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

const calculator = (func, num1, num2) => func(num1, num2);

console.log(calculator(mult, 10, 15));