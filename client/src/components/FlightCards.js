import React, { useContext } from 'react'
import FlightCardItem from './FlightCardItem'
import './FlightCards.css'
import { EventsContext } from './EventsContext';

function FlightCards() {
  // const { events, searchPerformed } = useContext(EventsContext);

  // if (!searchPerformed) {
  //   return null;
  // } else {
    return (
      <div className='fcards'>
        <div className="fcards__container">
          <div className="fcards__wrapper">
            {/* <ul className="fcards__items">
              {events.filter(concert => "_embedded" in concert).map((concert, index) => (
                <FlightCard />
              ))}
            </ul> */}
            <FlightCard />
          </div>
        </div>
      </div>
  );
  } 

  function FlightCard({}) {
    // const { name, dates, _embedded, images } = concert;
    // const venue = _embedded.venues[0].name;
    // const date = dates.start.localDate;
    // const time = dates.start.localTime;
    // const city = _embedded.venues[0].city.name;
    // const country = _embedded.venues[0].country.name;
    // const src = images[0].url;

    return(
      <>
        <FlightCardItem />
        <FlightCardItem />  
      </>
        
      
    );

    
  }

// }

export default FlightCards
