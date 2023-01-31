import React from 'react'
import style from './UserProfileSection.module.css'
import ProfileSectionHeader from '../ProfileSectionHeader/ProfileSectionHeader'
import Image from '../../Assest/Image/Profile.png'
import { useNavigate } from 'react-router-dom'

function UserProfileSection() {
       const navigate = useNavigate()
    const newdata=JSON.parse(localStorage.getItem("userData"))
    const data=[newdata]
    function handleClick(){
        navigate("/HomePage")
       }
  return (
    <div className={style.header}>
        <span onClick={handleClick}>←</span>
        <div className={style.head}>
          {data.map((item)=>
            <h4>{item.Name}</h4>
          )}
      
        <h6>1 Tweet</h6>
        </div>

      <div>

<div  className={style.userProfiledetails}>

{data.map((elem)=>

<div className={style.main}>
<div className={style.body}>
   <div className={style.firstdiv}></div>
                     <div className={style.seconddiv}>
                         <div className={style.userDetails}>
                         <h2>{elem.Name}</h2>
                         <h4>{elem.Email}</h4>
                       <h6 className={style.userName}></h6>
                          <h6>&#128197; 20 dec 2000</h6>
                           <h6>{`30k  Following    20k Followers`}</h6>
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
</div>
    
      </div>
    </div>
  )
}

export default UserProfileSection
