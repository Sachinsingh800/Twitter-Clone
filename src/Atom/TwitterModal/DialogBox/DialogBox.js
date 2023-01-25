import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import style  from './DialogBox.module.css'
import Image from '../../../Assest/Image/Profile.png'
import { useState } from 'react';
import { BsImage } from 'react-icons/bs'
import ImageUpload from '../../ImageUpload/ImageUpload';
import {   postData } from '../../../Const/Const'; 

const Transition = React.forwardRef(function Transition(props, ref ) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogBox() {
  const [data, setData] = useState("")
  const [open, setOpen] = React.useState(false);
  const [tweetData,setTweetData] = useState( postData )


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleSummit(){

    postData .unshift(data)
    setTweetData({...tweetData,data})
    alert("tweeet submitted")
    console.log(tweetData)
  }


  return (
    <div>
      <button className={style.button1}  onClick={handleClickOpen}>
        Tweet
      </button>
      <Dialog open={open} >
     
      <button className={style.button} onClick={handleClose}>x</button>
      <img className={style.image} src={Image} alt="Profile"/>
      <div className={style.dialogBox}>
       <input className={style.input}  onChange={(e)=> setData(e.target.value)} value={data} placeholder="What's happening?"></input>
      </div>
      <div>
      <ImageUpload cardName="Input Image" />,
      </div>
      <button onClick={handleSummit}   className={style.tweet} >Tweet</button>
       </Dialog>
      
    </div>
  );
}
