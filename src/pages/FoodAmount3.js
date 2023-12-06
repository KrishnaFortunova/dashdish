import { React, createContext, useState, useEffect, useContext} from "react";
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
    <div className ='food-container'>   
      <div className='food-container-title'>
        <h1> Menu </h1>
      </div>

      <div className='food-main-content'>
        <div className='food-main-text'>
          <div className='food-main-title'>
            <h2> Italian Cuisine </h2>
            <h3> Pizza </h3>
            <p> Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as various types of sausage, anchovies, mushrooms, onions, olives, vegetables, meat, ham, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven. </p>
          </div>
        </div>
        <div className="food-image-container">
          <img src={require("./images/food2.png")} alt="food Image" />
        </div>
      </div>

      <div className="food-quantity-container">
        <button className="food-quantity-button" onClick={decreaseQuantity}>-</button>
        <input type="number" value={quantity} readOnly style={{ width: '30px' }} />
        <button className="food-quantity-button" onClick={increaseQuantity}>+</button>
      </div>

      <div className="food-custom-buttons-container">
        {/* First custom button */}
        <Link to="/menu" className="food-custom-button button-link">Continue Exploring</Link>
        {/* Add some spacing */}
        <span className="food-button-spacing"></span>
        {/* Second custom button */}
        <Link to="/yet-another-page" className="food-custom-button button-link">View Cart</Link>
      </div>
    </div> 
  );
}

export default FoodAmount;