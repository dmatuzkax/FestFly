import React from 'react'
import '../App.css'
import HeroSection from '../components/HeroSection'
import FlightCards from '../components/FlightCards';

function Home() {
  return (
    <div>
      <HeroSection />
      <FlightCards />
    </div>
  );
}

export default Home;