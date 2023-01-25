import React from 'react'
import style from './ProfileSectionHeader.module.css'
import {useNavigate} from "react-router-dom"
function ProfileSectionHeader() {
   const navigate = useNavigate()

   
  function handleClick(){
   navigate("/HomePage")
  }
  return (
    <div className={style.main}>

         <span onClick={handleClick}>←</span>
        <div className={style.userName}>
        <h4>User Name</h4>
        <h6>1 Tweet</h6>
        </div>
    
       </div>

  )
}

export default ProfileSectionHeader
