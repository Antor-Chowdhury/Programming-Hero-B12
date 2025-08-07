let price = 25;
let comp_price = price;

price = 12;
comp_price = 15;

// console.log(price);
// console.log(comp_price);

const products = [25, 25, 25];
const comp_products = [];
// const comp_products = products;

//solution - 1
for (const product of products) {
  comp_products.push(product);
}

comp_products[0] = 15;
products[1] = 50;

// console.log(products);
// console.log(comp_products);

// Example-2

const numbers = [1, 2, 3, 4];

// solution type - 2
// const new_numbers = Array.from(numbers);

// solution type - 3
// const new_numbers = [].concat(numbers);

// solution type - 4
const new_numbers = [...numbers];

new_numbers.push(8);

console.log(numbers);
console.log(new_numbers);
