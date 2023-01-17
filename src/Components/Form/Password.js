
import React from 'react'
import {FaTwitter} from 'react-icons/fa';
import Inputfield from '../../Atom/Input/Input';
import SignUp from '../../Atom/SignUp/SignUp';
import { Link } from 'react-router-dom';
import style from './Password.module.css'


function Password({label}) {
 
  return (
    <div className={style.main} >
    <form className={style.form}>
        <FaTwitter style={{color:"blue",fontSize:"32px",marginTop:"10px"}}/>
        <h1>Enter your Password</h1>
       
        <Inputfield  
        label={"password"} />
       <span  className={style.login}>
       <SignUp
         SignUpTxt={"Log in"}/>
      <h4>Don't have an account? <span style={{color:"#2997f1"}}>  <Link to={"/Registration"}>Sign up</Link></span> </h4>
        </span> 
    </form>
  
</div>
  )
}

export default Password

