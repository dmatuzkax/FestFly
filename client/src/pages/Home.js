import React from 'react'
import '../App.css'
import HeroSection from '../components/HeroSection'
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const user = queryParams.get('user');
  return (
    <div>
      <HeroSection user = {user}/>
    </div>
  );
}

export default Home;