import React from 'react'
import style from './RightSection.module.css'
import SearchBar from '../../Components/RightSectionComponent/SearchBar/SearchBar'

function RightSection() {
  return (
    <div className={style.main}>
      <div><SearchBar /></div>  
    </div>
  )
}

export default RightSection
