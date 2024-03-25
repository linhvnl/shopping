// import React/Hook/Router...
import React from "react";

// import CSS
import classes from "./LiveChatButton.module.css";

// import icon/image
import iconChat from "../../assets/image-icon/icon-facebook-messenger-icons8.svg";

//////////////////////////////////////
// function component tạo BUTTON để show/hide live chat
const LiveChatButton = (props) => {
  return (
    <button
      type="button"
      onClick={props.onToggleChat}
      className={classes.btnChat}
    >
      <img src={iconChat} alt="chat" />
    </button>
  );
};

export default LiveChatButton;
