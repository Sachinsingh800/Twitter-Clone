import React, { useEffect } from 'react'
import style from './ProfilePage1Card.module.css'
import Image from "../../Assest/Image/Profile.png"
import { useParams } from 'react-router-dom'
import { IspostAtom } from '../../RecoilState/RecoilAtom'
import { useRecoilValue } from 'recoil'


function ProfilePage1Card() {
  const tweetData=useRecoilValue(IspostAtom)
  
  const id = useParams();
  const uid=id.id
  console.log(uid)

  const data= tweetData.filter((item)=>{
    return uid==item.id
  })
    

  return (
 <>
     <h1>{data.name}</h1>
     <div className={style.main}>
     <div className={style.body}>
        <div className={style.firstdiv}></div>
                          <div className={style.seconddiv}>
                              <div className={style.userDetails}>
                              <h2>{data.name}</h2>
                            <h6 className={style.userName}>@The White House</h6>
                               <h6>&#128197; Joined January 2023</h6>
                                <h6>3 Following  0 Followers</h6>
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
     
 

</> 
  )
}

export default ProfilePage1Card
