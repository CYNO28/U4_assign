import React from 'react'
import Style from './APCard.module.css'
const Design = (prop) => {
  return (
    <div>
      <div className={Style.card} id={prop.Style=="Apple"?Style.apple:null}>
        <p>{prop.date}</p> 
        <img src={prop.logo}/> 
        <button className={Style.card_btn}>Case Study</button> 
        <h1>{prop.heading}</h1>
        <h1>{prop.subHeading}</h1>
        <p>{prop.devices}</p>

      </div>




    </div>
  )
}

export default Design