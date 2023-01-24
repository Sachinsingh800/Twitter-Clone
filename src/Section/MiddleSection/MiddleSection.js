import React, { useState } from 'react'
import style from './MiddleSection.module.css'
import MiddleSectionHeader from "../../Components/HomePageMiddleSection/MiddleSectionHeader/MiddleSectionHeader"
import MiddleSectionMain from '../../Components/HomePageMiddleSection/MiddleSectionMain/MiddleSectionMain'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import LeftSection from '../LeftSection/LeftSection'
import ProfilePage from "../../Components/ProfilePage/ProfilePage"



function MiddleSection() {
  const [isToggle,setIsToggle] = useState(false)
  function toggled(){
     setIsToggle(true)
  }
  return (
    <div className={style.main}>
       <div className={style.header}><MiddleSectionHeader /></div>  
    {   isToggle ?   <ProfilePage/> :
    <>
       <div className={style.body}>
         <div className={style.sectionmain}><MiddleSectionMain/></div> 
       </div>
       <ProfileCard />
       {/* <button onClick={toggled}>toggle</button> */}
       </>
    }
    </div>
  )
}

export default MiddleSection
