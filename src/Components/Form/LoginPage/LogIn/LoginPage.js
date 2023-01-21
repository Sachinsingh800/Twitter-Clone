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
            <FaTwitter className={style.logo} />
            <h1 >Sign in to Twitter</h1>
            <Button
              SignUpTxt={"Sign in with Google"}
              Image={Image2}/>
          
            <br/>
            <Button
             SignUpTxt={"Sign in with Apple"}
             Image={Image}/>
            <br/>
           <span  className={style.line}><hr/><span className={style.or}>or</span> <hr/></span> 
           <br/>
            <Input   customStyleInput={style.input}  placeholder={"Phone, email or username"} /> 
            <br/>
           <Button 
             handleClick={Toggle}
             SignUpTxt={"Next"}/>
            <br/>
            <Button
             SignUpTxt={"Forgot password?"}/>
           <h4 >Don't have an account? <span  className={style.link}> <Link to={"/Registration"}> Sign up</Link></span> </h4>
        </form>
      
    </div>
    }
    </>
  )
}

export default Login
