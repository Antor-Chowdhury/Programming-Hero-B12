const mobiles = [
  { name: "Samsung", price: 70000, camera: "100mp", color: "black" },
  { name: "Xoami", price: 20000, camera: "10mp", color: "black" },
  { name: "Oppo", price: 35000, camera: "12mp", color: "black" },
  { name: "Iphone", price: 100000, camera: "50mp", color: "black" },
  { name: "Walton", price: 19000, camera: "10mp", color: "black" },
  { name: "HTC", price: 30000, camera: "100mp", color: "black" },
];

// --------- for cheap phone -----------

function getCheapestPhone(phones) {
  //   console.log(phones);
  let min = phones[0];

  for (const phone of phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min;
}

const cheap = getCheapestPhone(mobiles);
console.log("Cheapest phone is:", cheap);

// ---------- for expensive phone -------

function getExpensivePhone(phones) {
  let max = phones[0];

  for (const phone of phones) {
    if (phone.price > max.price) {
      max = phone;
    }
  }
  return max;
}

const expensive = getExpensivePhone(mobiles);
console.log("Expensive phone is:", expensive);
