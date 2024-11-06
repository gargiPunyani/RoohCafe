import React from 'react'
import AboutLeft from './AboutLeft'
import AboutRight from './AboutRight'

const About = () => {
  return (
    <div className='about dFlex container gap18'>
    <div className='aboutLeftOuterMost'>
    <AboutLeft/>
    </div>
    <div className='aboutRightOuterMost'>
    <AboutRight/>
    </div>
  </div>
  )
}

export default About
