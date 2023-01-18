import React from 'react'
import style from './Registration.module.css'
import {FaTwitter} from 'react-icons/fa';
import Inputfield from '../../Atom/Input/Input';
import SignUp from '../../Atom/SignUp/SignUp';
import Image from './apple.png'
import Image2 from './google.png'
import { Link } from 'react-router-dom';




function Registration() {
  return (
    <div className={style.main} >
        <form className={style.form}>
            <FaTwitter style={{color:"blue",fontSize:"40px",marginTop:"10px"}}/>
            <h1>Join Twitter today</h1>
            <SignUp 
              SignUpTxt={"Sign up with Google"}
              Image={Image2}
              />
          
            <br/>
            <SignUp 
             SignUpTxt={"Sign up with Apple"}
             Image={Image}
             />
            <br/>
           <span style={{display:"flex" }}><hr/>&nbsp;&nbsp;or&nbsp;&nbsp;<hr/></span> 
           <br/>
            <Link to={"/Account"}><SignUp
             SignUpTxt={"Sign up with phone or email"}/></Link>
          <span className={style.para} >  <h5 style={{color:"white"}}>By signing up, you agree to the <span style={{color:"#2997f1"}}>Terms of Service</span> and <span style={{color:"#2997f1"}}>Privacy Policy</span>,including <span style={{color:"#2997f1"}}>Cookie Use.</span> </h5></span> 
       <h4 style={{color:"white"}}>Have an account already? <span style={{color:"#2997f1"}}>  <Link to={"/Form"} >Log In</Link> </span></h4>
        </form>
      
    </div>
  )
}

export default Registration
