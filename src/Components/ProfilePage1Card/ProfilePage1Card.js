import React from 'react'
import style from './ProfilePage1Card.module.css'
import Image from "../../Assest/Image/Profile.png"
import { useParams } from 'react-router-dom'


function ProfilePage1Card() {
  const id = useParams();
  console.log("userId" , id);
  return (
    <div className={style.main}>
          <div className={style.body}>
             <div className={style.firstdiv}></div>
                               <div className={style.seconddiv}>
                                   <div className={style.userDetails}>
                                   <h2>The White House</h2>
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
  )
}

export default ProfilePage1Card
