import React from "react";
import OpenTime from "./OpenTime";
import food1 from "../../../Assests/images/foodImage1.jpeg";
import food2 from "../../../Assests/images/contact1.JPG";
import food3 from "../../../Assests/images/gallery7.jpeg";
import food4 from "../../../Assests/images/foodImage2.jpeg";
import Address from "./Address";
import Footer from "../../../SharedComponents/Footer"

const ContactRight = () => {
  return (
    <div className="contactRightOuterMost">
      <div className="contactRightOuter">
        <div className="contactRightInner dFlex gap16">
          <div className="openTime">
            <OpenTime />
          </div>
          <div className="foodImages">
            <div>
              <div className="dFlex gap8">
                <div className="foodItemImage transition objectFit borderRadius8">
                  <img src={food1} alt="foodItem1" />
                </div>
                <div className="foodItemImage transition objectFit borderRadius8">
                  <img src={food2} alt="fooditem2" />
                </div>
              </div>
              <div className="dFlex gap8 mt10">
                <div className="foodItemImage transition objectFit borderRadius8">
                  <img src={food3} alt="foodItem3" />
                </div>
                <div className="foodItemImage transition objectFit borderRadius8">
                  <img src={food4} alt="foodItem4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mapLocation dFlex gap16 mt10 ">
          <div className="map relative ">
            <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29342.698344714!2d72.60895513476562!3d23.176137800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2ba6020bc05b%3A0x234fdd5f13206a65!2sRooh%20The%20Roofyard%20Cafe%20And%20Restaurant!5e0!3m2!1sen!2sin!4v1730987642463!5m2!1sen!2sin"
              width="100%"
              height="270"
              style={{ border: 0, borderRadius: 8, opacity:0.8 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="routeButton btnV1 uppercase">
        <button className="routeRightButton transition borderRadius8 uppercase pointer absolute secondaryColor font16  dFlex gap12">
          <span> Show Route</span>
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
          </div>

          <div className="location">
            <Address/>
          </div>
        </div>

        <div className="footer mt20">
            <Footer/>
        </div>
      </div>
    </div>
  );
};

export default ContactRight;
