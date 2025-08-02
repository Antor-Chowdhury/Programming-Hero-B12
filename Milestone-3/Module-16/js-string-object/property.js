const person = {
  name: "sodor uddin",
  age: 25,
  profession: "Developer",
  salary: 30000,
  married: true,
  "fav places": ["bandorban", "saintmartion", "kuakata"], // can't access with dot notation but can be done with []
};

// console.log(person);

// dot notation
// console.log(person.profession);
const income = person.salary;
// console.log(income);

// third bracket
console.log(person["age"]);
const boyos = person["age"];
console.log(boyos);

console.log(person["fav places"]);

// another way of calling object
const keyName = "profession";
console.log(keyName);
