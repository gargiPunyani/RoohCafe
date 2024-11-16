import React from 'react'
import "./index.css"
import GalleryLeft from './GalleryLeft/idex'
import GalleryRight from './GalleryRight'

const Gallery = () => {
  return (
    <div className='gallery'>
        <div className='galleryMain container dFlex gap18 '>
            <div className='galleryLeft'>
                <GalleryLeft/>
            </div>
            <div className=' galleryRight'>
                <GalleryRight/>
            </div>
        </div>
    </div>
  )
}

export default Gallery
