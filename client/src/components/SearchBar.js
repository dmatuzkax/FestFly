import React, { useContext, useState } from 'react'
import './SearchBar.css';
import axios from 'axios'
import { EventsContext } from './EventsContext';

function SearchBar() {

  const [inputValue, setInputValue] = useState('');
  const { setEvents, setSearchPerformed } = useContext(EventsContext);

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      const artist = inputValue.trim();
      console.log(artist);
      setInputValue('');
      if (artist != '') {
        try {
          
          const response = await axios.post('http://localhost:3001', { artist });
          setEvents(response.data);
          setSearchPerformed(true);
          console.log('Response from backend:', response.data);
        } catch (error) {
          console.error('Error:', error);
        }
      }
    }
  };

  return (
      <input type="text" class="search-bar" placeholder="Search for your Favorite Artists..." value={inputValue}
      onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyPress} />
  )
}

export default SearchBar

