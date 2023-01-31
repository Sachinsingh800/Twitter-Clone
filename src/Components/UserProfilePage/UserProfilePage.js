import React from 'react'
import style from './UserProfilePage.module.css'
import LeftSection from '../../Section/LeftSection/LeftSection'
import RightSection from '../../Section/RightSection/RightSection'
import UserProfileSection from '../UserProfileSection/UserProfileSection'


function UserProfilePage() {
  return (
    <div className={style.main}>
      <LeftSection/>
      <UserProfileSection />
      <RightSection />
    </div>
  )
}

export default  UserProfilePage
