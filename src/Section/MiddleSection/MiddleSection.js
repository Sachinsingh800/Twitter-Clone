import React from 'react'
import style from './MiddleSection.module.css'
import MiddleSectionHeader from '../../Components/MiddleSectionHeader/MiddleSectionHeader'

function MiddleSection() {
  return (
    <div className={style.main}>
       <div className={style.header}><MiddleSectionHeader /></div>  
    </div>
  )
}

export default MiddleSection
