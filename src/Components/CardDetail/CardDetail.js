

import style from './CardDetail.module.css'
import CommentDialogBox from '../../Atom/CommentDialogBox/CommentDialogBox'
import LikeButton from '../../Atom/LikeButton/LikeButton'
import RetweetButton  from '../../Atom/RetweetButton/RetweetButton'
import Image from '../../Assest/Image/Profile.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { IspostAtom } from '../../RecoilState/RecoilAtom'




export default function CardDetail() {
    const [data ,setData] =useState([])

useEffect(()=>{
    const tweetData=JSON.parse(localStorage.getItem("userTweets")) 
    setData(tweetData) 
},[data])
 

console.log(data)

    return(



            <div  className={style.Wrapper} >
                
                 
                 <div className={style.ImageWrapper}>
                     {data.map((item)=>
                     <>
                     <h1>{item.tweet}</h1>
                         <div className={style.heading}>
                                <Link to={"/ProfilePage"}> <img className={style.img} src={Image} alt="Profile"/></Link>   
                                
                               
                                <h2>{item.name}</h2>
                                 <h5>{item.handlerName}</h5>
                        </div>
                     <p>{item.name}</p>
                     <img
                         src = {item.tweetPic}
                         className={style.image}
                     />

                     

                <div className={style.bottomSection}>
                    <CommentDialogBox/>
                    <RetweetButton/>
                     <LikeButton/>
                  </div>

                     </>
                     )}

               
                 </div>
                
                
                
           

             </div>
    )
}



