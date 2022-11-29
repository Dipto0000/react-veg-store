import React from "react";

const Cart = ({ cart }) => {
  let name;
  for (const items of cart) {
    name = items.name;
  }
  return (
    <div>
      <h2>Cart here</h2>
      <p>Product: {name}</p>
    </div>
  );
};

export default Cart;
