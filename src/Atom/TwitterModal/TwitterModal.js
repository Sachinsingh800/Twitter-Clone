import { useState } from "react";
import "./Modal.css";
import  Modal from "./Modal"

export default function TwitterModal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  return (
    <div className="App">
        {showModal ? <Modal setShowModal={setShowModal} /> : null}
      <button className="ButtonTweet" onClick={openModal}>Tweet</button>
      
    </div>
  );
}
