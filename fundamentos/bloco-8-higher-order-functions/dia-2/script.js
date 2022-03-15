const numbers = [19, 21, 30, 3, 45, 22, 15];

const teste = (number) => number % 3 === 0 && number % 5 === 0;

console.log(numbers.find(teste));
