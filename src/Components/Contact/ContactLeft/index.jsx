import React from 'react'
import Navbar from '../../../SharedComponents/Navbar'
import ContactImage from '../../../Assests/images/contactMain.JPG'

const ContactLeft = () => {
  return (
    <div className='contactLeftOuter' > 
        <div className="contactOuterMost ">
    <div className="contactUsImage relative objectFit">
      <img className="borderRadius16 " src ={ContactImage} alt="menubar" />
    </div>
    <Navbar />
    <div className="menuHead uppercase letterSpace5 h1 absolute primaryColor">
      <h1>Contact</h1>
    </div>
  </div></div>
  )
}

export default ContactLeft