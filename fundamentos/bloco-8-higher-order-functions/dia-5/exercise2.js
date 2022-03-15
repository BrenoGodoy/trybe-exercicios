const sum = (...numbers) => numbers.reduce((acc, number) => {
    return acc + number;
});

console.log(sum(10, 10, 10, 10, 10));