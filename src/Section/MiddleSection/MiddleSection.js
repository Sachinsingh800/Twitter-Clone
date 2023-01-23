import React from 'react'
import style from './MiddleSection.module.css'
import MiddleSectionHeader from "../../Components/HomePageMiddleSection/MiddleSectionHeader/MiddleSectionHeader"
import MiddleSectionMain from '../../Components/HomePageMiddleSection/MiddleSectionMain/MiddleSectionMain'
import MiddleSectionContent from '../../Components/HomePageMiddleSection/MiddleSectionContent/MiddleSectionContent'

function MiddleSection() {
  return (
    <div className={style.main}>
       <div className={style.header}><MiddleSectionHeader /></div>  
       <div className={style.body}>
         <div className={style.sectionmain}><MiddleSectionMain/></div> 
         <MiddleSectionContent />
       </div>
    </div>
  )
}

export default MiddleSection
