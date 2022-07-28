import React from "react";
import "./Modal.css";
import Post from "./components/Post";

function Modal({ setOpenModal }) {


  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button  onClick={() => { setOpenModal(false);  }}>  X </button>
        </div>

    <Post />

        <div className="footer">
          <button   onClick={() => { setOpenModal(false); }} id="cancelBtn" >  Cancel  </button>
          <div><div1>Important : Un seul code promo par email et numéro de téléphone est autorisé</div1></div>
        </div>
      </div>
    </div>
  );
}

export default Modal;