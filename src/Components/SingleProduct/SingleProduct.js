import React from "react";
import "./SingleProduct.css";

const singleProduct = ({ product }) => {
  const { id, img, name, price } = product;
  return (
    <div className="item-info">
      <img src={img} alt={name} />
      <h3>Item: {name}</h3>
      <p>ID: {id}</p>
      <h3>Price: {price}</h3>
      <button className="add-btn">
        Add to cart
      </button>
    </div>
  );
};

export default singleProduct;
