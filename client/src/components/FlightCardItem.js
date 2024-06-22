import React from 'react'
import { Button } from './Button'

function FlightCardItem(props) {

  const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return (
    <>
      <li className='fcards__item'>
          <div className='fcards__item__icon-box'>
            <i class="fa-solid fa-plane fa-logo"></i>
          </div>
          <div className='fcards__item__info'>
           <h5 className='fcards__item__text'>
              Dummy
           </h5> {/*
            <div className='fcard-item-date'>
              <div className="day">{props.date.substring(8)}</div>
              <div className="month">{months[Number(props.date.substring(5, 7))]}</div>
            </div>
            <p className='card-item-time'>{props.time.substring(0, 5)}</p>
            <p>{props.venue}</p>
            <p>{props.city}, {props.country !== 'United States Of America' ? props.country : 'USA'}</p>
            <div className="btn-card-wrapper">
              <Button buttonStyle='btn--card'>Select</Button>
  </div> */}
          </div>
      </li>
    </>
  )
}


export default FlightCardItem
