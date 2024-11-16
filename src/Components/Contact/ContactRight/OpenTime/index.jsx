import React from 'react'
import { dateTime } from '../../../../Constant'

const OpenTime = () => {
  return (
    <div className='openHours'>
        <div className='openTimeOuter textCenter borderRadius12'>
            <div className='openTimeInner'>
                <div className='time font24 uppercase'>
                    <h3>Opening Hour</h3>
                </div>
                <div className='dayAndTime mt20'>
                    {dateTime.map((item)=>{
                        return(
                            <div className='dFlex gap16 pointer' key={item.id}>
                                <div className='font14 '>
                                <p>{item.day}</p>
                                
                            </div> 
                            <div className='line' >
                            </div>
                            <div className='font14 dFlex gap16' >
                                <div>
                                   <p> 5:30 pm</p>
                                </div>
                                <div>
                                    <p>1:45 am</p>
                                </div>
                            </div>
                        </div>
                            
                        )
                    })}

                </div>
            </div>
        </div>
    </div>
  )
}

export default OpenTime