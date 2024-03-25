// import React/Hook/...
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";

// import icon/image
import iconCart from "../../assets/image-icon/icon-cart.svg";

// import component
import NavbarButton from "./NavbarButton";
import NavbarUserDropdown from "./NavbarUserDropdown";

//////////////////
// function Component
const Navbar = (props) => {
  // sử dụng cookie cho dữ liệu authentication
  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies([
    "token",
    "expires",
    "userName",
  ]);
  const userName = cookies.userName;

  // handler to logout
  const logoutHandler = () => {
    removeCookie("token");
    removeCookie("userName");
    removeCookie("expires");
  };

  // xử lý cookie hết hạn với useEffect
  useEffect(
    () => {
      if (cookies.expires) {
        const timeout = new Date(cookies.expires).getTime() - Date.now() + 1000;

        const timeoutAction = setTimeout(logoutHandler, timeout);

        // Xóa timeout khi component unmount hoặc khi cookie thay đổi
        return () => clearTimeout(timeoutAction);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cookies.expires]
  );

  return (
    <div className="container">
      <header className="d-flex justify-content-between align-items-baseline p-2">
        {/* 2 nút Home và Shop */}
        <nav className="d-flex">
          <NavbarButton path="/" title="Home" />
          <NavbarButton path="/shop" title="Shop" />
        </nav>

        {/* tên logo trang web */}
        <h4 className="m-0">BOUTIQUE</h4>

        {/* 2 nút Cart và Login */}
        <nav className="d-flex">
          <NavbarButton path="/cart" title="Cart" icon={iconCart} />

          {/* nếu có user đang LOG IN thì hiển thị userName và nút để LOG OUT */}
          {userName ? (
            <>
              <NavbarUserDropdown userName={userName} />
              <NavbarButton title="( Logout )" onLogOut={logoutHandler} />
            </>
          ) : (
            <NavbarButton path="/login" title="Login" />
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
