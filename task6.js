// 6a.

const broomCupboard = [2, 4, 1, 3, 7, 5, 8, 6, 10, 9, 0];

const students = ["Cedric Diggory", "Padma Patil", "Lucius Malfoy", "Seamus Finnigan", "Lavender Brown", "Luna Lovegood", "Gregory Goyle"];

broomCupboard.splice(broomCupboard.length - 1, 1);
broomCupboard.sort((a, b) => a - b);
console.log(broomCupboard);

// 6b.

const potions = [
	{ name: "polyjuice potion", shelf: 2 },
	{ name: "draught of living death", shelf: 4 },
	{ name: "pepperup potion", shelf: 1 },
	{ name: "veritaserum", shelf: 3 },
];

potions.sort((a, b) => b.shelf - a.shelf);
console.log(potions);

// 6c.

const studentsList = ["Cedric Diggory", "Padma Patil", "Lucius Malfoy", "Seamus Finnigan", "Lavender Brown", "Luna Lovegood", "Gregory Goyle"];

// splits each name into first and last name strings, removing the space => ["Cedric", "Diggory"]
// selects the value at index 1 (last name) => "Diggory"
// compares each pair of last name strings using localeCompare()...
// ...which returns:
// - 1 if referenceStr occurs before compareStr
// 1 if referenceStr occurs after compareStr
// or 0 if equivilent

studentsList.sort((studentA, student2) => {
	const [_firstName1, lastName1] = studentA.split(" ");
	const [_firstName2, lastName2] = student2.split(" ");
	return lastName1.localeCompare(lastName2);
});
