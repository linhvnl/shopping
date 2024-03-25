// import React/Hook/Router...
import React from "react";
import { useNavigate } from "react-router-dom";

// import icon/image
import product1 from "../../assets/image-icon/product_1.png";
import product2 from "../../assets/image-icon/product_2.png";
import product3 from "../../assets/image-icon/product_3.png";
import product4 from "../../assets/image-icon/product_4.png";
import product5 from "../../assets/image-icon/product_5.png";

////////////////////
// function Component
const Categories = () => {
  // sử dụng điều hướng
  const navigate = useNavigate();

  // tạo 1 item hiển thị 1 mục
  const item = (width, src) => {
    return (
      <div
        className="shadow-sm image-hover"
        style={{ width: width }}
        onClick={() => navigate("/shop")}
      >
        <img src={src} className="w-100" alt="category" />
      </div>
    );
  };

  // return
  return (
    <div className="container text-center px-0 mb-5">
      {/* tiêu đề */}
      <div className="mb-4">
        <p className="opacity-50 fs-5 mb-1">CAREFULLY CREATED COLLECTIONS</p>

        <h3>BROWSE OUR CATEGORIES</h3>
      </div>

      {/* group 2  */}
      <div className="d-flex justify-content-between mb-4">
        {item("49%", product1)}
        {item("49%", product2)}
      </div>

      {/* group 3  */}
      <div className="d-flex justify-content-between">
        {item("32%", product3)}
        {item("32%", product4)}
        {item("32%", product5)}
      </div>
    </div>
  );
};

export default Categories;
