import React, { useState } from 'react'
import style from './MiddleSection.module.css'
import MiddleSectionHeader from "../../Components/HomePageMiddleSection/MiddleSectionHeader/MiddleSectionHeader"
import MiddleSectionMain from '../../Components/HomePageMiddleSection/MiddleSectionMain/MiddleSectionMain'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import LeftSection from '../LeftSection/LeftSection'



function MiddleSection() {

  return (
    <div className={style.main}>
       <div className={style.header}><MiddleSectionHeader /></div>  
       <div className={style.body}>
         <div className={style.sectionmain}><MiddleSectionMain/></div> 
       </div>
       <ProfileCard />
    </div>
  )
}

export default MiddleSection
