import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import SearchBar from './SearchBar';
import './SearchBar.css';
import { auth, provider } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

function Navbar() {
  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  const signUserOut = async () => {
      await signOut(auth);
      navigate("/");
  }

  const location = useLocation();
  const isEventsPage = location.pathname !== `/`;

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            FestFly
            <i className='fa-solid fa-plane'/>
          </Link>
          {isEventsPage && <SearchBar size='small' />}
          <div className="user">
            {user ? (
            <>
                <p> {user?.displayName} </p>
                <img src={user?.photoURL || ""} width="40" height="40" alt=""/>
                <button className="btn btn--primary" onClick={signUserOut}>Sign Out</button>
            </>
            ) : <button className="btn btn--primary btn--sign-in" onClick={signInWithGoogle}>Sign In</button>}
        </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;