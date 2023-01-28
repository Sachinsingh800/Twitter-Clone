import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import style  from './DialogBox.module.css'
import Image from '../../../Assest/Image/Profile.png'
import { useState ,useEffect} from 'react';
import { BsImage } from 'react-icons/bs'
import ImageUpload from '../../ImageUpload/ImageUpload';
import { useRecoilState } from 'recoil';
import { IspostAtom } from '../../../RecoilState/RecoilAtom';


const Transition = React.forwardRef(function Transition(props, ref ) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogBox() {
 
  const [data, setData] = useState("")
  const [tweet, setTweet] = useRecoilState(IspostAtom)
  const [open, setOpen] = React.useState(false);
  // const [tweetData,setTweetData] = useState( postData )
  // console.log(tweet)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleSummit(e){
    e.preventDefault()
    
    const newTweet =  {
      id: 10,
      name  : 'Sachin',
      handlerName : '@Sachin123' ,
      organization : "",
      followers : 200,
      followings : 400,
      joinedDate : '22 dec 2022',
      tweets : [
          {
              tweetText : data,
              // tweetPic : '',
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              viewsCount : '102k',
              TweetReplies : [
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },

              ]
          },
        
      ],
    }
    setTweet([newTweet, ...tweet])
    setOpen(false);
  }
 
    localStorage.setItem("userTweets",JSON.stringify(tweet))
  

 
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
