const nayok = {
  name: "Sakib Khan",
  id: 121,
  address: "movie cinema",
  isSingle: true,
  friends: ["Apu", "Razz", "Salman", "aamir"],
  movies: [
    { name: "no. 1", year: 2015 },
    { name: "king khan", year: 2018 },
  ],
  act: function () {
    console.log("Acting like Tom Cruise!!");
  },
  car: {
    brand: "tesla",
    price: 500000000,
    made: 2025,
    manufacturer: {
      name: "Tesla",
      ceo: "Elon Mask",
      country: "USA",
    },
  },
};

nayok.act();
