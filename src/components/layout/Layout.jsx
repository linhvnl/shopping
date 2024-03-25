// import React/Hook/Router...
import React, { useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

// import sử dụng REDUX STORE
import { useDispatch } from "react-redux";
import { productActions } from "../../store/sliceProduct";

// import component
import Navbar from "./Navbar";
import Footer from "./Footer";
import LiveChat from "../livechat/LiveChat";

////////////////////
// function Component
const Layout = () => {
  // lấy dữ liệu list product từ API
  const products = useLoaderData();

  // sử dụng dispatch và Actions để cập nhật STORE
  const dispatch = useDispatch();

  // lưu dữ liệu vào STORE khi tải trang với useEffect
  useEffect(() => {
    // list product load từ API
    dispatch(productActions.LOAD_PRODUCT(products));
  }, [products, dispatch]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <LiveChat />
    </>
  );
};

export default Layout;
