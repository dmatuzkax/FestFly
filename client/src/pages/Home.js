import React from 'react'
import '../App.css'
import HeroSection from '../components/HeroSection'
import Cards from '../components/Cards';

function Home() {
  return (
    <div className='page page-exit'>
      <HeroSection />
      <Cards />
    </div>
  );
}

export default Home;