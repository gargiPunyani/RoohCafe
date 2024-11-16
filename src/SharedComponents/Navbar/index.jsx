import React from "react";
import logo from "../../Assests/images/roohLogo.png";
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
          <ul className="headerStart dFlex gap10 aiCenter jCenter">
            <li className="headerListItem transition borderRadius8 navmenu dFlex flexColumn relative gap8">
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
  )

  };

export default Navbar;
