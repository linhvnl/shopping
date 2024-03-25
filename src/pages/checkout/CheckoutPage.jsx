// import React/Hook/Router...
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import CUSTOM HOOK
import useHttpShopping from "../../hooks/use-http-shopping";

// import component
import PageBanner from "../../components/common/PageBanner";
import CheckoutOrder from "./CheckoutOrder";
import PlaceOrderForm from "./PlaceOrderForm";

import ComponentMessage from "../../components/common/ComponentMessage";

// function Component
const CheckoutPage = () => {
  // thông tin user to checkout
  const [user, setUser] = useState({});

  // trạng thái đã đặt đơn hàng thành công
  const [isOrderSuccess, setIsOrderSuccess] = useState({
    isSuccess: false,
    message: "",
  });

  // check stock product in cart
  const isStockInLack = user?.cart?.some(
    (item) => item.quantity > item.productId.count
  );

  const disableSubmit = isStockInLack
    ? {
        disable: true,
        message: "Sorry! Stock is not enough. Please change your cart",
      }
    : { disable: false };

  // dùng Custom Hook để fetch to Server và use cookies
  const { endPoints, customFetch, cookies } = useHttpShopping();

  useEffect(
    () => {
      // send request GET to fetch cart
      customFetch({
        auth: true, // default false
        token: cookies.token, // nếu auth true thì phải truyền token
        url: endPoints.fetchCheckout,
        errFunc: (data) => {
          console.log(data.message);
        },
        successFunc: (data) => {
          setUser(data);
        },
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cookies.token]
  );

  // hàm xử lý submit Order
  const submitOrderHandler = function (e) {
    e.preventDefault();

    const body = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      phoneNumber: e.target.phoneNumber.value,
      address: e.target.address.value,
      checkout: user.cart,
    };

    // send request POST to order
    customFetch({
      auth: true, // default false
      token: cookies.token, // nếu auth true thì phải truyền token
      method: "POST",
      url: endPoints.fetchOrderCreate,
      bodyObj: body,
      errFunc: (data) => {
        setIsOrderSuccess({
          isSuccess: false,
          message: data.message,
        });
      },
      successFunc: (data) => {
        setIsOrderSuccess({
          isSuccess: true,
          message: "",
        });
      },
    });
  };

  // return
  return (
    <>
      <PageBanner title="CHECKOUT" />

      {/* phần liệt kê giỏ hàng */}
      <div className="container px-0 mb-5">
        {/* tiêu đề */}
        <h3 className="mb-4">BILLING DETAILS</h3>

        {/* render: check no product in cart "user.cart?.length" */}
        {/* render: check order successfully "isOrderSuccess" */}
        {!user.cart?.length ? (
          <ComponentMessage
            message="No product in your cart..."
            toPath="shop"
          ></ComponentMessage>
        ) : isOrderSuccess.isSuccess ? (
          <ComponentMessage
            message="Order has placed successfully!"
            toPath="history"
            textColor="text-success"
          ></ComponentMessage>
        ) : (
          <div className="row pb-3">
            {/* Form điền thông tin đặt hàng */}
            <div className="col-7">
              <PlaceOrderForm
                user={user}
                onSubmitOrder={submitOrderHandler}
                disableSubmit={disableSubmit}
              />
            </div>

            {/* check order again */}
            <div className="col-5">
              <CheckoutOrder cart={user.cart} />
              {isOrderSuccess.message && (
                <div className="container bg-light text-center px-5 py-2">
                  <h4 className="text-danger mb-0">__CART UPDATED__</h4>
                  <p className="text-secondary mb-0">
                    {isOrderSuccess.message}
                  </p>
                  <Link to="/cart">
                    {" <"}Back to Cart{"> "}
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckoutPage;
