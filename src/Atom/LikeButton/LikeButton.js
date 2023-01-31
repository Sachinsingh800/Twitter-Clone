
import React, { useState } from 'react'
import {BsSuitHeart} from 'react-icons/bs';
import {FcLike} from 'react-icons/fc';
import style from "./LikeButton.module.css"

function LikeButton() {
    const [isShow, setShow] = useState(false)
    function Counter(){
       setShow(!isShow)
    }
  return (
    <div>
      <button className={style.button}  onClick={Counter}><span className={style.icon}>{isShow ? <span style={{fontSize:"20px"}}><FcLike/></span> : <BsSuitHeart/> }</span>{ isShow ? 1 : 0}</button>
    </div>
  )
}

export default LikeButton
