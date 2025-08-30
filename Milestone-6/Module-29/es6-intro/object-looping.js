const numbers = [1, 2, 3, 4, 55, 5];

for (const num of numbers) {
  //   console.log(num);
}

const employee = {
  name: "Raja Rani",
  designation: "QA",
  salary: 20000,
  experience: 1,
  age: 22,
};

for (const key in employee) {
  const value = employee[key]; // will give the key value
  console.log(key, value);
}

// another way

const keys = Object.keys(employee);
console.log(keys);

for (const key of keys) {
  const value = employee[key];
  console.log(value);
}
