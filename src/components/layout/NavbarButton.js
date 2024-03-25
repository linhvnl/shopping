// import React/Hook/...
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

// function Component
const NavbarButton = (props) => {
  // sử dụng điều hướng và URL đang hoạt động
  const navigate = useNavigate();
  const location = useLocation();

  // return
  return (
    <button
      type="button"
      className={`d-flex align-items-center bg-transparent p-2 border-0 fst-italic fs-5 ${
        location.pathname === props.path ? "text-warning" : ""
      }`}
      onClick={props.path ? () => navigate(props.path) : props.onLogOut}
    >
      {/* chèn icon nếu có truyền props */}
      {props.icon && (
        <img
          src={props.icon}
          alt="icon"
          style={{
            width: "20px",
            height: "16px",
            opacity: "50%",
          }}
        />
      )}

      {/* tiêu đề nút */}
      <span>{props.title}</span>

      {/* chèn icon nếu có truyền props*/}
      {props.iconActiveUser && (
        <img
          src={props.iconActiveUser}
          alt="icon"
          style={{
            width: "10px",
            height: "10px",
            marginLeft: "4px",
          }}
        />
      )}
    </button>
  );
};

export default NavbarButton;
