const student = {
  name: "Antor",
  1: 50,
  family: {
    title: "Chowdhury",
    // mother: {
    //   name: "Eva",
    //   age: 45,
    // },
  },
  "home-address": "Sirajgonj",
  marks: 90,
};

// console.log(student.family.mother.age); // will throw an error like this --> TypeError: Cannot read properties of undefined (reading 'age')

// with optional chian --> ?
console.log(student.family.mother?.age); // this doesn't break the code and return the output as undefined.
