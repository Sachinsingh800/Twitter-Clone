
import React from 'react'
import {FaTwitter} from 'react-icons/fa';
import Inputfield from '../../Atom/Input/Input';
import SignUp from '../../Atom/SignUp/SignUp';
import { Link } from 'react-router-dom';
import style from './Account.module.css'
import MonthDropdown from './Month'
import DayDropdown from './Day';
import YearDropDown from './Year';
import { useState } from 'react';


function Account({label}) {
  const [toggle, setToggle] = useState(false);
  function emailLogin() {
    setToggle(!toggle);
  }

 function clicked(){
  alert("Clicked")
 }
  return (
    <div  className={style.main} >
    <form className={style.form}>
        <FaTwitter style={{color:"blue",fontSize:"32px",marginTop:"10px"}}/>
        <h1>Create your account</h1>
       
        <Inputfield  
        label={"Name"} />
        <br/>

        {toggle ? (
          <div>
            <Inputfield label={"Phone"} />
          </div>
        ) : (
          <div>
            <Inputfield label={"Email"} />
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
        <div className={style.Dob}>
            <h5 style={{fontWeight:550}}>Date of birth</h5>
            <h5 style={{marginTop:"-20px", fontWeight: "200"}}>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else. </h5>
        </div>

        <div className={style.date}>
       <span><MonthDropdown /></span> 
        <span><DayDropdown/></span>
        <span><YearDropDown /></span>
        </div>
        
       <span  className={style.login}>
       <SignUp
         SignUpTxt={"Next"}
         handleClick={clicked}/>
        </span> 
        
    </form>
  
</div>
  )
}

export default Account

