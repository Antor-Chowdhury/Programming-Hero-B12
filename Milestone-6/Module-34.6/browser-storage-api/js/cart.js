const handleAddProduct = () => {
  const productEl = document.getElementById("product");
  const quantityEl = document.getElementById("quantity");
  const product = productEl.value;
  const quantity = quantityEl.value;

  //   console.log("product add", product, quantity);

  displayProduct(product, quantity);
  addProductToCart(product, quantity);

  productEl.value = "";
  quantityEl.value = "";
};

const getCart = () => {
  const cart = {};

  return cart;
};

const addProductToCart = (product, quantity) => {
  const cart = getCart();
  cart[product] = quantity;
  console.log("cart", cart);
};

const displayProduct = (product, quantity) => {
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;

  //   get the ul

  const ul = document.getElementById("products-container");
  ul.appendChild(li);
};
