import React from 'react';
import '../App.css';
import './Button.css';
import './HeroSection.css';
import SearchBar from './SearchBar';
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";


// async function auth() {
//   const response = await fetch('http://localhost:3001/request', {method: 'POST'});
//   const data = await response.json();
//   navigate(data.url);
// }

function HeroSection() {

  const [user] = useAuthState(auth);

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
  }

  return (
    <div className='hero-container'>
      
      <h2> GET YOUR TICKETS NOW</h2>
      <p>What are you waiting for?</p>
      {!user && <div className='hero-btns'>
        <button type='button' onClick={() => signInWithGoogle()} className='gsi-material-button'>
          <div className="gsi-material-button-content-wrapper">
            <i class="fa-brands fa-google"></i>
            <span className="gsi-material-button-contents">Sign in with Google</span>
          </div>
        </button>
      </div>}


      {user && <SearchBar input={""}/>}
    </div>
  );
}

export default HeroSection;