import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SingleProduct.css";

const singleProduct = ({ product, handleClick }) => {
  const { id, img, name, price } = product;
  return (
    <div className="item-info">
      <img src={img} alt={name} />
      <h3>Item: {name}</h3>
      <p>ID: {id}</p>
      <h3>Price: {price}</h3>
      <button onClick={()=>handleClick(product)} className="add-btn">
        Add to cart
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
     
    </div>
  );
};

export default singleProduct;
