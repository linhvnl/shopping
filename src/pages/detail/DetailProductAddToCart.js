// import React/Hook/Router...
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import CUSTOM HOOK
import useHttpShopping from "../../hooks/use-http-shopping";

// import icon/image
import iconArrowLeft from "../../assets/image-icon/icon-arrow-left-FREEPIK.png";
import iconArrowRight from "../../assets/image-icon/icon-arrow-right-FREEPIK.png";

////////////////////
// function Component
const DetailProductAddToCart = (props) => {
  // dùng useState cho input để cập nhật số lượng
  const [quantity, setQuantity] = useState(1);

  // dùng Custom Hook để fetch to Server và use cookies
  const { endPoints, customFetch, cookies } = useHttpShopping();

  // sử dụng điều hướng khi người dùng click ADD TO CART nhưng chưa LOG IN
  const navigate = useNavigate();

  // hàm xử lý ADD sản phẩm vào cart
  const addToCartHandler = function () {
    if (!cookies.token) return navigate("/login");

    // send request POST to update cart
    customFetch({
      auth: true, // default false
      token: cookies.token, // nếu auth true thì phải truyền token
      method: "POST",
      url: endPoints.fetchCartUpdate,
      bodyObj: {
        action: "UPDATE",
        productId: props.productId,
        quantity: quantity,
      },
      errFunc: (data) => {
        console.log(data.message);
      },
      successFunc: (data) => {
        navigate("/cart");
      },
    });
  };

  // return
  // button để thêm sản phẩm vào giỏ hàng
  return (
    <div className="d-flex align-items-center">
      {/* label, button và input xử lý chọn số lượng sản phẩm */}
      <div className="border py-1">
        <span className="ps-2 pe-4">QUANTITY</span>

        <img
          src={iconArrowLeft}
          alt="icon-left"
          className="ms-3"
          style={{ width: "16px" }}
          onClick={() => setQuantity((prevState) => +prevState - 1)}
        />
        <input
          type="text"
          className="border-0 text-center px-0"
          size="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <img
          src={iconArrowRight}
          alt="icon-right"
          className="me-3"
          style={{ width: "16px" }}
          onClick={() => setQuantity((prevState) => +prevState + 1)}
        />
      </div>

      {/* button xử lý thêm sản phẩm vào giỏ hàng */}
      <button
        type="button"
        className="btn btn-dark rounded-0 border-2 fst-italic text-white text-opacity-75 px-4 py-1"
        onClick={addToCartHandler}
      >
        Add to cart
      </button>
    </div>
  );
};

export default DetailProductAddToCart;
