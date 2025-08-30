// ### 1. Write a program where you declare a variable using let inside a block {} and try to access it outside the block. What happens?

function add(num1, num2) {
  let result = num1 + num2;
}
console.log(result); // ReferenceError: result is not defined

// ### 2. Use const to declare an array. Try pushing new elements into it. Does it work? Why or why not?

const num = [1, 2, 4, 5];
num.push(6);
console.log(num);

// ### 3. Convert this function into an arrow function:

function multiply(a, b) {
  return a * b;
}

const multiply = (a, b) => a * b;
console.log(multiply(2, 3));

// ### 4. Write an arrow function that takes a number and returns "Even" or "Odd".

const input = (num) => {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};
console.log(input(4));
console.log(input(5));

// ### 5. Use map() with an arrow function to square each number in an array [1, 2, 3, 4].

const numbers = [1, 2, 3, 4];
const squares = numbers.map((num) => num * num);
console.log(squares); // [1, 4, 9, 16]

// ### 6. Create a template literal that outputs:
// "Hello, my name is Alice and I am 25 years old."
// (Use variables name and age.)

const name = "Alice";
const age = 25;

console.log(`Hello, my name is${name} and I am ${age} years old.`);

// ### 7. Write a template literal that prints a multi-line string with 3 lines of text.

console.log(`hello, it's me
    an aspiring student
    who's learning Web-development`);

// ### 8. Given an array [10, 20, 30, 40], use destructuring to store the first two values into variables a and b.

const array = [10, 20, 30, 40];

const [a, b] = array;
console.log(a);
console.log(b);

// ### 9. Given an object:
// const user = { id: 1, username: "coder123", email: "test@mail.com" };
// Use destructuring to extract username and email.

const user = { id: 1, username: "coder123", email: "test@mail.com" };
const { username, email } = user;
console.log(username);
console.log(email);

// ### 10. Merge two arrays [1, 2, 3] and [4, 5, 6] into a new array using the spread operator.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const newArray = [...arr1, ...arr2];
console.log(newArray);
