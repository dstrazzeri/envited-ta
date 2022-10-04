import './Event.css';

import { GoCalendar } from 'react-icons/go'
import { FaMapPin } from 'react-icons/fa'
import cake from './birthdayCake.png'

function Event() {
  return (
    <div className="event">
      <img src={cake} alt='birthday cake'/>

      <h1 className='eventH1'>Birthday Bash</h1>
      <p className='host'>Hosted by: Elysia</p>

      <div className='date'>
      <GoCalendar/>
      </div>
      <p className='info'>18 August 6:00PM<br/>to 19 August 1:00PM UTC +10</p>

      <div className='place'>
      <FaMapPin/>
      </div>
      <p className='info'>Street name <br/>Suburd, State, Postcode</p>
    </div>
  );
}

export default Event;