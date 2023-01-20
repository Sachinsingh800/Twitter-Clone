import React from 'react'
import style from './RightSection.module.css'
import SearchBar from '../../Components/RightSectionComponent/SearchBar/SearchBar'

import RightComponent from '../../Components/RightComponent/RightComponent'
import RightSideSecondCard from '../../Components/RightSideSecondCard/RightSideSecondCard'

function RightSection() {
  return (
    <div className={style.main}>
      <div><SearchBar /></div>  
      <br/>
     {/* <RightComponent/> */}
    
     <br/>
   <RightSideSecondCard/>
    </div>
  )
}

export default RightSection
