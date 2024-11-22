import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../../../Assests/images/foodImage1.jpeg"
import image2 from "../../../../Assests/images/foodImage2.jpeg"
import image3 from "../../../../Assests/images/foodItem10.webp"

const GallerySlider3 = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className="slider-container galleryContainer borderRadius12 objectFit">
    <Slider {...settings}>
      <div className="gallerySlider " >
          <img className='borderRadius12' src={image1} alt='gallerySlider1'/>
        </div>
      
      <div className="gallerySlider ">
        <img className='borderRadius12' src={image2} alt='gallerySlider2' />
      </div>
      <div className="gallerySlider ">
        <img className='borderRadius12' src={image3} alt='gallerySlider3' />
      </div>
      {/* <div className="gallerySlider ">
        <img className='borderRadius12' src={image4} alt='gallerySlider4' />
      </div>
      <div className="gallerySlider ">
        <img className='borderRadius12' src={image5} alt='gallerySlider5' />
      </div>
      <div className="gallerySlider ">
        <img className='borderRadius12' src={image6} alt='gallerySlider5' />
      </div> */}
    </Slider>
  </div>
  )
}

export default GallerySlider3