import React from 'react'
import image1 from "../../../../Assests/images/about1.JPG"
import image2 from "../../../../Assests/images/gallery2.JPG"
import image3 from "../../../../Assests/images/gallery6.JPG"
import image4 from "../../../../Assests/images/gallery1.JPG"
import image5 from "../../../../Assests/images/gallery4.JPG"
import image6 from "../../../../Assests/images/gallery10.JPG"
import Slider from 'react-slick'


const GallerySlider2 = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
      };
  return (
    <div className="slider-container  borderRadius12 objectFit">
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
      <div className="gallerySlider ">
        <img className='borderRadius12' src={image4} alt='gallerySlider4' />
      </div>
      <div className="gallerySlider ">
        <img className='borderRadius12' src={image5} alt='gallerySlider5' />
      </div>
      <div className="gallerySlider ">
        <img className='borderRadius12' src={image6} alt='gallerySlider5' />
      </div>
    </Slider>
  </div>
  )
}

export default GallerySlider2