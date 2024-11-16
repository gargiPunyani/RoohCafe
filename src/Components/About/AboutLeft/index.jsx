import React from 'react'
import aboutImage from "../../../Assests/images/rooh.jpeg"
import Navbar from '../../../SharedComponents/Navbar'

const AboutLeft = () => {
  return (
    <div className="aboutOuterMost relative ">
    <div className="aboutUsImage relative objectFit">
      <img className="borderRadius16 " src ={aboutImage} alt="menubar" />
    </div>
    <Navbar />
    <div className="aboutHead uppercase letterSpace5 h1 absolute primaryColor">
      <h1>About</h1>
    </div>
  </div>
  )
}

export default AboutLeft