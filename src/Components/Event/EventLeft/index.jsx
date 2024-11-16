import React from 'react'
import Navbar from '../../../SharedComponents/Navbar'
import eventImage from "../../../Assests/images/event1.jpg"

const EventLeft = () => {
  return (
    <div className="eventOuterMost">
    <div className="eventOuter relative objectFit">
      <img className="borderRadius16 " src ={eventImage} alt="menubar" />
    </div>
    <Navbar />
    <div className="aboutHead uppercase letterSpace5 h1 absolute primaryColor">
      <h1>Gallery</h1>
    </div>
  </div>
  )
}

export default EventLeft