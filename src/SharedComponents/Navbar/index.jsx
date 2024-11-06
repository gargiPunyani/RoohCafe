import React, { useState } from "react";
import logo from "../../Assests/images/logo.webp";
import "./index.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [sideNavbar, setSideNAvbar] = useState(false);

  // const showSidebar = () => {
  //   setSideNAvbar(!sideNavbar);
  // };

  return(
    <div className="headerOuterMost absolute gap18 aiCenter borderRadius12 pointer">
      <div className="navbarOuter ">
        <div className="headerInner">
          <ul className="headerStart dFlex gap8 aiCenter jCenter">
            <li className="headerListItem transition borderRadius8 navmenu dFlex flexColumn relative gap8">
            <span className="firstSpan transition"></span>
            <span className="secondSpan "></span>
            <span className="thirdSpan transition"></span>

            </li>
            <li className="headerLogo hideOnMobile">
              <Link to={"/"}>
              <img src={logo} alt="logo" />
              </Link>
              </li>
            <li className= "headerItem hideOnMobile transition borderRadius12 primaryColor font12 "><Link className="link" to="/menu">Menu</Link></li>
            <li className= "headerItem hideOnMobile transition borderRadius12 primaryColor font12"><Link className="link" to="/about">About</Link></li>
            <li className= "bookTable primaryColor overflow">
         <button className= "bookTableBtn  transition primaryColor pointer borderRadius12 font12">Book A Table</button>

            </li>
            </ul> 
         </div>
        </div>
      </div>
  )

  };

export default Navbar;
