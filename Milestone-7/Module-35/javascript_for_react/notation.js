const person = {
  name: "hero alom",
  age: 10,
  friends: ["korim"],
  salary: 100,
  10: "secret code",
  "hero-boss": "gaddgad",
};

const heroName = person["name"]; // need to be in a string
console.log(heroName);

const heroSecret = person["10"];
console.log(heroSecret);
