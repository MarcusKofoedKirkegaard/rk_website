import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className='header'>
          <nav>
          <div id='headerlogo'>
            <Link to="/">
              <h1 id='Logo'> <b> RIKKE KIRKEGAARD </b> </h1> 
            </Link>
          </div>

          <div id='headermenu'>
            <Link to="/forloeb" >
              <p className={location.pathname === '/forloeb' ? 'active' : ''}>
                FORLØB
              </p>
            </Link>
            <Link to="/spiseforstyrrelse" >
              <p className={location.pathname === '/spiseforstyrrelse' ? 'active' : ''}>
                SPISEFORSTYRRELSE
              </p>
            </Link>
            <Link to="/om-mig" >
              <p className={location.pathname === '/om-mig' ? 'active' : ''}>
                OM MIG
              </p>
            </Link>
            <Link to="/priser" >
              <p className={location.pathname === '/priser' ? 'active' : ''}>
                PRISER
              </p>
            </Link>
            <Link to="/kontakt">
              <p className={location.pathname === '/kontakt' ? 'active' : ''}>
                KONTAKT
              </p>
            </Link>
          </div>
        </nav>
        
    </header>
  );
};

export default Header;