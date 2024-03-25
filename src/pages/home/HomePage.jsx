// import React/Hook/Router...
import React from "react";

// import sử dụng REDUX STORE
import { useSelector } from "react-redux";

// import component
import Banner from "./Banner";
import Categories from "./Categories";
import ProductList from "./ProductList";
import MoreInfo from "./MoreInfo";
import Subscribe from "./Subscribe";
import Popup from "./Popup";

////////////////////
// function Component
const HomePage = () => {
  // lấy state để xem có hiển thị Popup hay không
  const isShowPopup = useSelector((state) => state.product.isShowPopup);

  return (
    <>
      <Banner />
      <Categories />
      <ProductList />
      {isShowPopup && <Popup />}
      <MoreInfo />
      <Subscribe />
    </>
  );
};

export default HomePage;
