import React from "react";
import menuImage from "../../../Assests/images/MenuPage.webp";
import Navbar from "../../../SharedComponents/Navbar";
import "../index.css";

const MenuLeft = () => {
  return (
    <div className="outerMost ">
      <div className="menubarImage relative">
        <img className="borderRadius16 " src={menuImage} alt="menubar" />
      </div>
      <Navbar />
      <div className="menuHead uppercase h1 absolute primaryColor">
        <h1>Menu</h1>
      </div>
    </div>
  );
};

export default MenuLeft;
