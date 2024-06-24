import React, { useContext, useEffect } from 'react'
import { Button } from './Button'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { EventsContext } from './EventsContext';

function EventCardItem(props) {

  const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const { setFlights, setClickPerformed, setConcertDate } = useContext(EventsContext);
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   const savedSearch = localStorage.getItem('flightSearch');
  //   if (savedSearch) {
  //     const { city, date } = JSON.parse(savedSearch);
  //     searchFlights(city, date);
  //     localStorage.removeItem('flightSearch');
  //   }
  // }, [location.pathname]);

  const searchFlights = async (city, date) => {
    const response = await axios.post('http://localhost:3001/flights', {city: city, date: date});
    console.log(response);
    setFlights(response.data);
    setClickPerformed(true);
    setConcertDate(date);
    localStorage.setItem('flights', JSON.stringify(response.data));
    localStorage.setItem('concertDate', date);
    navigate('/flights');
  }

  const handleButtonClick = () => {
 
    searchFlights(props.city, props.date);
  };

  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap'>
            <img src={props.src} alt='Concert Promo' className='cards__item__img' />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>
              {props.name}
            </h5>
            <div className='card-item-date'>
              <div className="day">{props.date.substring(8)}</div>
              <div className="month">{months[Number(props.date.substring(5, 7))]}</div>
            </div>
            <p className='card-item-time'>{props.time.substring(0, 5)}</p>
            <p>{props.venue}</p>
            <p>{props.city}, {props.country !== 'United States Of America' ? props.country : 'USA'}</p>
            <div className="btn-card-wrapper">
              <Button buttonStyle='btn--card' onClick={handleButtonClick}>Select</Button>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}


export default EventCardItem
