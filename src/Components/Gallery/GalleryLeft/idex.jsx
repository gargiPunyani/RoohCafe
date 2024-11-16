import React from 'react'
import GalleryImage from "../../../Assests/images/gallery7.jpeg"
import Navbar from '../../../SharedComponents/Navbar'

const GalleryLeft = () => {
  return (
    <div className="galleryOuterMost">
    <div className="galleryOuter relative objectFit">
      <img className="borderRadius16 " src ={GalleryImage} alt="menubar" />
    </div>
    <Navbar />
    <div className="aboutHead uppercase letterSpace5 h1 absolute primaryColor">
      <h1>Gallery</h1>
    </div>
  </div>
  )
}

export default GalleryLeft