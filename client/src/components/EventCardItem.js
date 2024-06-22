import React from 'react'
import { Button } from './Button'

function EventCardItem(props) {

  const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

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
              <Button buttonStyle='btn--card'>Select</Button>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}


export default EventCardItem
