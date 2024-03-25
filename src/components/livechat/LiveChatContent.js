/////////////////////////////
// import React/Hook/Router...
import React, { useRef, useEffect } from "react";

// import icon/image
import iconAdmin from "../../assets/image-icon/icon-admin-male-48-icons8.png";
import iconAttach from "../../assets/image-icon/icon-attach-file.svg";
import iconSmileIcon from "../../assets/image-icon/icon-smile-50-icons8.png";
import iconSendMessage from "../../assets/image-icon/icon-telegram-app-icons8.svg";

////////////////////////////////
// function component nội dung khung Live Chat
const LiveChatContent = (props) => {
  // lấy dữ liệu props
  const conversation = props.conversation;
  const sendMessageHandler = props.onSendMessage;

  // tự động scroll đến cuối khung chat khi có tin nhắn mới
  const chatContainerRef = useRef(null);
  //
  useEffect(() => {
    scrollToBottom();
  }, [conversation]);
  //
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  // hàm chèn Icon Admin
  const insertIcon = (icon, size = "36px", margin = "me-3", opac = "100%") => (
    <img
      src={icon}
      alt="icon"
      className={`rounded-circle ${margin}`}
      style={{ width: size, height: size, opacity: opac }}
    />
  );

  // render 1 tin nhắn của client
  const chatClient = (id, message) => (
    <div key={id} className="d-flex justify-content-end mb-3">
      <div className="text-end fw-lighter" style={{ width: "85%" }}>
        <span
          className="d-inline-block rounded-2 text-light p-2"
          style={{ backgroundColor: "#339af0" }}
        >
          You: {message}
        </span>
      </div>
    </div>
  );

  // render 1 tin nhắn của admin
  const chatAdmin = (id, message) => (
    <div key={id} className="d-flex mb-3">
      <div className="d-flex fw-lighter" style={{ width: "85%" }}>
        {insertIcon(iconAdmin)}
        <span
          className="d-inline-block rounded-2 p-2"
          style={{ backgroundColor: "#f1f3f5" }}
        >
          Cộng tác viên: {message}
        </span>
      </div>
    </div>
  );

  // nội dung trong khung Live Chat
  // return
  return (
    <div className="container">
      {/* tiêu đề */}
      <div className="row align-items-center border-bottom p-3">
        <div className="col-9 p-0">
          <h5 className="fw-bolder fst-normal ps-4 mb-0">Customer Support</h5>
        </div>
        <div className="col-3 p-0">
          <button className="btn btn-light rounded-0 text-secondary fst-italic w-100 px-0">
            Let's Chat App
          </button>
        </div>
      </div>

      {/* nội dung lịch sử chat */}
      <div
        ref={chatContainerRef}
        className="row border-bottom p-3 overflow-auto chat-container"
        style={{ height: "420px" }}
      >
        <div className="col-12 p-0">
          {conversation?.map((item) =>
            item.isAdmin
              ? chatAdmin(item._id, item.message)
              : chatClient(item._id, item.message)
          )}
        </div>
      </div>

      {/* input chat */}
      <div
        className="row bg-light p-3"
        style={{ borderRadius: "0 0 14px 14px" }}
      >
        <div className="col-12 px-2 d-flex align-items-center">
          {insertIcon(iconAdmin)}
          <input
            type="text"
            name="message"
            placeholder="Enter Message!"
            className="border-0 flex-fill p-1"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessageHandler(e);
              }
            }}
          />
          {insertIcon(iconAttach, "20px", "ms-3", "50%")}
          {insertIcon(iconSmileIcon, "20px", "ms-3", "50%")}
          {insertIcon(iconSendMessage, "20px", "ms-3")}
        </div>
      </div>
    </div>
  );
};

export default LiveChatContent;
