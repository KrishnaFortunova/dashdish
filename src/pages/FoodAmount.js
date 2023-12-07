import { React, createContext, useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link, useLocation } from 'react-router-dom';
import { observer } from "mobx-react";

import './FoodAmount.css';
import products from "../data/Products";
import SharedState from "../Store";
import { useNavigate } from "react-router-dom/dist";
import { fireauth } from "../config/firebase";

const FoodAmount = observer(() => {
  const navigate = useNavigate()
  const location = useLocation()
  const productId = location.state
  const product = products.filter((el) => el.id === productId)[0]
  const category = product.category.charAt(0).toUpperCase() + product.category.slice(1)

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addtoCart = () => {
    if (fireauth.currentUser !== null) {
      SharedState.addCart({
        id: product.id,
        name: product.name,
        price: product.new_price,
        quantity: quantity
      })
    } else {
      navigate('/login')
    }
  }

  return (
    <div className='food-container'>
      <div className='food-container-title'>
        <h1> Menu </h1>
      </div>

      <div className='food-main-content'>
        <div className='food-main-text'>
          <div className='food-main-title'>
            <h2> {category} Cuisine </h2>
            <h3> {product.name} </h3>
            <p> {product.description} </p>
          </div>
        </div>
        <div className="food-image-container">
          <img src={product.image} alt="food" />
        </div>
      </div>

      <div className="food-quantity-container">
        <button className="food-quantity-button" onClick={decreaseQuantity}>-</button>
        <input type="number" value={quantity} readOnly style={{ width: '30px' }} />
        <button className="food-quantity-button" onClick={increaseQuantity}>+</button>
      </div>

      <div className="add-to-cart px-4 py-2" onClick={addtoCart}>
        Add to Cart
      </div>

      <div className="food-custom-buttons-container">
        {/* First custom button */}
        <div onClick={() => navigate(-1)} className="food-custom-button button-link">Continue Exploring</div>
        {/* Add some spacing */}
        <span className="food-button-spacing"></span>
        {/* Second custom button */}
        <Link to="/cart" className="food-custom-button button-link">View Cart</Link>
      </div>
    </div>
  );
})

export default FoodAmount;