// const friends = ["Hero Alom", "Hena", "BD"];

// // const element1 = friends[0];

// // const element2 = friends[1];

// // const element3 = friends[2];

// const [element1, element2, element3] = friends;

// console.log(element1, element2, element3);

const person = {
  name: "Hero Alam",
  age: 24,
  friends: ["bd", "test"],
  country: "bangladesh",
};

const { name, age, country, friends } = person;
console.log(name);
console.log(country);
