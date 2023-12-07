import './App.css';
import Navbar from './components/navbar/navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';

import Shop from './pages/Shop';

import Menu from './pages/Menu.js'
import FoodAmount from './pages/FoodAmount.js'

import Login from './pages/Login';
import Signup from './pages/Signup';
import ResetPass from './pages/ResetPass';
import EmailSend from './pages/EmailSend';
import Cuisines from './pages/Cuisines';

import Cart from './pages/Cart';
import Address from './pages/Address';
import Payment from './pages/Payment';
import CreditCard from './pages/CreditCard';
import Upi from './pages/Upi';

import { app, fireauth } from './config/firebase.js';
import { getAuth } from 'firebase/auth';

const BlockForNotAuthenticated = ({ user, redirectPath = '/login' }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace={true} />
  } else {
    return <Outlet />
  }
}

const BlockForAuthenticated = ({ user, redirectPath = '/' }) => {
  if (user) {
    return <Navigate to={redirectPath} replace={true} />
  } else {
    return <Outlet />
  }
}

const AppWithNavbar = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
);

function App() {
  const user = getAuth(app).currentUser

  return (
    <div>
      <Router>
        <Routes>
          {/* Routes that include the Navbar */}
          <Route index element={<AppWithNavbar><Shop /></AppWithNavbar>} />

          <Route path='/cuisines' element={<AppWithNavbar><Cuisines /></AppWithNavbar>} />
          <Route path='/menu' element={<AppWithNavbar><Menu /></AppWithNavbar>} />
          <Route path='/food-amount' element={<AppWithNavbar><FoodAmount /></AppWithNavbar>} />

          {/* Blocked route for non authenticated user */}
          <Route element={<BlockForNotAuthenticated user={user} />} >
            <Route path='cart' element={<AppWithNavbar><Cart /></AppWithNavbar>} />
            <Route path='address' element={<AppWithNavbar><Address /></AppWithNavbar>} />
            <Route path='payment/creditcard' element={<AppWithNavbar><CreditCard /></AppWithNavbar>} />
            <Route path='payment/upi' element={<AppWithNavbar><Upi /></AppWithNavbar>} />
            <Route path='payment' element={<AppWithNavbar><Payment /></AppWithNavbar>} />
          </Route>

          {/* Routes without the Navbar */}
          {/* Blocked route for authenticated user */}
          <Route element={<BlockForAuthenticated user={user} />} >
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/reset-pass' element={<ResetPass />} />
            <Route path='/email-send' element={<EmailSend />} />
          </Route>

        </Routes>
      </Router>
    </div >
  );
}

export default App;
