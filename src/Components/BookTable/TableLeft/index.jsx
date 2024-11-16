import React from "react";
import Navbar from "../../../SharedComponents/Navbar";
import BookTable from "../../../Assests/images/bookTable.jpeg";

const TableLeft = () => {
  return (
    <div className=" tableLeftOuter">
      <div className="contactOuterMost ">
        <div className="contactUsImage bookTableImage relative objectFit">
          <img className="borderRadius16 " src={BookTable} alt="menubar" />
        </div>
        <Navbar />
        <div className="bookHead uppercase letterSpace5 h1 absolute primaryColor">
          <h1>
            Book
            <br />A Table
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TableLeft;
