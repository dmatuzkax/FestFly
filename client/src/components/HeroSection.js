import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Button.css';
import './HeroSection.css';
import SearchBar from './SearchBar';

function navigate(url) {
  window.location.href = url;
}

async function auth() {
  const response = await fetch('http://localhost:3001/request', {method: 'POST'});
  const data = await response.json();
  navigate(data.url);
}

function HeroSection() {
  return (
    <div className='hero-container'>
     
      <h1>GET YOUR TICKETS NOW</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <button type='button' onClick={() => auth()} className='gsi-material-button'>
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