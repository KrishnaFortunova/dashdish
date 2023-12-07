import { React, createContext, useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link, useLocation } from 'react-router-dom';
import './Menu.css';
import products from "../data/Products";
import { useNavigate } from "react-router-dom/dist";

function Menu() {
    const navigate = useNavigate()
    const location = useLocation()

    const category = location.state
    const display_product = products.filter((product) => product.category === category)

    return (
        <div className='menu-container'>
            <div className='menu-container-title'>
                <h1> Menu </h1>
            </div>

            {display_product.map(product => {
                return (
                    <div className='menu-custom-link' onClick={() => navigate('/food-amount', { state: product.id })}>
                        <div className='menu-main-container'>
                            <div className='menu-content-img'>
                                <img src={product.image} alt="food" />
                            </div>
                            <div className='menu-content-txt'>
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                                <p>$ {product.new_price}</p>
                            </div>
                        </div>
                    </div>
                )
            })}

            <div className='menu-button-container'>
                <Link to="/cuisines" className='menu-bottom-left-button menu-link-button'>Continue Explore</Link>
                <Link to="/checkout" className='menu-bottom-right-button menu-link-button'>View Cart</Link>
            </div>
        </div>
    );
}

export default Menu;