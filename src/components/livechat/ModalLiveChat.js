// import React/Hook/Router...
import React from "react";
import ReactDOM from "react-dom";

// import CSS
import classes from "./ModalLiveChat.module.css";

// chọn div root để render trên HTML
const portalElement = document.getElementById("livechat");

// function component tạo Portal
const ModalLiveChat = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes.modalChat}>{props.children}</div>,
        portalElement
      )}
    </>
  );
};

export default ModalLiveChat;
