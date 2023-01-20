import React from 'react'
import style from './RightSection.module.css'
import SearchBar from '../../Components/RightSectionComponent/SearchBar/SearchBar'
import RightSectionFooter from '../../Components/RightSectionFooter/RightSectionFooter'
import RightComponent from '../../Components/RightComponent/RightComponent'
import RightSideSecondCard from '../../Components/RightSideSecondCard/RightSideSecondCard'

function RightSection() {
  return (
    <div className={style.main}>
      <div className={style.SearchBar}><SearchBar /></div>  
      <div className={style.body}>
     <div className={style.firstComponent}><RightComponent/></div>  
     <RightSideSecondCard/>
      <RightSectionFooter/>

      </div>
   
    </div>
  )
}

export default RightSection
