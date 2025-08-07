const numbers = [1, 2, 43, 54, 4];
const players = [{}, {}, {}];
const employees = [
  { name: "Ashik", designation: "Content Writer", salary: 25000 },
  { name: "Atik", designation: "Developer", salary: 30000 },
  { name: "Abdul Rahim", designation: "Digital Marketer", salary: 20000 },
  { name: "Asifa", designation: "Web Dev", salary: 30000 },
];

employees[0].name = "Ashraf";
// console.log(employees[0]);
// console.log(employees[1].salary);

for (const employee of employees) {
  console.log(employee.name, employee.salary, employee.designation);
}
