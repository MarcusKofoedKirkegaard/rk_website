import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hjem from './pages/Hjem/Hjem.jsx';
import Forløb from './pages/Forløb/Forløb.jsx';
import Spiseforstyrrelse from './pages/Spiseforstyrrelse/Spiseforstyrrelse.tsx';
import OmMig from './pages/OmMig/OmMig.tsx';
import Priser from './pages/Priser/Priser.jsx';
import Kontakt from './pages/Kontakt/Kontakt.tsx';
import MobileMenu from './components/MobileMenu.jsx';
import CookieConsentComponent from './components/Cookies.jsx';


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router basename="/rk_website/">
      <div className='App'>
        <Header/>
        <main className='content'>
          <Routes>
            <Route path='/' element={<Hjem/>} />
            <Route path='/forloeb' element={<Forløb/>} />
            <Route path='/spiseforstyrrelse' element={<Spiseforstyrrelse/>} />
            <Route path='/om-mig' element={<OmMig/>} />
            <Route path='/priser' element={<Priser/>} />
            <Route path='/kontakt' element={<Kontakt/>} />
          </Routes>

        <CookieConsentComponent/>
        <MobileMenu/>
        
        </main>
        <Footer/>
        <div id='credits' style={{fontSize: '8pt', backgroundColor: 'white', textAlign: 'center'}}>
          <p style={{margin: "2px"}}>Made by Marcus Kofoed Kirkegaard |  Copyright © 2023</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
