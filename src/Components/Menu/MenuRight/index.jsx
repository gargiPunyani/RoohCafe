import React from 'react'
import {  Maki, Rolls, UraMaki } from '../../../Constant'
import Footer from '../../../SharedComponents/Footer'

const MenuRight = () => {
  return (
    <div className='menuRight'>
        <div className='menuRightOuter'>
            <div className='menuRightInner'>
                <div className='menuListItem'>
                    <ul className='font12 primaryColor dFlex uppercase pointer borderRadius8 gap8 aiCenter jCenter'>
                        <li className='menuItems transition borderRadius8'>Maki</li>
                        <li className='menuItems transition borderRadius8'>Uramaki</li>
                        <li className='menuItems transition borderRadius8'>Special Rolls</li>
                    </ul>
                </div>
                <div className='cuisine '>
                {Maki.map((item)=>{
                    return(
                    <div key={item.id} className='textCenter '>
                         <div className='dFlex jCenter gap8'>
                            <div className='squareIcon'>
                            </div>
                            <div className='lineIcon'>
                                </div>

                        <div className="cuisineHead uppercase h3 primaryColor">
                            <h3>{item.heading}</h3>
                        </div>
                        <div className='lineIcon'>
                        </div>
                        <div className='squareIcon'>
                            </div>
                          
                        </div>
                            <div className='cuisineItems dFlex mt40 '>
                            <div className='cuisineImage'>
                                <img src={item.image} alt='foodImage'/>
                            </div>
                            <div className='ml25 mt20'>
                                <div className='dFlex'>
                            <div className='cuisineName dFlex mAuto '>
                                <div className='h5 primaryColor uppercase'>
                                    <h5>{item.name}</h5>
                                </div>                                
                            </div>
                            <div className='line dotedLine primaryColor'>
                        </div>
                        <div className='price primaryColor h5'>
                            <span>₹ {item.price}</span>
                        </div>
                       </div>

                        <div className='font14 secondaryColor mt10 textJustify'>
                                    <p>{item.aboutDish}</p>
                                </div>
                      </div>
                      </div>

                    </div>)
                })}
                </div>
                <div className='cuisine '>
                {UraMaki.map((item)=>{
                    return(
                    <div key={item.id} className='textCenter '>
                        <div className='dFlex jCenter gap8'>
                            <div className='squareIcon'>
                            </div>
                            <div className='lineIcon'>
                                </div>

                        <div className="cuisineHead uppercase primaryColor">
                            <h2>{item.heading}</h2>
                        </div>
                        <div className='lineIcon'>
                        </div>
                        <div className='squareIcon'>
                            </div>
                          
                        </div>
                            <div className='cuisineItems dFlex mt40 '>
                            <div className='cuisineImage'>
                                <img src={item.image} alt='foodImage'/>
                            </div>
                            <div className='ml25 mt20'>
                                <div className='dFlex'>
                            <div className='cuisineName dFlex mAuto '>
                                <div className='h5 primaryColor uppercase'>
                                    <h5>{item.name}</h5>
                                </div>                                
                            </div>
                            <div className='line'>
                        </div>
                        <div className='price primaryColor h5'>
                            <span>₹ {item.price}</span>
                        </div>
                       </div>

                        <div className='font14 secondaryColor mt10 textJustify'>
                                    <p>{item.aboutDish}</p>
                                </div>
                      </div>
                      </div>

                    </div>)
                })}
                </div>
                <div className='cuisine '>
                {Rolls.map((item)=>{
                    return(
                    <div key={item.id} className='textCenter '>
                        <div className='dFlex jCenter gap8'>
                            <div className='squareIcon'>
                            </div>
                            <div className='lineIcon'>
                                </div>

                        <div className="cuisineHead uppercase primaryColor">
                            <h2>{item.heading}</h2>
                        </div>
                        <div className='lineIcon'>
                        </div>
                        <div className='squareIcon'>
                            </div>
                          
                        </div>
                            <div className='cuisineItems dFlex mt40 '>
                            <div className='cuisineImage'>
                                <img src={item.image} alt='foodImage'/>
                            </div>
                            <div className='ml25 mt20'>
                                <div className='dFlex'>
                            <div className='cuisineName dFlex mAuto pointer '>
                                <div className='h5 primaryColor uppercase'>
                                    <h5>{item.name}</h5>
                                </div>                                
                            </div>
                            <div className='line dotedLine primaryColor'>
                        </div>
                        <div className='price primaryColor h5 pointer'>
                            <span>₹ {item.price}</span>
                        </div>
                       </div>

                        <div className='font14 secondaryColor mt10 textJustify pointer  '>
                                    <p>{item.aboutDish}</p>
                                </div>
                      </div>
                      </div>

                    </div>)
                })}
                </div>
            </div>
        </div>
            <Footer/>
    </div>
  )
}

export default MenuRight