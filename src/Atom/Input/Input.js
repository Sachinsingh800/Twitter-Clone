import React, { useState } from "react";
import style from "./Input.module.css";
function Input(props) {
  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <div>
      <input  
        required
        pattern={props.pattern}
        className={style.input}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e)=>props.handleOnchange(e.target.value)}
      ></input>
    </div>
  );
}

export default Input;