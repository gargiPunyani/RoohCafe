import React from "react";
import { Link } from "react-router-dom";
import roohEvent1 from "../../../Assests/images/event4.JPG";
import roohEvent2 from "../../../Assests/images/about7.JPG";
import roohEvent3 from "../../../Assests/images/event13.jpg";
import roohEvent4 from "../../../Assests/images/about9.JPG";
import roohEvent5 from "../../../Assests/images/event5.JPG";
import roohEvent6 from "../../../Assests/images/event7.JPG";
import roohEvent7 from "../../../Assests/images/gallery4.JPG";
import roohEvent8 from "../../../Assests/images/gallery5.JPG";
import roohEvent9 from "../../../Assests/images/event15.jpeg"

import UpcomingEvents from "./Slider";
import Footer from "../../../SharedComponents/Footer";

const EventBottom = () => {
  return (
    <div className="eventBottomOuterMost mt25">
      <div className="eventBottomOuter">
        <div className="upcomingEvent">
          <div className="h2 textCenter">
            <h2>Upcoming Events</h2>
          </div>
          <div>
            <UpcomingEvents />
          </div>
        </div>
        <div className="eventBottom dFlex mt20 gap16">
          <div className="eventBLeft eventHappens roohEvent1Image objectFit  borderRadius12">
            <img src={roohEvent1} alt="event1" />
          </div>
          <div className="eventBottomInner event1 dFlex flexColumn borderRadius12 textCenter ">
            <div className="h4 eventBHead">
              <h4>Rooh Events</h4>
            </div>
            <div className="font16 mt10 textJustify">
              <p>
                "At our cafe, there's always something exciting happening! From
                live music evenings to art exhibitions, book readings, and
                themed food festivals, we keep the energy alive with a variety
                of events. Join us for a memorable experience filled with great
                vibes, delicious food, and delightful company. Stay tuned to our
                events page for the latest updates and schedules!"
              </p>
            </div>
            <div className="roohButtons dFlex gap18 mt25 jCenter aiCenter">
              <div className="galleryBtn">
                  <button className="bookTableBtn primaryColor borderRadius8 font14">
                <Link className="link bookTableButton" to="/gallery">
                    Gallery
                </Link>
                  </button>
              </div>
              <div className="galleryBtn">
                  <button className="bookTableBtn primaryColor borderRadius8 font14">
                  <Link className="link bookTableButton" to="/contact">
                    Contact Us
                </Link>
                  </button>
              </div>
            </div>
          </div>
          <div className="eventBRight event2 eventHappens objectFit  borderRadius12">
            <img src={roohEvent2} alt="event2" />
          </div>
        </div>
        <div className="eventBottom mt25 dFlex gap16">
          <div className="celebrityVisit aboutCeleb borderRadius8 dFlex flexColumn">
            <div className="h4 eventBHead textCenter ">
              <h4>Celebrities Visit </h4>
            </div>
            <div className="font16 mt10 lh12 textJustify">
              <p className="specialPerson2">
                Experience the star-studded magic at our café! We’re proud to
                host special events featuring celebrity visits that add a touch
                of glamour and excitement. From renowned artists and authors to
                film stars and influencers, our guests bring unforgettable charm
                to the occasion. Don’t miss the chance to enjoy great company,
                exclusive interactions, and memorable moments. Follow us for
                updates on upcoming celebrity appearances!
              </p>
              <p className="specialPerson mt5">
                "Our café has been graced by the presence of celebrated
                personalities like <strong>Malhar Takkar</strong>,{" "}
                <strong>Mitra Gadhavi</strong> and{" "}
                <strong>Nizami Brothers</strong> during our special events.
                Their visits bring an extra sparkle, creating unforgettable
                moments for our guests. Join us at our upcoming events to catch
                a glimpse of your favorite stars and share in the excitement of
                these exclusive occasions!"
              </p>
            </div>
          </div>
          <div className="celebrityCame celebImage borderRadius8 objectFit">
            <img src={roohEvent3} alt="event3" />
          </div>
          <div className="celebrityVisit specialPeople borderRadius8 dFlex flexColumn">
            <div className="h4 eventBHead textCenter  uppercase">
              <h4>Special People </h4>
            </div>
            <div className="font16 mt10 lh12 textJustify">
              <p>
                "Our café has been graced by the presence of celebrated
                personalities like <strong>Malhar Takkar</strong>,{" "}
                <strong>Mitra Gadhavi</strong> and{" "}
                <strong>Nizami Brothers</strong> during our special events.
                Their visits bring an extra sparkle, creating unforgettable
                moments for our guests. Join us at our upcoming events to catch
                a glimpse of your favorite stars and share in the excitement of
                these exclusive occasions!"
              </p>
            </div>
          </div>
        </div>
        <div className="eventBottom mt25 dFlex gap16">
          <div className="eventBLeft eventHappening objectFit  borderRadius12">
            <img src={roohEvent4} alt="event1" />
          </div>
          <div className="eventBInner dFlex flexColumn borderRadius12 textCenter ">
            <div className="h4 eventBHead">
              <h4>Rooh Events</h4>
            </div>
            <div className="font16 mt10 textJustify">
              <p>
                "Celebrate life’s special moments at our café! Whether it’s a
                birthday, anniversary, or any milestone, we create the perfect
                setting to make your day truly memorable. With delightful décor,
                customized menus, and a warm ambiance, our café is the ideal
                spot to host your celebrations. Let us add a touch of magic to
                your special occasion and make it unforgettable for you and your
                loved ones!"
              </p>
            </div>
          </div>
          <div className="eventBRight eventHappening objectFit roohEvent2Image  borderRadius12">
            <img src={roohEvent5} alt="event2" />
          </div>
        </div>
        <div className="eventBottom roohInsideCeleb mt25 dFlex gap16">
          <div className="celebrityVisit borderRadius8 dFlex flexColumn">
            <div className="h4 eventBHead textCenter ">
              <h4>Birthday Celebrations </h4>
            </div>
            <div className="font16 mt10 lh12 textJustify">
              <p>
                "Make your birthday unforgettable at our café! With a cozy
                ambiance, delicious treats, and personalized décor, we create
                the perfect setting to celebrate your special day. Whether it’s
                an intimate gathering or a lively party, our team ensures every
                detail is just right. Let us help you create memories that will
                last a lifetime!"
              </p>
            </div>
          </div>
          <div className="celebration borderRadius8 objectFit">
            <img src={roohEvent6} alt="event3" />
          </div>
          <div className="celebrityVisit event1 borderRadius8 dFlex flexColumn">
            <div className="h4 eventBHead textCenter ">
              <h4>Anniversary Celebrations </h4>
            </div>
            <div className="font16 mt10 lh12 textJustify">
              <p>
                "Celebrate your love story at our café! Whether it’s your first
                anniversary or a milestone celebration, we provide the perfect
                romantic setting to make your day extra special. Enjoy a cozy
                ambiance, delicious food, and personalized touches to create
                unforgettable memories. Let us make your anniversary celebration
                truly magical!"
              </p>
            </div>
          </div>
          <div className="celebration event2 borderRadius8 objectFit">
            <img src={roohEvent7} alt="event3" />
          </div>
        </div>
        <div className="eventBottom roohInsideCeleb mt25 dFlex gap16">
          <div className="celebration event3 borderRadius8 objectFit">
            <img src={roohEvent8} alt="event3" />
          </div>
          <div className="celebrityVisit event4 borderRadius8 dFlex flexColumn">
            <div className="h4 eventBHead textCenter ">
              <h4>Live Singing </h4>
            </div>
            <div className="font16 mt10 lh12 textJustify">
              <p>
                "Unwind your weekends with the magic of live singing at our
                café! Experience soulful melodies and vibrant performances by
                talented artists as you enjoy our delicious food and drinks.
                Perfect for music lovers, our live singing evenings create an
                enchanting ambiance to relax, connect, and celebrate. Join us
                every weekend for a musical treat that will leave you wanting
                more!"
              </p>
            </div>
          </div>
          <div className="celebration event5 borderRadius8 objectFit">
            <img src={roohEvent9} alt="event3" />
          </div>
          <div className="celebrityVisit event6 borderRadius8 dFlex flexColumn">
            <div className="h4 eventBHead textCenter ">
              <h4>Valentine Week Celebrations </h4>
            </div>
            <div className="font16 mt10 lh12 textJustify">
              <p>
                "Join us for a week filled with romance, delicious treats, and
                unforgettable moments. From February 7th to 14th, we’re offering
                special themed menu items, cozy ambiance, and exciting
                activities to make this season of love extra special. Whether
                you're sharing a sweet moment with a loved one or enjoying time
                with friends, our café is the perfect place to celebrate. Don't
                miss our exclusive Valentine’s Day specials and surprises – love
                is in the air, and we can't wait to share it with you!"
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer mt25">
        <Footer />
      </div>
    </div>
  );
};

export default EventBottom;
