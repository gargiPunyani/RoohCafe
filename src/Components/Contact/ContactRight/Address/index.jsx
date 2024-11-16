import React from 'react'
import { location } from '../../../../Constant'

const Address = () => {
  return (
    <div className='address'>
        <div className='addressOuterMost'>
            <div className='addressInner borderRadius12'>
                <div className='addressInnerMost'>
                    <div className='font24 uppercase textCenter'>
                        <h3>Get in touch</h3>
                    </div>
                    <div className='mt40 font16'>
                        {location.map((item)=>{
                            return(
                                <div className='dFlex gap25 mt25 font16' key={item.id}>
                                    <div className='uppercase pointer'>
                                        <p>{item.contact}</p>
                                    </div>
                                    <div className='pointer'>
                                        <p>{item.details}</p>
                                    </div>
                                </div>
                            )
                        })}
                        <p></p>


                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Address