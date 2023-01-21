
import React, { useState } from 'react'
import {FaTwitter} from 'react-icons/fa';
import Button from '../../../../Atom/Button/Button';
import { Link } from 'react-router-dom';
import style from './Password.module.css'
import Input from '../../../../Atom/Input/Input';



function Password() {
  const [Password, setPassword] = useState("")

  function HandlePassword(InputPassword){
    console.log(Password)
    setPassword(InputPassword)
  }

  function CheckData (e){
    e.preventDefault()
   
  const data=JSON.parse(localStorage.getItem("userData"))

   
     if(data.Password === Password ){
      alert("Log in successful✅")
      window.location.assign("/HomePage")
    }else{
      alert("Invalid password!!!!🚫")
    }
  }
 
  return (
    <div className={style.main} >
    <form className={style.form}>
        <FaTwitter style={{color:"blue",fontSize:"32px",marginTop:"10px"}}/>
        <h1 style={{color:"white"}}>Enter your Password</h1>
         <Input value={Password} placeholder={"password"} type="password" handleOnChange={HandlePassword}/>
       <span  className={style.login}>
       <Button handleClick={CheckData}
         SignUpTxt={"Log in"}/>
      <h4 style={{color:"white"}}>Don't have an account? <span style={{color:"#2997f1"}}>  <Link to={"/Registration"}>Sign up</Link></span> </h4>
        </span> 
    </form>
  
</div>
  )
}

export default Password

