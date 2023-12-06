import { React, createContext, useState, useEffect, useContext} from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <div className='menu-container'>
        <div className='menu-container-title'>
            <h1> Menu </h1>
        </div>

        <Link to="/FoodAmount" className='menu-custom-link'>
        <div className='menu-main-container'>
            <div className='menu-content-img'>
                <img src={require("./images/food1.png")} alt="food Image" />  
            </div>
            <div className='menu-content-txt'>
                <h2> Indian Curry </h2>
                <p> Curry is a dish with a sauce seasoned with spices, mainly associated with South Asian cuisine. </p>
                <p> IDR 50.000 </p>
            </div>
        </div>
        </Link>

        <Link to="/FoodAmount2" className='menu-custom-link'>
        <div className='menu-main-container'>
            <div className='menu-content-img'>
                <img src={require("./images/food2.png")} alt="food Image" />  
            </div>
            <div className='menu-content-txt'>
                <h2> Lor Mee </h2>
                <p> Lor Mee is a Chinese Hokkien noodle dish from Zhangzhou served in a thick starchy gravy. </p>
                <p> IDR 60.000 </p>
            </div>
        </div>
        </Link>

        <Link to="/FoodAmount3" className='menu-custom-link'>
        <div className='menu-main-container'>
            <div className='menu-content-img'>
                <img src={require("./images/food3.png")} alt="food Image" />  
            </div>
            <div className='menu-content-txt'>
                <h2> Pizza </h2>
                <p> is a dish consisting of a flat base of leavened wheat-based dough topped with tomatoes and cheese. </p>
                <p> IDR 70.000 </p>
            </div>
        </div>
        </Link>

        <div className='menu-button-container'>
            <Link to="/" className='menu-bottom-left-button menu-link-button'>Homepage</Link>
            <Link to="/checkout" className='menu-bottom-right-button menu-link-button'>View Cart</Link>
        </div>
    </div>
  );
}

export default Menu;