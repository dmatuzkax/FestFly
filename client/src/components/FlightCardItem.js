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
              BOS - {props.iata}
           </h5>
           <div className='fcards__item__data'>
             <p className='fcards__item__data-date'>{months[Number(props.day.substring(5, 7))] + ' ' + props.day.substring(8)}</p>
             <p className={`fcards__item__data-price ${props.group=='low' ? 'low' : (props.group=='medium' ? 'medium' : 'high')}`}>${props.price}</p>
           </div>      
          </div>
      </li>
    </>
  )
}


export default FlightCardItem
