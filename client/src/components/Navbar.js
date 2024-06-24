import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import SearchBar from './SearchBar';
import './SearchBar.css';

function Navbar() {
  const location = useLocation();
  const isEventsPage = location.pathname !== `/`;

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            FestFly
            <i className='fa-solid fa-plane'/>
          </Link>
          {isEventsPage && <SearchBar size='small' />}
        </div>
      </nav>
    </>
  );
}

export default Navbar;