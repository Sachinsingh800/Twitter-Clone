import * as React from 'react';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
// import { style } from '@mui/system';
import style from './Userbutton.module.css'
import Image from '../../Assest/Image/Profile.png'
import { BsThreeDots} from 'react-icons/bs'
import {isUserLoggedInAtom}  from "../../../src/RecoilState/RecoilAtom"
import { useRecoilState } from "recoil";

export default function PopoverPopupState() {
  const [userLoginStatus, setUserLoginStatus] = useRecoilState(isUserLoggedInAtom)

  function Logout(){
    localStorage.removeItem("userData")
    window.location.assign("/Login")
  }
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <button className={style.button} variant="contained" {...bindTrigger(popupState)}>
            <div className={style.popover}>

             
              <span><img  className={style.img} src={Image}></img></span> 
               <span>
               <div className={style.name}>sachin</div> 
               <div className={style.name}>sachin@gmail123</div> 
               </span>
             <span className={style.dot}><BsThreeDots/></span> 
           
            
            </div>
          </button>
          <Popover className={style.pop}
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          
          >
            <Typography sx={{ p: 2 }}>
                <ul>
                <li>Add an existing account</li>
                <button onClick={Logout}>Log out @sachin432</button>
               </ul>
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
