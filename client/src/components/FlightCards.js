import React, { useContext, useEffect } from 'react'
import FlightCardItem from './FlightCardItem'
import './FlightCards.css'
import { EventsContext } from './EventsContext';

function FlightCards() {

  const { flights, setFlights, clickPerformed, concertDate, setClickPerformed, setConcertDate } = useContext(EventsContext);
  const savedIATA = localStorage.getItem('iata');

  useEffect(() => {

    const retrieveFlightsFromStorage = () => {
      const savedFlights = localStorage.getItem('flights');
      const savedConcertDate = localStorage.getItem('concertDate');
      const savedIATA = localStorage.getItem('iata');

      if (savedFlights && savedConcertDate) {
        setFlights(JSON.parse(savedFlights));
        setConcertDate(savedConcertDate);
        setClickPerformed(true);
        console.log(flights, concertDate);
      }
    };

    retrieveFlightsFromStorage();

  }, [setFlights, setConcertDate, setClickPerformed]);

  const isFiveBefore = (flight, concertDate) => {
    const concertDateObj = new Date(concertDate);
    const flightDateObj = new Date(flight.day);
    const timeDiff = concertDateObj - flightDateObj;
    const dayDiff = timeDiff / (1000 * 60 * 60 * 24);
    console.log(flightDateObj,concertDateObj, dayDiff > 0.5 && dayDiff <= 5);
    return dayDiff > 0.5 && dayDiff <= 5;
  }

  if (clickPerformed && flights && flights.length !== 0) {
    return (
      <div className='fcards'>
        <div className="fcards__container">
          <div className="fcards__wrapper">
            <ul className="fcards__items">
              {flights.filter(flight => isFiveBefore(flight, concertDate)).map((flight, index) => (
                <FlightCard flight={flight} key={index}/>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <h1 className='no-flights-header'>No Flights Found :(</h1>
    );
  }

  function FlightCard({flight}) {
    const { day, price, group } = flight;
    const savedIATA = localStorage.getItem('iata');

    return(
      <>
        <FlightCardItem  day = {day} price = {price} group={group} iata={savedIATA}/>
      </>
        
      
    );

    
  }

}

export default FlightCards
