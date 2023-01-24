import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import style  from './DialogBox.module.css'
import Image from '../../../Assest/Image/Profile.png'
import { useState } from 'react';
import { BsImage } from 'react-icons/bs'
import ImageUpload from '../../ImageUpload/ImageUpload';

const Transition = React.forwardRef(function Transition(props, ref ) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogBox() {
  const [data, setData] = useState("")
  const [open, setOpen] = React.useState(false);
  const [input ,setInput] = useState()
 


// const fileURL = URL.createObjectURL(input);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleSummit(){
   setData(data)
   setData('')
 
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
      <img   src={input} />
      <div>
      <ImageUpload cardName="Input Image" />,
        {/* <input type="file" onChange={(e)=>setInput(e.target.files[0])}  accept="image/png , image/jpeg"/> */}
      </div>
      <button onClick={handleSummit}   className={style.tweet}>Tweet</button>
       </Dialog>
      
    </div>
  );
}
