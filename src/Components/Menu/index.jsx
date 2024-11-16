import React from 'react'
import "./index.css"
import MenuLeft from './MenuLeft'
import MenuRight from './MenuRight'

const Menubar = () => {
  return (
    <div className='menuBar bg dFlex container gap18'>
      <div className='menuBarLeftOuterMost'>
      <MenuLeft/>
      </div>
      <div className='menuBarRightOuterMost  '>
      <MenuRight/>
      </div>
    </div>
  )
}

export default Menubar