import * as React from 'react';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import style from './TrendOption.module.css'
import { BsThreeDots} from 'react-icons/bs'

export default function TrendOption({handleClicked}) {




  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <button className={style.button}  {...bindTrigger(popupState)}>
            <div className={style.popover}>
            <BsThreeDots/>
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
                <div className={style.retweetbtn}>
                <button onClick={handleClicked}>Not Intrested</button>
                <button >This trend is harmful or spammy</button>
               </div>
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
