import React from 'react'
import menuImage from "../../../Assests/images/menu-main.webp";
import reservation from "../../../Assests/images/bookTable2.jpeg";
import about from "../../../Assests/images/teamHome.jpeg"
import contact from "../../../Assests/images/contactHome.jpeg"
import galleryHome from "../../../Assests/images/galleryHome.JPG"
import { Link } from 'react-router-dom';

const HomeRight = () => {
  return (
    <div className="homeRightOuter dFlex flexColumn gap16  ">
    <div className="menu btnV1 relative">
      <Link to="/menu" className='link'>
      <div className="menuImage transition">
        <img src={menuImage} className="borderRadius12 objectFit" alt="menuImage"
        />
      </div>
      <div className="menuButton">
        <button className="homeRightButtons transition borderRadius8 uppercase pointer absolute primaryColor font16  dFlex gap12">
          <span>Menu </span>
          <span className="arrowContainer">
            <svg className="feather feather-arrow-right arrow firstArrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
            <svg className="feather feather-arrow-right arrow secondArrow"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </button>
      </div>
      </Link>
    </div>
    <div className="reservation btnV1 relative ">
    <Link to={"/reservation"} className='link'>
      <div className="menuImage reservationImage transition">
        <img
          src={reservation}
          className="borderRadius12 objectFit"
          alt="reservationImage"
        />
      </div>
     
      <div className="reservastionButton">
        <button className="homeRightButtons transition borderRadius8 uppercase pointer absolute primaryColor font16  dFlex gap12">
          <span> Reservation </span>
          <span className="arrowContainer">
            <svg className="feather feather-arrow-right arrow firstArrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
            <svg className="feather feather-arrow-right arrow secondArrow"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>

          {/* <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-efbc6c56-80fe-4475-9b37-9684d6e92632, rgb(239, 231, 210))" style={{userSelect:" none", width: "32px", height: "32px", display: "flex", fill:' var(--token-efbc6c56-80fe-4475-9b37-9684d6e92632, rgb(239, 231, 210))', color: "var(--token-efbc6c56-80fe-4475-9b37-9684d6e92632, rgb(239, 231, 210))", flexShrink:" 0"}}><g color="var(--token-efbc6c56-80fe-4475-9b37-9684d6e92632, rgb(239, 231, 210))" weight="light"><path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"></path></g></svg></span> */}
        </button>
      </div>
     
    </Link>
    </div>
    <div className="about btnV1 relative">
      <Link className='link' to={"/events"}>
      <div className="aboutImage menuImage transition">
        <img
          src={about}
          className="borderRadius12 objectFit"
          alt="aboutImage"
        />
      </div>
      <div className="aboutButton">
        <button className="homeRightButtons transition borderRadius8 uppercase pointer absolute primaryColor font16  dFlex gap12">
          <span> Events </span>
          <span className="arrowContainer">
            <svg className="feather feather-arrow-right arrow firstArrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
            <svg className="feather feather-arrow-right arrow secondArrow"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </button>
      </div>
      </Link>
    </div>
    <div className="menu btnV1 relative">
      <Link to="/contact" className='link'>
      <div className="menuImage transition">
        <img src={contact} className="borderRadius12 objectFit" alt="contactImage"
        />
      </div>
      <div className="menuButton">
        <button className="homeRightButtons transition borderRadius8 uppercase pointer absolute primaryColor font16  dFlex gap12">
          <span>Contact </span>
          <span className="arrowContainer">
            <svg className="feather feather-arrow-right arrow firstArrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
            <svg className="feather feather-arrow-right arrow secondArrow"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </button>
      </div>
      </Link>
    </div>
    <div className="reservation btnV1 relative">
      <Link to="/gallery" className='link'>
      <div className="menuImage transition">
        <img src={galleryHome} className="borderRadius12 objectFit" alt="menuImage"
        />
      </div>
      <div className="menuButton">
        <button className="homeRightButtons transition borderRadius8 uppercase pointer absolute primaryColor font16  dFlex gap12">
          <span>Gallery </span>
          <span className="arrowContainer">
            <svg className="feather feather-arrow-right arrow firstArrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
            <svg className="feather feather-arrow-right arrow secondArrow"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </button>
      </div>
      </Link>
    </div>
  </div>
  )
}

export default HomeRight