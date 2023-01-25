
import { profileDataAtom } from '../../RecoilState/RecoilAtom'
import { useSetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import style from './CardDetail.module.css'
import CommentDialogBox from '../../Atom/CommentDialogBox/CommentDialogBox'
import LikeButton from '../../Atom/LikeButton/LikeButton'
import RetweetButton  from '../../Atom/RetweetButton/RetweetButton'
import Image from '../../Assest/Image/Profile.png'
import { Link } from 'react-router-dom'


export default function CardDetail({profileData}) {

    // const setProfileData = useSetRecoilState(profileDataAtom)
    // const nevigate = useNavigate()

    const {
        name ,
        handlerName ,
        tweetText ,
        tweetPic ,
        tweets,
        followers ,
        followings ,
        organization,
        id
    } = profileData || {}

    // function handleOnClickProfile () {
    //     nevigate('/profilePage')
    //     setProfileData(profileData)
    // }

    return(

            <div 
                className={style.Wrapper}
                    // onClick = {handleOnClickProfile}
                >
                    <div className={style.heading}>
                       <Link to={"/ProfilePage"}> <img className={style.img} src={Image} alt="Profile"/></Link>   
                           <h2>{name}</h2>
                            <h5>{handlerName}</h5>
                     </div>
                 
                 <div className={style.ImageWrapper}>
                     {tweets.map((item)=>
                     <>
                     <p>{item.tweetText}</p>
                     <img
                         src = {item.tweetPic}
                         className={style.image}
                     />
                     </>
                     )}
               
                 </div>
                
                 <div className={style.bottomSection}>
                    <CommentDialogBox/>
                    <RetweetButton/>
                    <LikeButton/>
                 
                 </div>
                {/* <strong>
                    {id}
                </strong> */}

            </div>
    )
}



