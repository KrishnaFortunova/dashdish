import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Popular from './components/Popular';
import Offers from './components/Offers';

import { fireauth } from './config/firebase';
import './App.css';

function App() {
  useEffect(() => console.log(fireauth.currentUser), [])

  return (
    <div className="App">
      <Navbar></Navbar>
      <main>
        <Hero />
        <Popular />
        <Offers />
      </main>
    </div>
  );
}

export default App;
