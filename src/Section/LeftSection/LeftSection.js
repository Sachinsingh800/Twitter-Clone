import React from 'react'
import style from './LeftSection.module.css'
import {FaTwitter} from 'react-icons/fa';
import {ImHome2} from 'react-icons/im';
import {BiHash} from 'react-icons/bi';
import {RiNotification2Line, RiStickyNoteLine} from 'react-icons/ri';
import {BsBookmark} from 'react-icons/bs';
import {GoMail} from 'react-icons/go';
import {RiFileList2Line} from 'react-icons/ri';
import {CgProfile} from 'react-icons/cg';
import {CiCircleMore} from 'react-icons/ci';
import { Link } from 'react-router-dom';
import PopoverPopupState from '../../Atom/Userbutton/Userbutton'
import TwitterModal from '../../Atom/TwitterModal/TwitterModal';

function LeftSection() {
    const Navoption=[
        {icon:<ImHome2/>, Option: 'Home', path : '/'},
       {icon:<BiHash/>,  Option: 'Explore' ,path:'/Login' },
       {icon:<RiNotification2Line/>,  Option: 'Notification' ,path:'/About' },
       { icon:<GoMail/>, Option: 'Messages' ,path:'/Registration' },
       { icon:<BsBookmark/>, Option: 'BookMarks' ,path:'/Registration' },
       { icon:<RiFileList2Line/>,  Option: 'List' ,path:'/Registration' },
       { icon:<CgProfile/>,   Option: 'Profile' ,path:'/Registration' },
         {icon:<CiCircleMore/>,   Option: 'More' ,path:'/Registration' },
     ]
 
  return (
    <div className={style.main}>
        <spna className={style.logo}><FaTwitter/></spna>
        <div>
        {Navoption.map(({icon,Option ,path})=>
    <Link to={path} className={style.link}> 
        <p className={style.List}><span className={style.icon}>{icon}</span><spna className={style.option}>{Option}</spna></p>
        </Link> ) }
        </div>
      <div>
       <div> <TwitterModal/></div>
      </div>
      <div className={style.OpenPopover}>
      <PopoverPopupState/>
      </div>
    </div>
  )
}

export default LeftSection
