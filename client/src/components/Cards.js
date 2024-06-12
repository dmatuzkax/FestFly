import React, { useContext } from 'react'
import CardItem from './CardItem'
import './Cards.css'
import { EventsContext } from './EventsContext';

function Cards() {
  const { events, searchPerformed } = useContext(EventsContext);

  // const [events, setEvents] = useState([]);


    // useEffect(() => {
    //     fetch('http://localhost:3001')
    //         .then(response => response.json())
    //         .then(data => {
    //             setEvents(data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching concert data:', error);
    //         });
    // }, []);

  if (!searchPerformed) {
    return null;
  } else {
    return (
      <div className='cards'>
      <div className="cards__container">
        <div className="cards__wrapper">
          {events.length !== 0 ? (
            <ul className="cards__items">
              {events.filter(concert => "_embedded" in concert).map((concert, index) => (
                <ConcertCard key={index} concert={concert} />
              ))}
            </ul>
          ) : (
            <p>No Events Set For This Artist</p>
          )}
        </div>
      </div>
    </div>
  );
  } 

  function ConcertCard({ concert }) {
    const { name, dates, _embedded, images } = concert;
    const venue = _embedded.venues[0].name;
    const date = dates.start.localDate;
    const time = dates.start.localTime;
    const city = _embedded.venues[0].city.name;
    const country = _embedded.venues[0].country.name;
    const src = images[0].url;

    return(
      <li className='cards__item'>
        <CardItem  src = {src} name = {name} date = {date} time = {time || "TBD"} venue = {venue} city = {city} country = {country} />
      </li>
      
    );

    
  }

}

export default Cards
