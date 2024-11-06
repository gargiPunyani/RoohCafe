import React from 'react'
import aboutImage from "../../../Assests/images/about-home.webp"
import Navbar from '../../../SharedComponents/Navbar'

const AboutLeft = () => {
  return (
    <div className="outerMost ">
    <div className="menubarImage relative">
      <img className="borderRadius16 " src={aboutImage} alt="menubar" />
    </div>
    <Navbar />
    <div className="menuHead uppercase letterSpace5 h1 absolute primaryColor">
      <h1>About</h1>
    </div>
  </div>
  )
}

export default AboutLeft