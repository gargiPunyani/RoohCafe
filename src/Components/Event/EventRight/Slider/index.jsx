import React from 'react'
import Slider from 'react-slick'
import image1 from "../../../../Assests/images/event3.JPG"
import image2 from "../../../../Assests/images/event12.JPG"
import image3 from "../../../../Assests/images/event1.jpg"
import image7 from "../../../../Assests/images/event2.JPG"
import image4 from "../../../../Assests/images/gallery7.jpeg"
import image5 from "../../../../Assests/images/gallery23.JPG"
import image6 from "../../../../Assests/images/about7.JPG"
import image8 from "../../../../Assests/images/gallery11.JPG"
import image9 from "../../../../Assests/images/gallery15.JPG"
import image10 from "../../../../Assests/images/gallery22.JPG"

const EventSlider1 = () => {
    const settings = {
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
        <img className='borderRadius12' src={image4} alt='eventSlider4' />
      </div>
      <div className="eventSlider ">
        <img className='borderRadius12' src={image5} alt='eventSlider5' />
      </div>
      <div className="eventSlider ">
        <img className='borderRadius12' src={image6} alt='eventSlider5' />
      </div>
      <div className="eventSlider ">
        <img className='borderRadius12' src={image7} alt='eventSlider5' />
      </div>
      <div className="eventSlider ">
        <img className='borderRadius12' src={image8} alt='eventSlider5' />
      </div>
      <div className="eventSlider ">
        <img className='borderRadius12' src={image9} alt='eventSlider5' />
      </div>
      <div className="eventSlider ">
        <img className='borderRadius12' src={image10} alt='eventSlider5' />
      </div>
    </Slider>
    </div>
  )
}

export default EventSlider1