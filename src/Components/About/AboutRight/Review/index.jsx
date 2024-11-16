import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { review } from '../../../../Constant'

const Review = () => {
  return (
    <div className='reviewOuterMost'>
        <div className='reviewOuter'>
            <div className='reviewInner dFlex gap16 mt25 borderRadius12'>
                {review.map((item)=>{
                    return(
                        <div className='review dFlex primaryColor borderRadius12 textCenter jCenter' key={item.id}>
                            <div className=''>
                        <div className='fontStar font16 primaryColor '>
                            <FontAwesomeIcon icon={faStar} className='starIcon'/>    
                            <FontAwesomeIcon icon={faStar} className='starIcon'/>                      
                            <FontAwesomeIcon icon={faStar} className='starIcon'/>                      
                            <FontAwesomeIcon icon={faStar} className='starIcon'/>                      
                            <FontAwesomeIcon icon={faStar} className='starIcon'/>                      
                        </div>
                        <div className='uppercase'>
                            <div className='reviewerName font24 '>
                            <h3>{item.name}</h3>
                            </div>
                            <div className='reviewFood font12 mt5 secondaryColor '>
                                <p>{item.review}</p>
                                </div>
                                
                        </div>
                        </div>

    
                    </div>
                    )
                })}
                
            </div>
        </div>
    </div>
  )
}

export default Review