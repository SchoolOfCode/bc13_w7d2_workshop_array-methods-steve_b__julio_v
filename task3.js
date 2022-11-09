let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

const three = someNumbers.some((num) => num % 3 === 0);
const five = someNumbers.some((num) => num % 5 === 0);
const sixty = someNumbers.some((num) => num % 60 === 0);
const ninety = someNumbers.some((num) => num % 90 === 0);


console.log(three, five, sixty, ninety);