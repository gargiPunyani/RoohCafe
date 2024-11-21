import React from 'react'
import "./index.css"    
import EventTop from './EventTop'
import EventBottom from './EventBottom'

 const Event = () => {
  return (
    <div className='event primaryColor'>
    <div className='galleryMain container '>
        <div className='eventLeft'>
            <EventTop/>
        </div>
        <div className='eventRight'>
          <EventBottom/>
        </div>
      
    </div>
</div>
  )
}
export default Event
