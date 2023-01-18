import React from 'react'
import style from './Form.module.css'
import {FaTwitter} from 'react-icons/fa';
import Inputfield from '../../Atom/Input/Input';
import SignUp from '../../Atom/SignUp/SignUp';
import Image from './apple.png'
import Image2 from './google.png'
import { Link } from 'react-router-dom';
import Input from '../../Atom/Input/Input';




function Form() {
  return (
    <div className={style.main} >
        <form className={style.form}>
            <FaTwitter style={{color:"blue",fontSize:"40px",marginTop:"10px"}}/>
            <h1 style={{color:"white"}}>Sign in to Twitter</h1>
            <SignUp 
              SignUpTxt={"Sign up with Google"}
              Image={Image2}/>
          
            <br/>
            <SignUp 
             SignUpTxt={"Sign up with Apple"}
             Image={Image}/>
            <br/>
           <span style={{display:"flex",color:"white" }}><hr/>&nbsp;&nbsp;or&nbsp;&nbsp;<hr/></span> 
           <br/>
            <Input placeholder={"Phone, email or username"} /> 
            <br/>
            <Link to={"/Password"}><SignUp
             SignUpTxt={"Next"}/></Link>
            <br/>
            <SignUp
             SignUpTxt={"Forgot password?"}/>
           <h4>Don't have an account? <span style={{color:"#2997f1"}}> <Link to={"/Registration"}> Sign up</Link></span> </h4>
        </form>
      
    </div>
  )
}

export default Form
