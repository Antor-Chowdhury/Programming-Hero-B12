const numbers = [45, 65, 23, 98, 19];

// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   console.log(number);
// }

for (const number of numbers) {
  //   console.log(number);
}

const products = [
  { id: 1, name: "xioami phone one", price: 19000 },
  { id: 2, name: "iphone", price: 20000 },
  { id: 3, name: "Macbook Air", price: 119000 },
  { id: 4, name: "lenevo yoga laptop", price: 19000 },
  { id: 5, name: "Dell inspiron laptop", price: 19000 },
  { id: 6, name: "Samsung phone note 7", price: 19000 },
  { id: 7, name: "Nokia old", price: 19000 },
  { id: 8, name: "Phone one", price: 19000 },
];

// for (const product of products) {
//   console.log(product);
// }

function matchedProducts(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}

const result = matchedProducts(products, "Phone");
const result1 = matchedProducts(products, "laptop");
console.log(result);
console.log(result1);
