const numbers = [87, 8, 5, 91];
console.log(numbers);
console.log(...numbers);

// const max = Math.max(1121, 56, 94, 112, 514, 23);

const max = Math.max(...numbers);
// console.log(max);

// const first = [1, 2, 3, 4, 5];
// const second = first;
// second.push(6);
// console.log(first);

const first = [1, 2, 3, 4, 5];
const second = [...first];
const third = [0, ...first, 98, 19, 29];
second.push(6);
console.log(first);
// console.log(second);
// console.log(third);

const ages = [93, 22, 15];
const prices = [120, 44, 89];
const all = [...ages, 550, ...prices];
console.log(all);

const person = {
  name: "Antor",
  age: 24,
};

const employee = { designation: "dev", ...person };
console.log(employee);

const total = (a, b, c) => a + b + c;
const result = total(45, 65, 21);
const digits = [10, 20, 30];

console.log(total(...digits));
