// import React/Hook/Router...
import React, { useState, useEffect } from "react";

// import CUSTOM HOOK
import useHttpShopping from "../../hooks/use-http-shopping";

// import component
import PageBanner from "../../components/common/PageBanner";
import CartTable from "./CartTable";
import CartNavToCheckOut from "./CartNavToCheckOut";
import CartTotal from "./CartTotal";

import ComponentMessage from "../../components/common/ComponentMessage";

// function Component
const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [reLoad, setReLoad] = useState(true);

  // dùng Custom Hook để fetch to Server và use cookies
  const { endPoints, customFetch, cookies } = useHttpShopping();
  const userName = cookies.userName;

  // tính total của giỏ hàng
  const total = cart?.reduce(
    (sum, item) => sum + item.productId.price * item.quantity,
    0
  );

  useEffect(
    () => {
      if (reLoad) {
        setReLoad(false);
        // send request GET to fetch cart
        customFetch({
          auth: true, // default false
          token: cookies.token, // nếu auth true thì phải truyền token
          url: endPoints.fetchCart,
          errFunc: (data) => {
            console.log(data.message);
          },
          successFunc: (data) => {
            setCart(data);
          },
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [reLoad, cookies.token]
  );

  // return
  return (
    <>
      <PageBanner title="CART" />

      {/* phần liệt kê giỏ hàng */}
      <div className="container px-0 mb-5">
        {/* tiêu đề */}
        <h3 className="mb-4">SHOPPING CART</h3>

        {/* danh sách sản phẩm trong giỏ hàng */}
        <div className="row pb-3">
          {/* nếu chưa LOG IN thì thông báo người dùng */}
          {/* nếu chưa có sản phẩm trong giỏ hàng thì thông báo người dùng */}
          {!userName ? (
            <ComponentMessage
              message="You haven't log in yet..."
              toPath="login"
            ></ComponentMessage>
          ) : !cart?.length ? (
            <ComponentMessage
              message="No product in your cart..."
              toPath="shop"
            ></ComponentMessage>
          ) : (
            <>
              <div className="col-8">
                <CartTable cart={cart} onReLoad={setReLoad} />

                <CartNavToCheckOut />
              </div>
              <div className="col-4">
                <CartTotal total={total} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
