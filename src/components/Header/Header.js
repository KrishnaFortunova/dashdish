import { React, createContext, useState, useEffect, useContext} from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logout clicked');
  };

  return (
    <div className="header-container">
      <div className="header">
        <Link to="/" className="home">Home</Link>
        <Link to="/logout" className="logout" onClick={handleLogout}>Logout</Link>
      </div>
    </div>
  );
};

export default Header;