import React from "react";
import "./Bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  //   console.log(bottle);

  const { img, name, price, stock } = bottle;

  return (
    <div className="card">
      <img src={img} alt="" />
      <h3>Name: {name}</h3>
      <h4>Price: ${price}</h4>
      <p>{stock} Remaining</p>
      <button
        onClick={() => {
          handleAddToCart(bottle);
        }}
      >
        Buy Now
      </button>
    </div>
  );
};

export default Bottle;
