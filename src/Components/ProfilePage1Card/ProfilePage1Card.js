import React  from 'react'
import style from './ProfilePage1Card.module.css'
import Image from "../../Assest/Image/Profile.png"
import { useParams } from 'react-router-dom'
import { IspostAtom } from '../../RecoilState/RecoilAtom'
import { useRecoilValue } from 'recoil'


function ProfilePage1Card() {
  const tweetData=useRecoilValue(IspostAtom)

  
  const id = useParams();
  const uid=id.id
  // console.log(uid)

  const data= tweetData.filter((item)=>{
    return uid==item.id
  })
    
console.log(data)
 
  return (
 <>
 {data.map((elem)=>

<div className={style.main}>
<div className={style.body}>
   <div className={style.firstdiv}></div>
                     <div className={style.seconddiv}>
                         <div className={style.userDetails}>
                         <h2>{elem.name}</h2>
                       <h6 className={style.userName}>{elem.handlerName}</h6>
                          <h6>&#128197; {elem.joinedDate}</h6>
                           <h6>{`${elem.followings} Following    ${elem.followers} Followers`}</h6>
                          </div>


                       <div className={style.btns}>
                           <button>tweet</button>
                            <button>tweet & replies</button>
                            <button>Media</button>
                           <button>Likes</button>
                        </div>

                        
                     </div>
<img src={Image} className={style.profileimg}></img>
</div>

</div>



 )}

   
</> 
  )
}

export default ProfilePage1Card
