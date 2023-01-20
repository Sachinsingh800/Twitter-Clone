import React from 'react'
import style from './MiddleSectionMain.module.css'
import Image from '../../Assest/Image/Profile.png'

function MiddleSectionMain() {
  return (
    <div className={style.main}>
      <img className={style.img} src={Image} alt="Profile" />
      <input placeholder="What's  happening ?"/> 
      <hr className={style.line}/>
      <button className={style.button}>Tweet</button>
    </div>
  )
}

export default MiddleSectionMain
