let animals = [
    "baboon",
    "kangaroo",
    "rhino",
    "frog",
    "beaver",
    "horse",
    "basalisk",
  ];
  //filter animal that start withn letter b
let bListAnimals = animals.filter(
  (animal)=>{
    return animal.startsWith("b");
  }
)
console.log(bListAnimals);