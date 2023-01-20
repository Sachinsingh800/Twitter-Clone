import React from 'react'
import style from './MiddleSection.module.css'
import MiddleSectionHeader from '../../Components/MiddleSectionHeader/MiddleSectionHeader'
import MiddleSectionMain from '../../Components/MiddleSectionMain/MiddleSectionMain'
import MiddleSectionCard from '../../Components/MiddleSectionCard/MiddleSectionCard'
import MiddleSectionContent from '../../Components/MiddleSectionContent/MiddleSectionContent'
function MiddleSection() {
  return (
    <div className={style.main}>
       <div className={style.header}><MiddleSectionHeader /></div>  
       <div className={style.body}>
         <div className={style.sectionmain}><MiddleSectionMain/></div> 
         <MiddleSectionCard />
         <MiddleSectionContent />
       </div>
    </div>
  )
}

export default MiddleSection
