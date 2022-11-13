let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

let seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];

let multiplesOfSeven = sevenTimesTable.every(number=> number % 7 ===0);
console.log(multiplesOfSeven)

let multiplesOfSeventySeven = seventySevenTimesTable.every(number=> number % 77 === 0);
console.log(multiplesOfSeventySeven)

let rogue = seventySevenTimesTable.find(number => number % 77 !== 0  )
console.log(rogue)

let rogueIndex = seventySevenTimesTable.indexOf(rogue)
console.log(rogueIndex)