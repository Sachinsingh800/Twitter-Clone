import React from 'react'
import style from './RightSideCard.module.css'
import { BsThreeDots} from 'react-icons/bs'

function RightSideCard() {
  return (
    <div className={style.main}>
        <div>
        <div className={style.trend}>Sport - Trending</div>  
       <div className={style.hastag}>#AINassr</div> 
        <div className={style.trend}>Trending with <span style={{color:"blue"}}>#PSGRCSA</span></div> 
        </div>
          <div className={style.icon}>< BsThreeDots/></div>
    </div>
  )
}

export default RightSideCard
