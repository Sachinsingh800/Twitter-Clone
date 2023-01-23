
import React, { useState } from 'react'
import {BsSuitHeart} from 'react-icons/bs';
import style from "./LikeButton.module.css"

function LikeButton() {
    const [count ,setCount] = useState(0)
    function Counter(){
        setCount(count +1)
    }
  return (
    <div>
      <button className={style.button}  onClick={Counter}><span className={style.icon}><BsSuitHeart/></span>{count}</button>
    </div>
  )
}

export default LikeButton
