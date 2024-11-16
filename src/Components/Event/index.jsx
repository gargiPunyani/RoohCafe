import React from 'react'
import "./index.css"    
import EventLeft from './EventLeft'
import EventRight from './EventRight'

 const Event = () => {
  return (
    <div className='event primaryColor'>
    <div className='galleryMain container dFlex gap18 '>
        <div className='eventLeft'>
            <EventLeft/>
        </div>
        <div className='eventRight'>
            <EventRight/>
        </div>
    </div>
</div>
  )
}
export default Event
