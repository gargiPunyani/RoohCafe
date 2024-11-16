import React from 'react'
import Slider from 'react-slick'
import aboutSlider4 from "../../../../Assests/images/about4.JPG"
// import aboutSlider5 from "../../../../Assests/images/about8.JPG"
import aboutSlider3 from "../../../../Assests/images/event1.jpg"
import aboutSlider6 from "../../../../Assests/images/aboutStory.jpg"
import aboutSlider7 from "../../../../Assests/images/about7.JPG"
import aboutSlider8 from "../../../../Assests/images/about9.JPG"
import aboutSlider9 from "../../../../Assests/images/about10.jpeg"



const SlickSlide = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className="slider-container sliderContent ">
    <Slider {...settings}>
    <div>
      <div className='sliderImages objectFit'>
        <img className='borderRadius12' src={aboutSlider6} alt='aboutSlider3'/>
      </div>
      </div>
     
      <div>
      <div className='sliderImages objectFit'>
        <img className='borderRadius12' src={aboutSlider4} alt='aboutSlider3'/>
      </div>
      </div>
      <div>
        <div className='sliderImages objectFit '>
        <img className='borderRadius12' src={aboutSlider3} alt='aboutSlider1'/>
      </div>
      </div>
      {/* <div>
      <div className='sliderImages objectFit'>
        <img className='borderRadius12' src={aboutSlider5} alt='aboutSlider3'/>
      </div>
      </div>      */}
      <div>
      <div className='sliderImages objectFit'>
        <img className='borderRadius12' src={aboutSlider8} alt='aboutSlider3'/>
      </div>
      </div>
      <div>
      <div className='sliderImages objectFit'>
        <img className='borderRadius12' src={aboutSlider7} alt='aboutSlider3'/>
      </div>
      </div>
      <div>
      <div className='sliderImages objectFit'>
        <img className='borderRadius12' src={aboutSlider9} alt='aboutSlider3'/>
      </div>
      </div>

    </Slider>
  </div>

)
}

export default SlickSlide