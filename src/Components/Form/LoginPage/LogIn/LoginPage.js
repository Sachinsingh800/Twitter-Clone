import React, { useState } from 'react'
import style from './LoginPage.module.css'
import {FaTwitter} from 'react-icons/fa';
import Button from '../../../../Atom/Button/Button';
import Image from '../../../../Assest/Image/apple.png'
import Image2 from '../../../../Assest/Image/google.png'
import { Link } from 'react-router-dom';
import Input from '../../../../Atom/Input/Input';
import Password from "../Password/Password"




function Login() {
  const [isToggle, setIsToggle]=useState(false)
function Toggle(){
  setIsToggle(true)
}
  
  return (
    <>
    {
     isToggle ? <Password/> :
     
     
    
    <div className={style.main} >
        <form className={style.form}>
            <FaTwitter style={{color:"blue",fontSize:"40px",marginTop:"10px"}}/>
            <h1 style={{color:"white"}}>Sign in to Twitter</h1>
            <Button
              SignUpTxt={"Sign up with Google"}
              Image={Image2}/>
          
            <br/>
            <Button
             SignUpTxt={"Sign up with Apple"}
             Image={Image}/>
            <br/>
           <span style={{display:"flex",color:"white" }}><hr/>&nbsp;&nbsp;or&nbsp;&nbsp;<hr/></span> 
           <br/>
            <Input placeholder={"Phone, email or username"} /> 
            <br/>
           <Button
             handleClick={Toggle}
             SignUpTxt={"Next"}/>
            <br/>
            <Button
             SignUpTxt={"Forgot password?"}/>
           <h4 style={{color:"white"}}>Don't have an account? <span style={{color:"#2997f1"}}> <Link to={"/Registration"}> Sign up</Link></span> </h4>
        </form>
      
    </div>
    }
    </>
  )
}

export default Login
