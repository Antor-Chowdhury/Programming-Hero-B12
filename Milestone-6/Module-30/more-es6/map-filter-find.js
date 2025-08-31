const students = [
  { id: 1, name: "abul", marks: 50 },
  { id: 2, name: "kabul", marks: 85 },
  { id: 3, name: "dabul", marks: 75 },
  { id: 4, name: "babul", marks: 90 },
];

const names = students.map((student) => student.name);

const goodStudents = students.filter((student) => student.marks > 80);

const goodStudent = students.find((student) => student.marks > 80);

console.log(names);
console.log(goodStudents);
console.log(goodStudent);
