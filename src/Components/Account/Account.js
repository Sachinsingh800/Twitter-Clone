
import React from 'react'
import {FaTwitter} from 'react-icons/fa';
import Inputfield from '../../Atom/Input/Input';
import SignUp from '../../Atom/SignUp/SignUp';
import { Link } from 'react-router-dom';
import style from './Account.module.css'


function Account({label}) {
 
  return (
    <div  className={style.main} >
    <form className={style.form}>
        <FaTwitter style={{color:"blue",fontSize:"32px",marginTop:"10px"}}/>
        <h1>Create your account</h1>
       
        <Inputfield  
        label={"Name"} />
        <br/>

     <div>
        <Inputfield  
        label={"Phone"} />
       <span className={style.useemail}><h6 style={{color:"#2997f1",marginLeft:"200px",marginTop:"7px"}}>Use email instead</h6></span> 
    </div> 
        <div className={style.Dob}>
            <h5 style={{fontWeight:550}}>Date of birth</h5>
            <h5 style={{marginTop:"-20px", fontWeight: "200"}}>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else. </h5>
        </div>
       <span  className={style.login}>
       <SignUp
         SignUpTxt={"Next"}/>
        </span> 
    </form>
  
</div>
  )
}

export default Account

