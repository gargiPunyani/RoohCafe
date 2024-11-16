import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../../../Assests/images/about2.jpeg"
import image2 from "../../../../Assests/images/roohbar.jpg"
import image3 from "../../../../Assests/images/contactMain.JPG"
import image4 from "../../../../Assests/images/rooh.jpeg"
import image5 from "../../../../Assests/images/roohTent.jpg"
import image6 from "../../../../Assests/images/bookTable2.jpeg"
import image7 from "../../../../Assests/images/gallery7.jpeg"
import image8 from "../../../../Assests/images/roohImages.jpeg"


const GallerySlider4 = () => {
    const settings = {
        dots: false,
      infinite: true,
      speed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1
      };
  return (
    <div className="slider-container objectFit">
    <Slider {...settings}>
      <div className="gallerySlider">
          <img className='borderRadius12' src={image1} alt='gallerySlider1'/>
        </div>
      
      <div className="gallerySlider ">
        <img className='borderRadius12' src={image2} alt='gallerySlider2' />
      </div>
      <div className="gallerySlider ">
        <img className='borderRadius12' src={image5} alt='gallerySlider3' />
      </div>
      <div className="gallerySlider ">
        <img className='borderRadius12' src={image4} alt='gallerySlider4' />
      </div>
      <div className="gallerySlider ">
        <img className='borderRadius12' src={image3} alt='gallerySlider5' />
      </div>
      <div className="gallerySlider ">
        <img className='borderRadius12' src={image6} alt='gallerySlider5' />
      </div>  
      <div className="gallerySlider ">
        <img className='borderRadius12' src={image7} alt='gallerySlider5' />
      </div> 
     <div className="gallerySlider ">
        <img className='borderRadius12' src={image8} alt='gallerySlider5' />
      </div>
      
    </Slider>
  </div>
  )
}

export default GallerySlider4