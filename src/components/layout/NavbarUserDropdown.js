// import React/Hook/...
import React from "react";
import { Link } from "react-router-dom";

// import icon/image
import iconUser from "../../assets/image-icon/icon-user.svg";

// function Component
const NavbarUserDropdown = (props) => {
  // return
  return (
    <div className="nav-item dropdown d-flex align-items-center">
      <img
        src={iconUser}
        alt="icon"
        style={{
          width: "20px",
          height: "16px",
          opacity: "50%",
        }}
      />

      <button
        className="nav-link dropdown-toggle fs-5"
        href="#"
        id="navbarDropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {props.userName}
      </button>

      <ul
        className="dropdown-menu"
        aria-labelledby="navbarDropdownMenuLink"
        wfd-invisible="true"
      >
        <li>
          <Link className="dropdown-item" to="/history">
            History
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarUserDropdown;
