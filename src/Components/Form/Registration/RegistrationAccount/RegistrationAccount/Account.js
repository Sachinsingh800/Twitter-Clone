import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import Button from "../../../../../Atom/Button/Button"
import style from "./Account.module.css";
import Input from "../../../../../Atom/Input/Input";
import MonthDropdown from "../Month/Month";
import YearDropdown from "../Year/Year";
import DayDropdown from "../Day/Day";
import {isUserLoggedInAtom}  from "../../../../../RecoilState/RecoilAtom"
import { useSetRecoilState } from "recoil";
import {useNavigate} from "react-router-dom"

import { 
  isValidEmailSyntax ,
  isValidMobile,
  isOnlyLetters,
  isValidString
} from '../../../../../../src/Helper/Helper'



function Account() {
  const [toggle, setToggle] = useState(false);
  const [Name, setName] = useState(" ");
  const [Email, setEmail] = useState(" ");
  const [Phone, setPhone] = useState(" ");
  const [Password, setPassword] = useState(" ");
  const navigate = useNavigate()
  const setUserLoginStatus = useSetRecoilState(isUserLoggedInAtom)



  function submitFunction(){
  
    // window.location.assign("/HomePage")

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
  
    if(!isValidString(Password))
    {
          alert('please set your account password !!')
           return
    }

  
      
// if(!isValidString(password)){
//     alert('please set your account password !!')
//     return
// }
// if(!isValidString(date) || !isValidString(month) || !isValidString(year)){
//     alert('Invalid Date !!')
//     return
// }
const userData = {
        Name ,
    ...(Phone && {Phone}),
    ...(Email && {Email}),
       Password,
    // dateOfBirth : `${date + '/' + month + '/' + year}`
}

localStorage.setItem('userData',JSON.stringify(userData))
alert("successfully submited")
    setUserLoginStatus(true)
   
    navigate('/HomePage')
    

}



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
        <FaTwitter
          style={{ color: "blue", fontSize: "32px", marginTop: "10px" }}
        />
        <h1 style={{color:"white"}}>Create your account</h1>
        <Input placeholder={"Name"} type="name"  handleOnChange={HandleName} />
        <br />
        {toggle ? (
          <div>
            <Input placeholder={"Phone"} type="phone" handleOnChange={HandlePhone} />
          </div>
        ) : (
          <div>
            <Input placeholder={"Email"} type="email"  handleOnChange={HandleEmail} />
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
        <Input  placeholder={"Password"} type="password"  handleOnChange={HandlePassword}/>
        <div className={style.Dob}>
          <h5 style={{ fontWeight: 550 ,color:"white"}}>Date of birth</h5>
          <h5 style={{ marginTop: "-20px", fontWeight: "200" ,color:"white"}}>
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.{" "}
          </h5>
          <div className={style.date}>
       <span><MonthDropdown /></span> 
        <span><DayDropdown/></span>
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







