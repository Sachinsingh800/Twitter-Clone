
import { profileDataAtom } from '../../RecoilState/RecoilAtom'
import { useSetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import style from './CardDetail.module.css'
import CommentDialogBox from '../../Atom/CommentDialogBox/CommentDialogBox'
import LikeButton from '../../Atom/LikeButton/LikeButton'
import RetweetButton  from '../../Atom/RetweetButton/RetweetButton'

export default function CardDetail({profileData}) {

    // const setProfileData = useSetRecoilState(profileDataAtom)
    // const nevigate = useNavigate()

    const {
        name ,
        handlerName ,
        tweetText ,
        tweetPic ,
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
                           <h2>{name}</h2>
                            <h5>{handlerName}</h5>
                     </div>
                 
                 <div className={style.ImageWrapper}>
                 <p>{tweetText}</p>
                <img
                    src = {tweetPic}
                    className={style.image}
                />
                 </div>
                
                 <div className={style.bottomSection}>
                    <CommentDialogBox/>
                    <LikeButton/>
                    <RetweetButton/>
                 </div>
                {/* <strong>
                    {id}
                </strong> */}

            </div>
    )
}



