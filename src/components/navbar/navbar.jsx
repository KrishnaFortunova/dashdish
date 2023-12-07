import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { observer } from "mobx-react";

import SharedState from "../../Store";
import { app, fireauth } from "../../config/firebase";
import './navbar.css';

import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';

const Navbar = observer(() => {
    const navigate = useNavigate()

    const onLogout = () => {
        signOut(fireauth).then(() => {
            SharedState.clearCart()
            navigate('/')
        }).catch(error => {
            console.log(error.code)
        })
    }

    const AuthButton = () => {
        if (getAuth(app).currentUser) {
            return <button className='logout-button' onClick={onLogout}
                style={{
                    backgroundColor: '#ff5f5f',
                    color: 'white',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: 'black',
                    borderInlineWidth: 1,
                    borderInlineStyle: 'solid',
                    borderInlineColor: 'white',
                    borderRadius: 75
                }}>
                Logout
            </button>
        } else {
            return <Link to='/login'><button>Login</button></Link>
        }
    }

    return (
        <div className='navbar'>
            <Link to="/" className="nav-logo">
                <img src={logo} alt="Logo" />
                <p>DashDish</p>
            </Link>
            <div className="nav-login-cart">
                <AuthButton />
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{SharedState.cart.length}</div>
            </div>
        </div>
    )
})

export default Navbar;