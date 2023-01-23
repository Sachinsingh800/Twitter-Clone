import React from 'react'
import style from './HomeProfileComment.module.css'
import { useState } from 'react';

import {IoMdRepeat} from 'react-icons/io';
import {BsSuitHeart} from 'react-icons/bs';
import {BiBarChart} from 'react-icons/bi';
import CommentDialogBox from './CommentDialogBox/CommentDialogBox';


function HomeProfileComment() {
    const [count ,setCout] =useState(0)
    const [count1 ,setCout1] =useState(0)
    const [count2 ,setCout2] =useState(0)
    const [count3 ,setCout3] =useState(0)
  
    function counter(){
      setCout(count +1)
    }
    function counter1(){
      setCout1(count1 +1)
    }
    function counter2(){
      setCout2(count2 +1)
    }
    function counter3(){
      setCout3(count3 +1)
    }
  return (
    <div>
      <div className={style.icon}>
          <CommentDialogBox />
        <button className={style.button} onClick={counter2}><BsSuitHeart/><span>{count2}</span> </button>
      
      </div>
    </div>
  )
}

export default HomeProfileComment
