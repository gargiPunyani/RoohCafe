import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../../../Assests/images/gallery21.JPG";
import image2 from "../../../../Assests/images/gallery13.JPG";
import image3 from "../../../../Assests/images/gallery23.JPG";
import image4 from "../../../../Assests/images/gallery14.JPG";
import image5 from "../../../../Assests/images/gallery19.JPG";
import image6 from "../../../../Assests/images/gallery11.JPG";
import image7 from "../../../../Assests/images/gallery19.JPG";
import image8 from "../../../../Assests/images/gallery20.JPG";

const GallerySlider1 = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3300,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container galleryContainer objectFit">
      <Slider {...settings}>
        <div className="gallerySlider">
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
        <div className="gallerySlider ">
          <img className='borderRadius12' src={image7} alt='gallerySlider5' />
        </div> 
       <div className="gallerySlider ">
          <img className='borderRadius12' src={image8} alt='gallerySlider5' />
        </div>
        
      </Slider>
    </div>
  );
};

export default GallerySlider1;
