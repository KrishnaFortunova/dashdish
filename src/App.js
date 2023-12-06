import './App.css';
import Navbar from './components/navbar/navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

const AppWithNavbar = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
);

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Routes that include the Navbar */}
          <Route path='/' element={<AppWithNavbar><Shop /></AppWithNavbar>} />
          <Route path='/cart' element={<AppWithNavbar><Cart /></AppWithNavbar>} />
          <Route path='/address' element={<AppWithNavbar><Address /></AppWithNavbar>} />
          <Route path='/payment/creditcard' element={<AppWithNavbar><CreditCard /></AppWithNavbar>} />
          <Route path='/payment/upi' element={<AppWithNavbar><Upi /></AppWithNavbar>} />
          <Route path='/payment' element={<AppWithNavbar><Payment /></AppWithNavbar>} />

          <Route path='/menu' element={<AppWithNavbar><Menu /></AppWithNavbar>} />

          <Route path='/food-amount' element={<AppWithNavbar><FoodAmount /></AppWithNavbar>} />
          <Route path='/cuisines' element={<AppWithNavbar><Cuisines /></AppWithNavbar>} />

          {/* Routes without the Navbar */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/reset-pass' element={<ResetPass />} />
          <Route path='/email-send' element={<EmailSend />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
