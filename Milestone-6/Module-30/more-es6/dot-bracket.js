const student = {
  name: "Rafid",
  1: 50,
  "home-address": "dhaka",
  marks: 90,
};

// dot notation
const studentName = student.name;

// bracket notation
const studentOne = student["1"];
console.log(studentOne);

console.log(student["home-address"]);

for (const key in student) {
  const value = student[key];
}

const propName = "marks";
console.log(student[propName]);
