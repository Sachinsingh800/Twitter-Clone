import style from './ImageUpload.module.css'
import CollectionsIcon from '@mui/icons-material/Collections';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';



export default function ImageUpload ({isCloseBtnVisible = false , handleClickCloseBtn}) {

    const [image,setImage] = useState('')
    const inputRef = useRef(null)

    const iconList = [
        {
            icon : <CollectionsIcon
            className={style.icon}
            />,
            action : 'pickImage'

        },
        {
            icon : <GifBoxOutlinedIcon
            className={style.icon}
            />,

        },
        {
            icon : <ListOutlinedIcon
            className={style.icon}
            />,
        },
        {
            icon : <EmojiEmotionsOutlinedIcon
            className={style.icon}
            />,
        },
        {
            icon :  <LocationOnOutlinedIcon
            className={style.icon}
            />
        }  
    ]


    function handleOnClickIcon (action) {
        if(action === 'pickImage'){       
            inputRef.current.click()
        }
    }


    function handleOnSelectImage (e) {
        let reader = new FileReader();
        reader.onload = (e) => {
            setImage(e.target.result);
            inputRef.current = null 
        };
        reader.readAsDataURL(e.target.files[0]);
    }
    return(
        <div >
            {
                isCloseBtnVisible && 
                <div className={style.crossContainer}>
                    <CloseIcon onClick = {handleClickCloseBtn}/>
                </div>
            }

           { 
            image &&  
            <div className={style.imageWrapper}>
                <img
                    src={image}
                    height = '40%'
                    width = '40%'
                    alt = 'foo'
                />
                </div>
            }
           {/* tweet btn and icon container */}

            <div className={style.tweetFooterWrapper}>

                <div className={style.icons}>
                    {iconList.map(({icon,action},index) => (
                        <div 
                            onClick={
                                () => handleOnClickIcon(action)
                            }
                        >{icon}</div>
                    ))}
                </div>

            </div>
            <input
                type = 'file'
                hidden
                ref={inputRef}
                onChange = {handleOnSelectImage}
                name = 'tweetPic'
            />

        </div>
    )
}