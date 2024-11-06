import React from 'react'
import "./index.css"
import MenuLeft from './MenuLeft'
import MenuRight from './MenuRight'

const Menubar = () => {
  return (
    <div className='menuBar dFlex container gap18'>
      <div className='menuBarLeftOuterMost'>
      <MenuLeft/>
      </div>
      <div className='menuBarRightOuterMost borderRadius12 '>
      <MenuRight/>
      </div>
    </div>
  )
}

export default Menubar