import React from 'react'
import style from './HomePage.module.css'
import LeftSection from '../../Section/LeftSection/LeftSection'
import MiddleSection from '../../Section/MiddleSection/MiddleSection'
import RightSection from '../../Section/RightSection/RightSection'
import { postData } from '../../Const/Const'

function HomePage() {

  return (
    <div className={style.main}>
      <LeftSection/>
      <MiddleSection />
      <RightSection />
    </div>
  )
}

export default HomePage
