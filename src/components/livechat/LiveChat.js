/////////////////////////////
// import React/Hook/Router...
import React, { useEffect, useState } from "react";

// import component
import ModalLiveChat from "./ModalLiveChat";
import LiveChatContent from "./LiveChatContent";
import LiveChatButton from "./LiveChatButton";

// __________________________
// set socket connection
import io from "socket.io-client";

const socket = io(process.env.REACT_APP_API_ENDPOINT_ORIGIN, {
  transports: ["websocket"],
});

// __________________________
// function component Live Chat
const LiveChat = (props) => {
  // state để show/hide Live Chat
  const [toggleChat, setToggleChat] = useState(false);

  // state conversation of live chat
  const [conversation, setConversation] = useState([]);

  // state roomId chat
  const [roomId, setRoomId] = useState(localStorage.getItem("roomId") || "");

  // hàm xử lý gửi tin nhắn chat mới
  const sendMessageHandler = async (e) => {
    // lấy giá trị input
    const textMessage = e.target.value.trim();

    // case 1> Check if roomId is null then create new Room
    if (!roomId) {
      // send server
      socket.emit("create_new_room", textMessage);

      // set client
      e.target.value = "";

      return;
    }

    // case 2> Check if text equal "/end" then end room
    if (roomId && textMessage.toLowerCase() === "/end") {
      // send server
      socket.emit("end_room", roomId);

      // set client
      localStorage.removeItem("roomId");
      e.target.value = "";
      setRoomId("");
      setConversation([]);
      setToggleChat(false);

      return;
    }

    // case 3> send new message to server
    socket.emit("new_message", { roomId, message: textMessage });

    // set client
    e.target.value = "";

    return;
  };

  // useEffect để gửi và lắng nghe socket từ server gửi lên
  useEffect(
    () => {
      // thực hiện load room chat khi tải lại trang
      if (roomId) socket.emit("load_room", roomId);

      // load room
      socket.on("load_room", (room) => {
        setConversation(room.conversation);
      });

      // tạo 1 phiên chat mới
      socket.on("create_new_room", (newRoom) => {
        setRoomId(newRoom._id);
        setConversation(newRoom.conversation);
        localStorage.setItem("roomId", newRoom._id);
      });

      // update khi có tin nhắn mới (cả 2 phía client - admin)
      socket.on("update_room", (updateRoom) => {
        setConversation(updateRoom.conversation);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // return
  return (
    <>
      {toggleChat && (
        <ModalLiveChat>
          <LiveChatContent
            conversation={conversation}
            onSendMessage={sendMessageHandler}
          />
        </ModalLiveChat>
      )}
      <LiveChatButton
        onToggleChat={() => setToggleChat((prevState) => !prevState)}
      />
    </>
  );
};

export default LiveChat;
