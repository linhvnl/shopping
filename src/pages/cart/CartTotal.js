// import React/Hook/Router...
import React from "react";

// import icon/image
import iconGift from "../../assets/image-icon/icon-gift-coupon.png";

// function Component
const CartTotal = (props) => {
  // return
  return (
    <div className="container bg-light p-5">
      {/* tiêu đề */}
      <h3 className="mb-3">CART TOTAL</h3>
      {/* subtotal */}
      <div className="d-flex justify-content-between py-2">
        <p className="mb-0">SUBTOTAL</p>
        <p className="opacity-75 mb-0" style={{ fontSize: "14px" }}>
          {new Intl.NumberFormat("vi-VN").format(props.total)} VND
        </p>
      </div>
      {/* total */}
      <div className="d-flex justify-content-between border-top py-2 mb-3">
        <p className="mb-0">TOTAL</p>
        <p className="mb-0">
          {new Intl.NumberFormat("vi-VN").format(props.total)} VND
        </p>
      </div>
      {/* coupon */}
      <div className="border">
        <input
          type="text"
          name="coupon"
          placeholder="Enter your coupon"
          className="border-0 w-100 opacity-75 px-3 py-2"
        />{" "}
        <button
          type="button"
          className="d-flex justify-content-center align-items-center btn btn-dark rounded-0 border-2 text-white text-opacity-75 w-100 p-2"
        >
          {/* chèn icon */}
          <img
            src={iconGift}
            alt="icon"
            style={{
              width: "14px",
              marginRight: "6px",
            }}
          />

          {/* tiêu đề nút */}
          <span>Apply coupon</span>
        </button>
      </div>{" "}
    </div>
  );
};

export default CartTotal;
