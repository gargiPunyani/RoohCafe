import React from "react";
import GallerySlider2 from "./Slider2";
import GallerySlider3 from "./Slider3";
import GallerySlider4 from "./Slider4";
import Footer from "../../../SharedComponents/Footer"

const GalleryRight = () => {
  return (
    <div className="galleryROuterMost ">
      <div className="galleryROuter">
        <div className="galleryRInner">
          <div className="galleryImages dFlex gap16">
            <div className="gallerySec1 text1 borderRadius8 transition textCenter ">
              <div className="galleryHeading h4 primaryColor mt10">
                <h4>Rooh</h4>
              </div>
              <div className="font16 uppercase primaryColor mt5">
                <p>The Roofyard Cafe & Restaurant</p>
              </div>
              <div className="font16 secondaryColor textJustify mt20">
                <p>
                  "From artisan coffee to handcrafted cocktails, take a visual
                  tour of our space where every detail invites you to relax and
                  unwind. Our gallery captures the essence of flavor, atmosphere, and style. Dive in and experience the heart of our cafe and bar."
                </p>
              </div>
            </div>
            <div className="gallerySec2 transition objectFit">
              <GallerySlider4/>
            </div>
          </div>
          <div className="roohGallerySlick dFlex gap12 mt20 objectFit">
            <div className="gallerySlick transition ">
              <GallerySlider2 />
            </div>
            <div className="customers text1 borderRadius8 transition ">
              <div className="h4 uppercase primaryColor mt10 textCenter">
                <h4>Happy Customers...</h4>
              </div>
          
              <div className="galleryReviews font16 secondaryColor textJustify mt20">
                <p>
                  "Rooh Rooftop Cafe offers a delightful dining experience with
                  its stunning rooftop views and chic ambiance. The menu
                  features a diverse selection of dishes, all beautifully
                  presented and bursting with flavor. I particularly enjoyed
                  their innovative cocktails and the relaxed, yet sophisticated
                  atmosphere. The staff were attentive and made sure we had a
                  great time!! "
                </p>
                <div className="mt10 dFlex gap25"> 
                  <p>
                    <strong>Food:</strong> 5
                  </p>
                  <p>
                    <strong>Service:</strong> 5
                  </p>
                  <p>
                    <strong>Atmosphere:</strong> 5
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="galleryImages dFlex mt20 gap16">
            <div className="gallerySec1 text1 borderRadius8 transition textCenter ">
              <div className="galleryHeading uppercase h4 primaryColor mt20">
                <h4>Dining with Style</h4>
              </div>
              <div className="font12 mt5 uppercase primaryColor">
                <p>A culture of enjoyment at the highest Level</p>
              </div>
              <div className="font16 secondaryColor textJustify mt20">
                <p>
                "From fresh bites to indulgent plates, explore the delicious creations that make every visit a culinary experience. Indulge your senses with our vibrant, flavorful dishes—each one designed to elevate your cafe and bar experience"
                </p>
              </div>
            </div>
            <div className="gallerySec2 transition objectFit ">
             <GallerySlider3/>
            </div>
          </div>

        <div className="footer mt25">
          <Footer/>
          </div> 
      </div>
        </div>
    </div>
  );
};

export default GalleryRight;
