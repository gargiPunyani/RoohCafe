import React from 'react'
import Slider from 'react-slick';
import image1 from "../../../../Assests/images/event4.JPG"
import image2 from "../../../../Assests/images/gallery19.JPG"
import image3 from "../../../../Assests/images/gallery4.JPG"
import image4 from "../../../../Assests/images/event5.JPG"
import image5 from "../../../../Assests/images/about4.JPG"
import image6 from "../../../../Assests/images/gallery1.JPG"
import image7 from "../../../../Assests/images/event7.JPG"
import image8 from "../../../../Assests/images/event6.JPG"

const EventSlider3 = () => {
    const settings={
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 3000,
    cssEase: "linear",
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
      <div className="eventSlider ">
        <img className='borderRadius12' src={image5} alt='eventSlider3' />
      </div>      
      <div className="eventSlider ">
        <img className='borderRadius12' src={image6} alt='eventSlider3' />
      </div>  
      <div className="eventSlider ">
        <img className='borderRadius12' src={image7} alt='eventSlider3' />
      </div>  
      <div className="eventSlider ">
        <img className='borderRadius12' src={image8} alt='eventSlider3' />
      </div>  
    </Slider>
    </div>
  )
}

export default EventSlider3