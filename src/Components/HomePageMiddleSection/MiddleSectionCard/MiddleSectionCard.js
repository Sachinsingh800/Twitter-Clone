import React from 'react'
import Image  from "../../../Assest/Image/Modi1.jpg"
import style from './MiddleSectionCard.module.css'
import Image2 from  '../../../Assest/Image/Modi.jpeg'
import {BiMessageRounded} from 'react-icons/bi';
import {IoMdRepeat} from 'react-icons/io';
import {BsSuitHeart} from 'react-icons/bs';
import {BiBarChart} from 'react-icons/bi';

function MiddleSectionCard() {

  return (
    <div className={style.main} >
        <div  className={style.body}>
            <img  className={style.img} src={Image} alt="Profile" />
            <h2>Narendra modi</h2>
            <h6>@Immodi</h6>
      </div>
      <div className={style.para}>
        <p>रोजगार मेले से जहां युवाओं का सशक्तिकरण हो रहा है, वहीं देश के विकास में उनकी भागीदारी भी सुनिश्चित हो रही है। इसी कड़ी में 10.30 बजे वीडियो कॉन्फ्रेंसिंग के जरिए सरकारी पदों पर चयनित करीब 71,000 युवाओं को नियुक्ति पत्र सौंपने का सौभाग्य प्राप्त होगा।</p>
      </div>
      <div>
        <img  className={style.Img2} src={Image2} alt="Modi"/>
      </div>
      <div className={style.icon}>
          <BiMessageRounded/>
          <IoMdRepeat/>
          <BsSuitHeart/>
          <BiBarChart/>
      </div>
    </div>
  )
}

export default MiddleSectionCard
