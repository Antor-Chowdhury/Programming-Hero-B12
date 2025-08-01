const school = "RAJ UK Uttara Model School";
console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

// uppercase: ABCD EFG
// lowercase: abcd efg

const subject = "Chemistry";
const book = "ChemIsTry";

if (subject.toLowerCase() === book.toLowerCase()) {
  console.log("same thing");
} else {
  console.log("not same thing");
}

const drink = " water";
const liquid = "    water   ";

if (drink.trim() === liquid.trim()) {
  console.log("same drinkable item");
} else {
  console.log("not same drinkable item");
}
