import React from 'react'
import AboutLeft from './AboutLeft'
import AboutRight from './AboutRight'
import "./index.css"


const About = () => {
  return (
    <div className='aboutUs'>
    <div className='aboutUsSection dFlex container gap18'>
    <div className='aboutLeftOuterMost'>
    <AboutLeft/>
    </div>
    <div className='aboutRightOuterMost'>
    <AboutRight/>
    </div>
  </div>
  </div>
  )
}

export default About
