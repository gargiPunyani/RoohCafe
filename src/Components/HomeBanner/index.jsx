import React from "react";
import "./index.css";
import bgVideo from "../../Assests/videos/bgvideo.mp4";
import Navbar from "../../SharedComponents/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import HomeRight from "./HomeRight";
import Footer from "../../SharedComponents/Footer";
// import { Link } from "react-router-dom";

const Home1 = () => {
  return (
    <div className="homeOuterMost ">
      <div className="homeWrapper container">
      <div className="homeOuter dFlex gap18">
        <div className="homeLeft">
          <div className="homeInner ">
            <div className="homeVideo relative objectFit borderRadius16 pointer">
              <video src={bgVideo} type="video" autoPlay loop muted></video>

              <div className="homeSocial dFlex absolute borderRadius12">
                <div className="socialMediaIcons ttransition primaryColor mr10">
                  {/* <Link to="https://www.instagram.com/rooh.theroofyardrestro/?hl=en"> */}
                  <FontAwesomeIcon icon={faInstagram} />

                  {/* </Link> */}
                </div>
                <div className="socialMediaIcons ttransition primaryColor mr10">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="socialMediaIcons ttransition primaryColor mr10">
                  <FontAwesomeIcon icon={faXTwitter} />
                </div>
              </div>
              <div>
                <Navbar />
              </div>
              <div className="homeHead h1 primaryColor uppercase letterSpace8 absolute lh12">
                <h1>
                  Sushi <br />
                  Sensation
                </h1>
              </div>
            </div>
          </div>
        </div>
       <div className="homeRight">
        <HomeRight/>
       </div>
      </div>
      <div className="mt20">
        <Footer/>
      </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Home1;
