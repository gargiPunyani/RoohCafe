import React from 'react'
import ContactRight from './ContactRight'
import ContactLeft from './ContactLeft'
import "./index.css"

const Contact = () => {
  return (
    <div className='contactUS primaryColor'>
      <div className='container cntcUs dFlex gap18'>
        <div className='contactLeft'>
            <ContactLeft/>
        </div>
        <div className='contactRight'>
            <ContactRight/>
        </div>
    </div>
    </div>
  )
}

export default Contact