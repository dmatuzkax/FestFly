import React, { useContext, useState, useEffect } from 'react'
import './SearchBar.css';
import axios from 'axios'
import { EventsContext } from './EventsContext';
import { useLocation, useNavigate } from 'react-router-dom';

function SearchBar(props) {

  const [inputValue, setInputValue] = useState('');
  const { setEvents, setSearchPerformed } = useContext(EventsContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const savedQuery = localStorage.getItem('searchQuery');
    if (savedQuery && location.pathname !== '/' && location.pathname !== '/flights') {
      setInputValue(savedQuery);
      fetchSearchResults(savedQuery);
      setInputValue('');
    }
  }, [location.pathname]);

  const fetchSearchResults = async (query) => {
    try {
      const response = await axios.post('http://localhost:3001/events/:artist', { artist: query });
      setEvents(response.data);
      setSearchPerformed(true);
      navigate(`/events/${query}`);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      const artist = inputValue.trim();
      setInputValue('');
      if (artist !== '') {
          localStorage.setItem('searchQuery', artist);
          fetchSearchResults(artist);
      }
    }
  };

  return (
      <form onSubmit={(e) => e.preventDefault()}>
        <input type='text' className={props.size === 'small' ? 'small-search-bar' :'search-bar'} placeholder='Search for your Favorite Artists...' value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyPress} />
      </form>
  )
}

export default SearchBar

