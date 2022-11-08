let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

//using some find out if any of the numbers are multiples of the following numbers: 3, 5, 60, 90

// let three = someNumbers.some((number) => {
//   return number % 3 === 0;
// });
// console.log(three);
// let five = someNumbers.some((number) => {
//   return number % 5 === 0;
// });
// console.log(five);
// let sixty = someNumbers.some((number) => {
//   return number % 60 === 0;
// });
// console.log(sixty);
// let ninety = someNumbers.some((number) => {
//   return number % 90 === 0;
// });
// console.log(ninety);


// using a for each method I need to declare a Array of numbers to check against
let multiplesNum = [3, 5, 60, 90]
let multiples = multiplesNum.forEach((number) => {
    let result = someNumbers.some((num) => {
        return num % number === 0;
    });
    console.log(result);
});