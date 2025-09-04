const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1") // promise of response
    .then((response) => response.json()) // promise of json data
    .then((data) => console.log(data));
};

const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayPost(data);
    });
};

const displayPost = (posts) => {
  posts.forEach((post) => {
    console.log(post);
  });
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
