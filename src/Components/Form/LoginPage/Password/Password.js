
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
        <FaTwitter className={style.logo} />
        <h1 >Enter your Password</h1>
         <Input customStyleInput={style.input} value={Password} placeholder={"password"} type="password" handleOnChange={HandlePassword}/>
       <span  className={style.login}>
       <Button handleClick={CheckData}
         SignUpTxt={"Log in"}/>
     <h4 >Don't have an account? <span  className={style.link}> <Link to={"/Registration"}> Sign up</Link></span> </h4>
        </span> 
    </form>
  
</div>
  )
}

export default Password

