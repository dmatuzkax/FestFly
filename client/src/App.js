import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js'
import { EventsProvider } from './components/EventsContext';

function App() {
  return (
    <>
      <EventsProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>  
        </Router>
      </EventsProvider>
    </>
  );
}

export default App;
