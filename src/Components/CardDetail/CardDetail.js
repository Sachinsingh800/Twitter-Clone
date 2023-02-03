import style from './CardDetail.module.css'
import CommentDialogBox from '../../Atom/CommentDialogBox/CommentDialogBox'
import LikeButton from '../../Atom/LikeButton/LikeButton'
import RetweetButton  from '../../Atom/RetweetButton/RetweetButton'
import Image from '../../Assest/Image/Profile.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'








export default function CardDetail() {
  
    const newData=JSON.parse(localStorage.getItem("userTweets"))
    const [data, setData] = useState(newData)

    useEffect(()=>{
        if(JSON.parse(localStorage.getItem("userTweets"))){
            const newData=JSON.parse(localStorage.getItem("userTweets"))
         setData(newData)
        }
       },[])
     
    return(
             
                 <div className={style.ImageWrapper}>
                     {data.map((item,id)=>
                     <>
                         <div className={style.heading}>
                                <Link to={`/ProfilePage/${item?.id}`}> <img className={style.img} src={Image} alt="Profile"/></Link>   
                                
                               
                                <h2>{item?.name}</h2>
                                 <h5>{item?.handlerName}</h5>
                        </div>
                        <p>{item?.tweets[0]?.tweetText}</p>
                     <img
                       className={style.image}
                         src = {item?.tweets[0]?.tweetPic}    
                     />

                     

                <div className={style.bottomSection}>
                    <CommentDialogBox/>
                    <RetweetButton/>
                     <LikeButton/>
                  </div>

                     </>
                     )}

               
                 </div>
                
    )
}



