import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);
  const handleClick = () =>{
    setCount(count+1);
  }
  return (
    <div>
      <h1>My veg store</h1>
      <div className="product-container">
        <div className="info-container">
          {products.map((product) => (
            <SingleProduct product={product} key={product.id}></SingleProduct>
          ))}
        </div>
        <div className="cart-container">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Products;
