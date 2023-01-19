import React, { useRef, useState } from "react";
import './Modal.css'
import Image from '../../Assest/Image/Profile.png'



export default function Modal ({ setShowModal }) {
 const [data,setData]=useState("")
 function handleSummit(){
  setData(data)
  alert("your tweet is summited")
  console.log(data)
 }

  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  // render the modal JSX in the portal div.
  return (
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <img  className="image" src={Image}></img>
        <br/>
       <input value={data} onChange={(e)=> setData(e.target.value)} className="input" placeholder="What is happening?"></input>
       <button onClick={handleSummit} className="Button">Tweet</button>
        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>
  );
};
