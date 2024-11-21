import React from 'react'
import Navbar from '../../../SharedComponents/Navbar'

const EventTop = () => {
  return (
    <div className='eventTopOuterMost'>
      <div className='eventTopOuter relative'>
        <div className='eventTopInner '>
          <div className='eventTopImage bg objectFit'>
          </div>
          <Navbar />
        <div className="bookHead uppercase letterSpace5 h1 absolute primaryColor">
          <h1>
           Events
          </h1>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default EventTop