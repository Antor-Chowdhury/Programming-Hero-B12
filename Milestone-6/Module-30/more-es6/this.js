class Vehicle {
  #tin;
  constructor(type, brand, price) {
    this.type = type;
    this.brand = brand;
    this.price = price;
    this.#tin = "124@#W124H";
  }

  getTin() {
    return this.#tin; // can access inside but not accessible from outside.
  }

  getThis() {
    console.log(this);
  }

  getPrice() {
    return this.price;
  }
}

const car1 = new Vehicle("car", "Honda", 20000);

const car2 = new Vehicle("car", "Toyota", 323232);

// car1.getThis();
console.log(car1);
// console.log(car1.#tin);
// console.log(car1.getPrice());
// console.log(car2.getPrice());

const student = {
  name: "Rahul",
  score: 10000,
  getScore: function () {
    console.log(this);
  },
  getScoreArrow: () => {
    console.log(this);
  },
};
// student.getScore();
// student.getScoreArrow();
// console.log("ultimate this", this);
