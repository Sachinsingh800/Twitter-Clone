import React from 'react'
import CommentDialogBox from '../../../Atom/CommentDialogBox/CommentDialogBox'
import LikeButton from '../../../Atom/LikeButton/LikeButton'
import RetweetButton from '../../../Atom/RetweetButton/RetweetButton'
import style from './Page1.module.css'
import Image from '../../../Assest/Image/Profile.png'

function Page1() {
    const Profile1=[
        {
            name  : 'The White House',
            handlerName : '@The White House' ,
            organization : 'United States government organization',
            followers : 200,
            followings : 400,
            joinedDate : '22 dec 2022',
            tweets : [
                {
                    tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
                    tweetPic : 'https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080',
                    tweetCount : 100,
                    retweetCount : 100 ,
                    likesCount : 100,
                    viewsCount : '102k',
                    TweetReplies : [
                        {
                            name : '',
                            handlerName : '',
                            tweetReplyText : ''
                        },
                        {
                            name : '',
                            handlerName : '',
                            tweetReplyText : ''
                        },
    
                    ]
                },
              
            ],
        },
    ]
  return (
    <>
 
 

    { Profile1.map((item)=>

<>
<div className={style.heading}>
            <img className={style.img} src={Image} alt="Profile"/>
            <h2>{item.name}</h2>
            <h5>{item.handlerName}</h5>
</div>

<div className={style.ImageWrapper}>
             <p>{item.tweets[0].tweetText}</p>
            <img src = {item.tweets[0].tweetPic} className={style.image}/>
</div>
</>

    )}


                 
                
                 <div className={style.bottomSection}>
                    <CommentDialogBox/>
                    <RetweetButton/>
                    <LikeButton/>
                 </div>
              

        
    </>
  )
}

export default Page1

  