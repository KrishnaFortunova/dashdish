import { React, createContext, useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import './FoodAmount.css';

function FoodAmount() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='container1'>
      <div className='container-title'>
        <h1> Menu </h1>
      </div>

      <div className='main-content'>
        <div className='main-text'>
          <div className='main-title'>
            <h2> Indian Cuisine </h2>
            <h3> Indian Curry </h3>
            <p> Curry is a dish with a sauce seasoned with spices, mainly associated with South Asian cuisine. In southern India, leaves from the curry tree may be included. </p>
          </div>
        </div>
        <div className="image-container">
          <img src={require("./images/food1.png")} alt="food Image" />
        </div>
      </div>

      <div className="quantity-container">
        <button className="quantity-button" onClick={decreaseQuantity}>-</button>
        <input type="number" value={quantity} readOnly style={{ width: '30px' }} />
        <button className="quantity-button" onClick={increaseQuantity}>+</button>
      </div>

      <div className="custom-buttons-container">
        {/* First custom button */}
        <Link to="/menu" className="custom-button button-link">Continue Exploring</Link>
        {/* Add some spacing */}
        <span className="button-spacing"></span>
        {/* Second custom button */}
        <Link to="/cart" className="custom-button button-link">View Cart</Link>
      </div>
    </div>
  );
}

export default FoodAmount;