const { price, quantity } = {
  name: "shirt",
  price: 500,
  quantity: 7,
};
// console.log(price, quantity);

// const discount = (product.price * 20) / 100;
// const yourPay = product.price - discount;
// const vatAmount = (product.price * 7) / 100;

// const totalAmount = yourPay + vatAmount;

// const price = product.price;

// const discount = (product.price * 20) / 100;
// const yourPay = product.price - discount;
// const vatAmount = (product.price * 7) / 100;

// const totalAmount = yourPay + vatAmount;

const discount = (price * 20) / 100;
const yourPay = price - discount;
const vatAmount = (price * 7) / 100;

const totalAmount = yourPay + vatAmount;

const device = { name: "phone", brand: "samsung", price: 20000 };
const { brand } = device;

// ------------ Array -------------------

const numbers = [25, 88, 100, 23];
const [first, second] = numbers;

const [math, physics] = [90, 99];
console.log(physics);
