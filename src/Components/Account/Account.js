import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
//import Inputfield from "../../Atom/Input/Input";
import SignUp from "../../Atom/SignUp/SignUp";
import { json, Link } from "react-router-dom";
import style from "./Account.module.css";
import Input from "../../Atom/Input/Input";
import MonthDropdown from "./Month";
import YearDropdown from "./Year";
import DayDropdown from "./Day";


function Account({ label }) {
  const [toggle, setToggle] = useState(false);
  const [Name, setName] = useState(" ");
  const [Email, setEmail] = useState(" ");
  const [Phone, setPhone] = useState(" ");
  const [data, setData] = useState([]);

localStorage.setItem("user", JSON.stringify(data))

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
  return (
    <div className={style.main}>
      <form className={style.form}>
        <FaTwitter
          style={{ color: "blue", fontSize: "32px", marginTop: "10px" }}
        />
        <h1 style={{color:"white"}}>Create your account</h1>
        <Input placeholder={"Name"} pattern={"[A-Za-z][A-Za-z0-9]{7,29}$"}  handleOnChange={HandleName} />
        <br />
        {toggle ? (
          <div>
            <Input placeholder={"Phone"} pattern={"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"} handleOnChange={HandlePhone} />
          </div>
        ) : (
          <div>
            <Input placeholder={"Email"} pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"} handleOnChange={HandleEmail} />
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
          <SignUp SignUpTxt={"Next"} />
        </span> 
      </form>
    </div>
  );
}

export default Account;








