// import React/Hook/Router...
import React from "react";

// import component
import PageBanner from "../../components/common/PageBanner";
import ShopNavbar from "./ShopNavbar";
import ShopProductList from "./ShopProductList";

////////////////////
// function Component
const ShopPage = () => {
  return (
    <>
      <PageBanner title="SHOP" />
      <div className="container mb-5">
        <div className="row">
          <ShopNavbar />
          <ShopProductList />
        </div>
      </div>
    </>
  );
};

export default ShopPage;
