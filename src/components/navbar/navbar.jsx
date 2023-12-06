import React, { useState } from "react";
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { observer } from "mobx-react";
import SharedState from "../../Store";

const Navbar = observer(() => {
    return (
        <div className='navbar'>
            <Link to="/" className="nav-logo">
                <img src={logo} alt="Logo" />
                <p>DashDish</p>
            </Link>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{SharedState.cart.length}</div>
            </div>
        </div>
    )
})

export default Navbar;