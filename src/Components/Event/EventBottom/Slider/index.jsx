import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../../../Assests/images/eventSlider.jpeg"
import image2 from "../../../../Assests/images/event1.jpg"
import image3 from "../../../../Assests/images/event12.JPG"
import { Link } from 'react-router-dom';

const UpcomingEvents = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        speed: 4000,
        initialSlide: 0,
        // autoplay: true,
        // autoplaySpeed: 500,
        // cssEase: "linear",
        responsive: [
          {
            breakpoint: 1080,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
             
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 776,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
        
      }
  return (
    <div className="slider-container upcomingEventSlider gap8 objectFit">
            
      <Slider {...settings}>
      <div className='eventHappeningSoon'>
    <div className='eventSlider relative borderRadius12'>
        <div className='eventSliderImage  borderRaius8'>
            <img src={image1} alt='event1' />
        </div>
        <div>
          <button className= "bookTableBtn  upcomingEventBook absolute secondaryColor borderRadius8 font16">
          <Link className='link bookTableButton' to="/reservation">Book Now </Link>
          </button>
        </div>
        <div className='eventBooking transition absolute textCenter'>
            <h3 className='h3'> To Book Your Seat fill the form</h3>
            <h3 className='mt5'> Our Team will contact you soon</h3>
            <Link className='link' to={"/reservation"}>
            <p className='font14 mt10 secondaryColor borderRadius8 eventBook bookTableBtn'>Book Here</p>
            </Link>
        </div>
        <div className='eventDatePrice dFlex jBetween mt10'>
        <div className='upcomingEventDate h5 '>
          <h5 >Dec 25, 2024 </h5>
        </div>
        <div className='eventPrice h5'>
          <h5>₹ 2000</h5>
        </div>
        </div>
        <div className='secondaryImage mt5 secondaryColor h6'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus reprehenderit non ipsum totam odit, asperiores alias, inventore accusamus amet minus dolorum ratione rerum numquam? Perspiciatis eligendi autem cum quae cupiditate.</p>
        </div>
        </div>
    </div>        
    <div className='eventHappeningSoon'>
        <div className='eventSlider relative borderRadius12 '>
        <div className=' eventSliderImage  borderRadius8'>
            <img src={image2} alt='event1' />
        </div>
        <div>
          <button className= "bookTableBtn upcomingEventBook absolute secondaryColor borderRadius8 font16"><Link className='link bookTableButton' to="/reservation">
          </Link> Book Now</button>
        </div>
        <div className='eventBooking transition absolute textCenter'>
            <h3 className='h3 transition'> To Book Your Seat fill the form</h3>
            <h3 className='mt5's>Our Team will contact you soon</h3>
            <Link className='link' to={"/reservation"}>
            <p className='eventBook font14 mt10 secondaryColor borderRadius8  mt5 bookTableBtn '>Book Here</p>
            </Link>
        </div>
        <div className='eventDatePrice dFlex jBetween mt10'>
        <div className='upcomingEventDate h5 '>
          <h5 >Jan 01, 2025</h5>
        </div>
        <div className='eventPrice h5'>
          <h5>₹ 2000</h5>
        </div>
        </div>
        <div className='secondaryImage mt5 secondaryColor h6'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus reprehenderit non ipsum totam odit, asperiores alias, inventore accusamus amet minus dolorum ratione rerum numquam? Perspiciatis eligendi autem cum quae cupiditate.</p>
        </div>
        </div>
    </div>
    <div className='eventHappeningSoon'>
    <div className='eventSlider relative borderRadius12 '>
        <div className='  eventSliderImage  borderRadius8'>
            <img src={image3} alt='event1' />
        </div>
        <div>
          <button className= "bookTableBtn upcomingEventBook absolute secondaryColor borderRadius8 font16">
          <Link className='link' to="/reservation">
            Book Now </Link></button>
        </div>
        <div className='eventBooking transition absolute textCenter'>
            <h3 className='h3'> To Book Your Seat fill the form</h3>
            <h3 className='mt5'>Our Team will contact you soon</h3>
            <Link className='link' to={"/reservation"}>
            <p className='font14 mt10 secondaryColor borderRadius8 eventBook bookTableBtn '>Book Here</p>
            </Link>
        </div>
        <div className='eventDatePrice dFlex jBetween mt10'>
        <div className='upcomingEventDate h5 '>
          <h5 >Jan 14, 2025 </h5>
        </div>
        <div className='eventPrice h5'>
          <h5>₹ 2000</h5>
        </div>
        </div>
        <div className='secondaryImage mt5 secondaryColor h6'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus reprehenderit non ipsum totam odit, asperiores alias, inventore accusamus amet minus dolorum ratione rerum numquam? Perspiciatis eligendi autem cum quae cupiditate.</p>
        </div>
        </div>
    </div>
      </Slider>
    </div>
  )
}

export default UpcomingEvents