import React from 'react'
import Slick from './slider1'
import Review from './Review'
import SlickSlide from './Slider2'
import OurStory from './Story'
import Footer from '../../../SharedComponents/Footer'



const AboutRight = () => {
  return (
    <div className='aboutRightOutMost '>
      <div className='aboutRightOuter '>
        <div className='aboutRightInner mt20'>
          <div className='aboutRight dFlex gap16'>
            <div className='abooutRightTop borderRadius12 '>
              <div className='sushiArtistry uppercase primaryColor h3'>
                <h3 className='primaryColor'>Sushi Artistry <br/> 
                Redefined</h3>
              </div>
              <div className='font16 primaryColor mt25'>
                <p>Where culinary craftsmanship meets modern elegance. Indulge in the finest sushi, expertly curated to elevate your dining experience.</p>
              </div>
            </div>
            <div className='slickSlider'>
              <Slick/>
            </div>
            </div>
            <div className='reviewsGiven' > 
              <Review/>
            </div>
            <div className='aboutStory dFlex gap16 mt25'>
            <div className='slickSlider'>
            <SlickSlide/>
            </div>
            <div className='story borderRadius12'>
              <OurStory/>
            </div>
            </div>
        </div>
        <div className='footer mt40'>
          <Footer/>
        </div>
       
      </div>
      
    </div>
  )
}

export default AboutRight