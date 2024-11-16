import React from 'react'
import Slider from 'react-slick'
import image1 from "../../../../Assests/images/event13.jpg"
import image2 from "../../../../Assests/images/about9.JPG"
import image3 from "../../../../Assests/images/about4.JPG"
import image4 from "../../../../Assests/images/gallery11.JPG"

const EventSlider2 = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className="slider-container borderRadius12 objectFit">
    <Slider {...settings}>
      <div className="eventSlider " >
          <img className='borderRadius12' src={image1} alt='eventSlider1'/>
        </div>
      
      <div className="eventSlider ">
        <img className='borderRadius12' src={image2} alt='eventSlider2' />
      </div>
      <div className="eventSlider ">
        <img className='borderRadius12' src={image3} alt='eventSlider3' />
      </div>  
      <div className="eventSlider ">
        <img className='borderRadius12' src={image4} alt='eventSlider3' />
      </div>      
    </Slider>
    </div>
  )
}

export default EventSlider2