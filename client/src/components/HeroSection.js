import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import SearchBar from './SearchBar';

function HeroSection() {
  return (
    <div className='hero-container'>
     
      <h1>GET YOUR TICKETS NOW</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SIGN IN
        </Button> */}
        <button className="gsi-material-button">
            <div className="gsi-material-button-state"></div>
            <div className="gsi-material-button-content-wrapper">
              <i class="fa-brands fa-google"></i>
              <span className="gsi-material-button-contents">Sign in with Google</span>
            </div>
          </button>
          
      </div>
      <SearchBar />
    </div>
  );
}

export default HeroSection;