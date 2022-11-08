let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

let seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];

//4a Using the .every() method, check that every number in the sevenTimesTable array is a multiple of 7.
let seven = sevenTimesTable.every((number) => {
  return number % 7 === 0;
});
console.log(seven);
//4b Check if every number in the seventySevenTimesTable array is a multiple of 77 using the .every() method.
let seventySeven = seventySevenTimesTable.every((number) => {
  return number % 77 === 0;
});
console.log(seventySeven);
//4c Your worst fears have been confirmed. The result of step 4b showed you that there is a rogue value in your seventySevenTimesTable array. Use the .find() method to identify which number it is.
let rogue = seventySevenTimesTable.find((number) => {
  return number % 77 !== 0;
});
console.log(rogue);
//4d. Now that you know which number is incorrect, use the .findIndex() method to identify the index of the number.
let rogueIndex = seventySevenTimesTable.findIndex((number) => {
  return number % 77 !== 0;
});
console.log(rogueIndex);
