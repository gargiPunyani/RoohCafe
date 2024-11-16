import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import aboutSlider3 from "../../../../Assests/images/roohImages.jpeg"
import aboutSlider1 from "../../../../Assests/images/about2.jpeg"
import aboutSlider2 from "../../../../Assests/images/about3.JPG"
import aboutSlider4 from "../../../../Assests/images/about5.JPG"
import aboutSlider5 from "../../../../Assests/images/about6.JPG"

const Slick = () => {
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
            <img className='borderRadius12' src={aboutSlider1} alt='aboutSlider1'/>
          </div>
          </div>
          <div>
          <div className='sliderImages objectFit'>
            <img className='borderRadius12' src={aboutSlider2} alt='aboutSlider2'/>
          </div>
          </div>
          <div>
          <div className='sliderImages objectFit'>
            <img className='borderRadius12' src={aboutSlider4} alt='aboutSlider3'/>
          </div>
          </div>
          <div>
          <div className='sliderImages objectFit'>
            <img className='borderRadius12' src={aboutSlider5} alt='aboutSlider4'/>
          </div>
          </div>
          <div>
          <div className='sliderImages objectFit'>
            <img className='borderRadius12' src={aboutSlider3} alt='aboutSlider4'/>
          </div>
          </div>
        </Slider>
      </div>
    );  
}
export default Slick