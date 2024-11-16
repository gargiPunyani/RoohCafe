import React from 'react'
import TableLeft from './TableLeft'
import TableRight from './TableRight'
import "./index.css"

const BookTable = () => {
  return (
    <div className='reserveTable'>
        <div className='container'>
          <div className=' tableReservation dFlex gap16 primaryColor'>
            <div className='tableLeft'>
                <TableLeft/>    
            </div>    
            <div className='tableRight'>
                <TableRight/>
            </div>
            </div>
        </div> 
    </div>
  )
}

export default BookTable