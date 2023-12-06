import { React, createContext, useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
    return (
        <div className='container'>
            <div className='container-title'>
                <h1> Menu </h1>
            </div>

            <Link to="./foodamount" className='custom-link'>
                <div className='main-container'>
                    <div className='content-img'>
                        <img src={require("./images/food1.png")} alt="food Image" />
                    </div>
                    <div className='content-txt'>
                        <h2> Indian Curry </h2>
                        <p> Curry is a dish with a sauce seasoned with spices, mainly associated with South Asian cuisine. </p>
                        <p> IDR 50.000 </p>
                    </div>
                </div>
            </Link>

            <Link to="./foodamount2" className='custom-link'>
                <div className='main-container'>
                    <div className='content-img'>
                        <img src={require("./images/food2.png")} alt="food Image" />
                    </div>
                    <div className='content-txt'>
                        <h2> Lor Mee </h2>
                        <p> Lor Mee is a Chinese Hokkien noodle dish from Zhangzhou served in a thick starchy gravy. </p>
                        <p> IDR 60.000 </p>
                    </div>
                </div>
            </Link>

            <Link to="./foodamount3" className='custom-link'>
                <div className='main-container'>
                    <div className='content-img'>
                        <img src={require("./images/food3.png")} alt="food Image" />
                    </div>
                    <div className='content-txt'>
                        <h2> Pizza </h2>
                        <p> is a dish consisting of a flat base of leavened wheat-based dough topped with tomatoes and cheese. </p>
                        <p> IDR 70.000 </p>
                    </div>
                </div>
            </Link>

            <div className='button-container'>
                <Link to="/" className='bottom-left-button link-button'>Homepage</Link>
                <Link to="/checkout" className='bottom-right-button link-button'>View Cart</Link>
            </div>
        </div>
    );
}

export default Menu;