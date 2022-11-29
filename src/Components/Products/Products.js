import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);
  const handleClick = (product) =>{
    console.log(product);
    const newcart = [...cart, product]
    setCart(newcart);
  }
  return (
    <div>
      <h1>My veg store</h1>
      <div className="product-container">
        <div className="info-container">
          {products.map((product) => (
            <SingleProduct 
            product={product} 
            key={product.id}
            handleClick ={handleClick}
            >
            </SingleProduct>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart = {cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Products;
