
import { useEffect } from 'react';
import {  postData } from '../../Const/Const'
import CardDetail from '../CardDetail/CardDetail';

export default function ProfileCard() {
  const data=postData
  useEffect(()=>{
    localStorage.setItem("userProfileData", JSON.stringify(data))
  },[])

  return (
    <div className="App">

      {
         postData.map(profile => (
          <CardDetail
            profileData = {profile}
          />
        ))
      }
      
    </div>
  );
}


