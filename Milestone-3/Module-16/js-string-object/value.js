const person = {
  name: "sodor uddin",
  age: 25,
  profession: "Developer",
  salary: 30000,
  married: true,
  "fav places": ["bandorban", "saintmartion", "kuakata"],
};

person.salary = 45000;
person["age"] = 27;
person["fav places"] = ["maldives", "bali", "pataya"];
console.log(person);

const propName = "profession";
person[propName] = "DevOps";
console.log(person);
