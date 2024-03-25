// import React/Hook/Router...
import React, { useState } from "react";

// import helpers functions
import srcImg from "../../utils/srcImg";

////////////////////
// function Component
const DetailProductImage = (props) => {
  // đặt state để hiển thị hình ảnh chính tùy vào click chọn các hình ảnh nhỏ
  const [mainImg, setMainImg] = useState("img1");

  // hiển thị 1 hình ảnh nhỏ
  const renderImg = (img, key) => (
    <img
      src={srcImg(img)}
      className="w-100 mb-3"
      alt="product"
      onClick={() => setMainImg(key)}
    />
  );

  // return
  // giới thiệu hình ảnh
  return (
    <div className="row">
      <div className="col-2">
        {props.img1 && renderImg(props.img1, "img1")}
        {props.img2 && renderImg(props.img2, "img2")}
        {props.img3 && renderImg(props.img3, "img3")}
        {props.img4 && renderImg(props.img4, "img4")}
        {props.img5 && renderImg(props.img5, "img5")}
      </div>
      <div className="col-9">
        <img
          src={srcImg(props[mainImg])}
          alt="product-main-img"
          className="w-100"
        />
      </div>
    </div>
  );
};

export default DetailProductImage;
