const addNumberToLS = () => {
  const number = Math.ceil(Math.random() * 100);
  console.log(number);
  localStorage.setItem("number", number);
};

const setObjectToLS = () => {
  const customer = { name: "rohim", products: 3, price: 75 };

  const customerJSON = JSON.stringify(customer); // converts the objects into string

  localStorage.setItem("customer", customerJSON);
};

const readObjectFromLS = () => {
  const customerJSON = localStorage.getItem("customer");

  const customer = JSON.parse(customerJSON); // convert string to object

  console.log(customer);
  console.log(customer.name);
};

const getNumberFromLS = () => {
  const number = localStorage.getItem("number");
  console.log("form saved local storage", number);
};
