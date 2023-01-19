import React from 'react'
import style from './Registration.module.css'
import {FaTwitter} from 'react-icons/fa';
import Button from '../../../../Atom/Button/Button';
import Image from '../../../../Assest/Image/apple.png'
import Image2 from '../../../../Assest/Image/google.png'
import { Link } from 'react-router-dom';
import Account from '../RegistrationAccount/RegistrationAccount/Account'
import { useState } from 'react';




function Registration() {
  const [isToggle, setIsToggle]=useState(false)
  function Toggle(){
    setIsToggle(true)
  }
    
  return (
    <>
     {
     isToggle ? <Account /> :
     
    <div className={style.main} >
        <form className={style.form}>
            <FaTwitter style={{color:"blue",fontSize:"40px",marginTop:"10px"}}/>
            <h1 style={{color:"white"}}>Join Twitter today</h1>
            <Button
              SignUpTxt={"Sign up with Google"}
              Image={Image2}
              />
          
            <br/>
            <Button 
             SignUpTxt={"Sign up with Apple"}
             Image={Image}
             />
            <br/>
           <span style={{display:"flex" }}><hr/>&nbsp;&nbsp;<span style={{color:"white"}}>or</span>&nbsp;&nbsp;<hr/></span> 
           <br/>
            <Button handleClick={Toggle}
             SignUpTxt={"Sign up with phone or email"}/>
          <span className={style.para} >  <h5 style={{color:"white"}}>By signing up, you agree to the <span style={{color:"#2997f1"}}>Terms of Service</span> and <span style={{color:"#2997f1"}}>Privacy Policy</span>,including <span style={{color:"#2997f1"}}>Cookie Use.</span> </h5></span> 
       <h4 style={{color:"white"}}>Have an account already? <span style={{color:"#2997f1"}}>  <Link to={"/Form"} >Log In</Link> </span></h4>
        </form>
      
    </div>
    }
    </>
  )
}

export default Registration
