const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

// console.log("Explore API");

// const person = {
//   name: "selim",
//   fruit: "dalim",
//   dish: "halim",
//   friends: ["alim", "kolim", "lamim"],
//   isRich: false,
//   money: 34000,
// };

// console.log(person, typeof person);

// // JSON --> JS object with Notation
// // JSON.stringify --> object to JSON
// // JSON.parse -->  JSON to Object

// const personJSON = JSON.stringify(person);
// console.log(personJSON, typeof personJSON);

// const parseJSON = JSON.parse(personJSON);
// console.log(parseJSON, typeof parseJSON);
