import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
// import { style } from '@mui/system';
import style from './Userbutton.module.css'
import Image from '../../Assest/Image/Profile.png'

export default function PopoverPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button className={style.button} variant="contained" {...bindTrigger(popupState)}>
            <div className={style.popover}>

             
              <span><img  className={style.img} src={Image}></img></span> 
               <span>
               <div className={style.name}>sachin</div> 
               <div className={style.name}>sachin@gmail123</div> 
               </span>
               
           
            
            </div>
          </Button>
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
                <li>Log out @sachin432</li>
               </ul>
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
