

import style from './CardDetail.module.css'
import CommentDialogBox from '../../Atom/CommentDialogBox/CommentDialogBox'
import LikeButton from '../../Atom/LikeButton/LikeButton'
import RetweetButton  from '../../Atom/RetweetButton/RetweetButton'
import Image from '../../Assest/Image/Profile.png'
import { Link } from 'react-router-dom'
import { IspostAtom } from '../../RecoilState/RecoilAtom'
import { useRecoilValue } from 'recoil'








export default function CardDetail() {
    const tweetData=useRecoilValue(IspostAtom)
    // console.log(tweetData)
    // const [data, setData] = useState([])
   
    // console.log(data)
 
// useEffect(()=>{
//     const Data=JSON.parse(localStorage.getItem("userTweets")) 
//     setData(Data)
// },[data])
 
console.log(tweetData)


    return(



                              
                 <div className={style.ImageWrapper}>
                     {tweetData.map((item,id)=>
                     <>
                         <div className={style.heading}>
                                <Link to={`/ProfilePage/${item?.id}`}> <img className={style.img} src={Image} alt="Profile"/></Link>   
                                
                               
                                <h2>{item?.name}</h2>
                                 <h5>{item?.handlerName}</h5>
                        </div>
                        <p>{item?.tweets[0]?.tweetText}</p>
                     <img
                         src = {item?.tweets[0]?.tweetPic}
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
                
                
                
         

           
            // <><h1>sachin</h1></>
    )
}



