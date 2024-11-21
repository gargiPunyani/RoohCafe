import React, { useState } from "react";
import logo from "../../Assests/images/roohLogo.png";
import "./index.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sideNavbar, setSideNAvbar] = useState(false);     

  // const showSidebar  = () => {
  //   setSideNAvbar(!sideNavbar);
  // };
  // const hideSidebar  = () => {
  //   setSideNAvbar(!sideNavbar);
  // };
  const toggleSidebar = () => {
    setSideNAvbar(prevState => !prevState); // This will toggle the state
  };
  
  const hideSidebar = () => {
    setSideNAvbar(false); // Manually close the sidebar
  };

  return(
    <div>
    <div className="headerOuterMost absolute gap18 aiCenter borderRadius12 pointer">
      <div className="navbarOuter transition ">
        <div className="headerInner">
          <ul className="headerStart dFlex gap10 aiCenter jCenter">
            <li className="headerListItem transition borderRadius8 navmenu dFlex flexColumn relative gap8" onClick={toggleSidebar}>
            <span className="firstSpan transition"></span>
            <span className="secondSpan "></span>
            <span className="thirdSpan transition"></span>

            </li>
            <li className="headerLogo ">
              <Link to={"/"}>
              <img src={logo} alt="logo" />
              </Link>
              </li>
            <li className= "headerItem hideOnMobile transition borderRadius12 primaryColor h6 "><Link className="link" to="/menu">Menu</Link></li>
            <li className= "headerItem hideOnMobile transition borderRadius12 primaryColor h6"><Link className="link" to="/about">About</Link></li>
            <li className= "bookTable primaryColor overflow">
         <button className= "bookTableBtn  transition primaryColor pointer borderRadius12 font14"> <Link className="link" to="/reservation">Book A Table</Link></button>

            </li>
            </ul> 
         </div>
         </div>
        </div>

        <div className={`sideNavbarOuter ${sideNavbar ? 'open' : ''}`}>
          <nav className="sideBarInner bg borderRadius12 transition" style={{ display: sideNavbar ? 'block' : 'none' }}>
            <div className="sidebar" >
              <ul className= "sideNavbar dFlex flexColumn sideHeaderStart relative gap25 aiCenter transition jCenter"  >
              <li className="sideHeaderListItem headerListItem absolute transition borderRadius8 navmenu dFlex flexColumn relative gap8" onClick={hideSidebar}>
            <span className="firstSideSpan absolute transition"></span>
            <span className="secondSideSpan absolute "></span>
            </li>
            <li className="h2 sideItems sidebarMenu"> <Link className="link" to= "/menu">Menu </Link></li>
            <li className="h2 sideItems"><Link className="link" to="/about">About</Link></li>
            <li className= "bookTable h2 sideItems primaryColor overflow"> <Link className="link" to="/reservation">Book A Table</Link>
            </li>
            <li className="h2 sideItems"><Link className="link" to='/gallery' >Gallery</Link></li>
            <li className="h2 sideItems"><Link className="link" to='/contact' >Contact Us</Link></li>
            <li className="h2 sideItems"><Link className="link" to='/events' >Events</Link></li>

              </ul>
            </div>

          </nav>
        </div>


      </div>
  )

  };

export default Navbar;
