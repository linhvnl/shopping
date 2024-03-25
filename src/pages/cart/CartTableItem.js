// import React/Hook/Router...
import React from "react";
import { Link } from "react-router-dom";

// import CUSTOM HOOK
import useHttpShopping from "../../hooks/use-http-shopping";

// import helpers functions
import srcImg from "../../utils/srcImg";

// import component
import CartTableItemUpdateQuantity from "./CartTableItemUpdateQuantity";

// import icon/image
import iconDustBin from "../../assets/image-icon/icon-dust-bin.svg";

// function Component
const CartTableItem = (props) => {
  // lấy props
  const { productId, quantity } = props.product;

  // dùng Custom Hook để fetch to Server và use cookies
  const { endPoints, customFetch, cookies } = useHttpShopping();

  // hàm xử lý ADD sản phẩm vào cart
  const updateCartHandler = ({ action = "UPDATE", quantity = 0 }) => {
    // send request POST to update cart
    customFetch({
      auth: true, // default false
      token: cookies.token, // nếu auth true thì phải truyền token
      method: "POST",
      url: endPoints.fetchCartUpdate,
      bodyObj: {
        action,
        productId: productId._id,
        quantity,
      },
      errFunc: (data) => {
        console.log(data.message);
      },
      successFunc: (data) => {
        props.onReLoad(true);
      },
    });
  };

  // return
  return (
    <tr>
      <td className="p-3">
        <img
          src={srcImg(productId.img1)}
          alt="product"
          style={{ width: "60px" }}
        />
      </td>

      <td className="fw-bold px-4 py-3">
        <Link
          to={`/detail/${productId._id}`}
          className="text-decoration-none text-black"
        >
          {productId.name}
        </Link>
      </td>

      <td className="opacity-75 p-3" style={{ fontSize: "14px" }}>
        {new Intl.NumberFormat("vi-VN").format(productId.price)}
        <br />
        VND
      </td>

      <td className="p-3">
        <CartTableItemUpdateQuantity
          quantity={quantity}
          onUpdateQuantity={updateCartHandler}
        />
      </td>

      <td className="opacity-75 p-3" style={{ fontSize: "14px" }}>
        {new Intl.NumberFormat("vi-VN").format(productId.price * quantity)}
        <br />
        VND
      </td>

      <td className="p-3">
        <button
          type="button"
          className="bg-transparent border-0"
          onClick={updateCartHandler.bind(null, { action: "DELETE" })}
        >
          <img src={iconDustBin} alt="icon" style={{ width: "16px" }} />
        </button>
      </td>
    </tr>
  );
};

export default CartTableItem;
