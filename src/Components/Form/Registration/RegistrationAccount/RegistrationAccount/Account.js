import React, { useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import Button from "../../../../../Atom/Button/Button"
import style from "./Account.module.css";
import Input from "../../../../../Atom/Input/Input";
import MonthDropdown from "../Month/Month";
import YearDropdown from "../Year/Year";
import DayDropdown from "../Day/Day";
import {isUserLoggedInAtom}  from "../../../../../RecoilState/RecoilAtom"
import { useRecoilState } from "recoil";

import { 
  isValidEmailSyntax ,
  isValidMobile,
  isOnlyLetters,
  isValidString,
  isValidPassword ,
} from '../../../../../../src/Helper/Helper'



function Account() {
  const [toggle, setToggle] = useState(false);
  const [Name, setName] = useState(" ");
  const [Email, setEmail] = useState(" ");
  const [Phone, setPhone] = useState(" ");
  const [Password, setPassword] = useState(" ");
  const [userLoginStatus, setUserLoginStatus] = useRecoilState(isUserLoggedInAtom)


  function submitFunction(e){
    e.preventDefault()

    if(!isValidString(Name))
    {
      alert("add proper Name")
      return
    }
    if(toggle===true)
    {
      if(!isValidMobile(Phone))
      {
        alert("add proper PhoneNumber ")
        return
      }
    }
    else
    {
        if(!isValidEmailSyntax(Email))
      {
        alert("Give correct email")
      }  
  }
  
    if(!isValidPassword(Password))
    {
          alert('add strong Password !!')
           return
    }

    alert("successfully submited")
    setUserLoginStatus(true)
    window.location.assign("/HomePage")   
}


useEffect(()=>{

  const userData = {
          Name ,
      ...(Phone && {Phone}),
      ...(Email && {Email}),
         Password,
      // ...(userLoginStatus && {userLoginStatus})
      userLoginStatus
         
      // dateOfBirth : `${date + '/' + month + '/' + year}`
  }
  console.log(userData)
  localStorage.setItem('userData',JSON.stringify(userData))
},[userLoginStatus])


  function emailLogin() {
    setToggle(!toggle);
  }

  function HandlePhone(InputPhone) {
    setPhone(InputPhone);
   
  }

  function HandleEmail(InputEmail) {
    setEmail(InputEmail);
  }

  function HandleName(InputName) {
    setName(InputName);
  }
  function HandlePassword(InputPassword) {
    // console.log(Password)
    setPassword(InputPassword);
  }



  return (
    <div className={style.main}>
      <form className={style.form}>
      <FaTwitter className={style.logo} />
        <h1 >Create your account</h1>
        <Input  customStyleInput={style.input} placeholder={"Name"} type="name"  handleOnChange={HandleName} />
        {toggle ? (
          <div>
            <Input  customStyleInput={style.input} placeholder={"Phone"} type="phone" handleOnChange={HandlePhone} />
          </div>
        ) : (
          <div>
            <Input  customStyleInput={style.input} placeholder={"Email"} type="email"  handleOnChange={HandleEmail} />
          </div>
        )}
        <span onClick={emailLogin} className={style.useemail}>
          {toggle ? (
            <h6
              style={{
                color: "#2997f1",
                marginLeft: "200px",
                marginTop: "7px",
              }}
            >
              Use email instead
            </h6>
          ) : (
            <h6
              style={{
                color: "#2997f1",
                marginLeft: "200px",
                marginTop: "7px",
              }}
            >
              Use Phone instead
            </h6>
          )}
        </span>
        <Input  customStyleInput={style.input1}  placeholder={"Password"} type="password"  handleOnChange={HandlePassword}/>
        <div className={style.Dob}>
          <h5 >Date of birth</h5>
          <p>
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </p>
          <div className={style.date}>
       <span><MonthDropdown /></span> 
        <span><DayDropdown /></span>
        <span><YearDropdown /></span>
        </div>
        </div>

        <span className={style.login}>
          <Button handleClick={submitFunction} SignUpTxt={"Next"} />
        </span> 
      </form>
    </div>
  );
}

export default Account;







