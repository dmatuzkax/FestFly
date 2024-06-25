import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js'
import { EventsProvider } from './components/EventsContext';
import Events from './pages/Events.js';
import Flights from './pages/Flights.js';
import SignIn from './pages/SignIn.js';

function App() {
  
  return (
    <>
      <EventsProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" exact element={<SignIn />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/events/:artist" exact element={<Events />} />
            <Route path="/flights" exact element={<Flights />} />
          </Routes>  
        </Router>
      </EventsProvider>
    </>
  );
}

export default App;
