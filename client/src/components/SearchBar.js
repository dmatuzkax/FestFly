import React, { useContext, useState } from 'react'
import './SearchBar.css';
import axios from 'axios'
import { EventsContext } from './EventsContext';
import { useNavigate } from 'react-router-dom';

function SearchBar(props) {

  const [inputValue, setInputValue] = useState('');
  const { setEvents, setSearchPerformed } = useContext(EventsContext);
  const navigate = useNavigate();

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      const artist = inputValue.trim();
      setInputValue('');
      if (artist !== '') {
        try {
          
          const response = await axios.post('http://localhost:3001', { artist });
          setEvents(response.data);
          setSearchPerformed(true);
          navigate('/events');
        } catch (error) {
          console.error('Error:', error);
        }
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

