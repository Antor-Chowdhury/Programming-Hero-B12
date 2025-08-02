const college = {
  name: "NDC",
  class: ["11", "12"],
  events: ["science fair", "bijoy dibos", "21 Feb"],
  unique: {
    color: "blue",
    result: {
      gpa: 5,
      merit: "top",
    },
  },
};

// console.log(college);
// console.log(college.unique.color);
// console.log(college.unique.result.gpa);

// college.unique.result.merit = "top top top most";
// console.log(college.unique.result.merit);

// accessing events value
console.log(college.events[0]); // accessing through index v

college.events[1] = "16 December";
console.log(college.events[1]);

// deleting a key

delete college.class;
console.log(college);
