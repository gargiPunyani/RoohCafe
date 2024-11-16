import React from "react";
import EventSlider1 from "./Slider";
import EventSlider2 from "./Slider2";
import EventSlider3 from "./Slider3";
import Footer from "../../../SharedComponents/Footer"
const EventRight = () => {
  return (
    <div className="eventROuterMost ">
      <div className="eventROuter">
        <div className="eventRInner">
          <div className="eventImages dFlex gap16">
            <div className="eventSec1 text2 borderRadius8 transition textCenter ">
              <div className="eventHeading h4 primaryColor">
                <h4>Events </h4>
              </div>
              <div className="font16 secondaryColor textJustify mt10">
                <p>
                "Our cafe is always buzzing with exciting events, from live music nights to themed brunches and art showcases. We love bringing people together for memorable experiences, whether it's a cozy evening with friends or a special celebration. Keep an eye on our calendar for upcoming events and join us for the next great gathering!"
                </p>
              </div>
            </div>
            <div className="eventSec2 transition objectFit">
              <EventSlider1/>
            </div>
          </div>
          <div className="roohEventSlick dFlex gap12 mt20 objectFit">
            <div className="eventSlick eventSec2 transition ">
              <EventSlider2 />
            </div>
            <div className="celebrities text2 borderRadius8 transition ">
              <div className="h4 uppercase primaryColor textCenter">
                <h4>Celebrity Visits...</h4>
              </div>

              <div className="eventReviews font16 secondaryColor textJustify mt10">
                <p>
                  "Our cafe has been lucky to host several stars during special
                  events, from <strong > [Celebrity 1] </strong> to <strong>[Celebrity 2]</strong> , adding a touch of
                  glamour to our already vibrant atmosphere. Whether celebrating
                  or simply enjoying a meal, these visits remind us of the
                  unique, welcoming experience we strive to create. Stay tuned
                  for more exciting surprises—you never know who might pop in
                  next!"
                </p>
                
              </div>
            </div>
          </div>
          <div className="eventImages dFlex mt20 gap16">
            <div className="eventSec1 text2 borderRadius8 transition textCenter ">
              <div className="eventHeading uppercase h4 primaryColor mt10">
                <h4>Celebrations...</h4>
              </div>
             
              <div className="font16 secondaryColor textJustify mt10">
                <p>
                "Our cafe is the perfect place to celebrate birthdays with loved ones! From intimate gatherings to lively parties, we help make each birthday special with delicious food, drinks, and a warm, inviting atmosphere. Let us take care of the details while you enjoy a memorable celebration—contact us to plan your next birthday bash!"
                </p>
              </div>
            </div>
            <div className="eventSec2 transition objectFit ">
              <EventSlider3/>
            </div>
          </div>
        <div className="footer mt20">
            <Footer/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default EventRight;
