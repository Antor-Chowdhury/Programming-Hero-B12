// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// ---------------------- CODE --------------------------

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(arr) {
  let totalPrice = 0;
  let average = 0;
  let totalPhone = arr.length;

  for (const item of arr) {
    totalPrice = totalPrice + item.price;
  }
  console.log("Total cost of phones:", totalPrice);
  average = totalPrice / totalPhone;
  return average;
}

const averagePrice = findAveragePhonePrice(phones);
console.log("Average cost of all  phones:", averagePrice.toFixed(2));
