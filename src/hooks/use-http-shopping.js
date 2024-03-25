// import React/Hook/...
import { useCallback } from "react";
import { useCookies } from "react-cookie";

//________________________________
// function custom hook
// => tạo object chứa endPoints đầy đủ và các phương thức để fetch API từ SERVER
const useHttpShopping = () => {
  //________________________________
  // server
  const origin = process.env.REACT_APP_API_ENDPOINT_ORIGIN;

  // url - route
  const requests = {
    // authorization
    fetchSignup: `/signup`,
    fetchLogin: `/login`,

    // LOADER => fetch dữ liệu home và detail page (NOTE)
    fetchProducts: `/products`,
    fetchProduct: `/products/:productId`,

    // cart
    fetchCart: `/client/cart`,
    // update cart: action "UPDATE" / "DELETE"
    fetchCartUpdate: `/client/cart/update`,

    // checkout
    fetchCheckout: `/client/checkout`,

    // create order
    fetchOrderCreate: `/client/order/create`,

    // order (history)
    fetchOrders: `/client/orders`,
    // fetchOrder: `/client/order/:orderId`,
    fetchOrder: `/client/order/`,
  };

  // tạo object chứa endPoints đầy đủ để fetch
  let endPoints = {};
  for (const key in requests) {
    const endPoint = origin + requests[key];
    endPoints[key] = endPoint;
  }

  // sử dụng cookie cho dữ liệu authentication
  const [cookies, setCookie, removeCookie] = useCookies([
    "token",
    "expires",
    "userName",
  ]);

  //________________________________
  // phương thức để fetch
  const customFetch = useCallback(async function ({
    auth = false,
    token,
    method = "GET",
    url,
    bodyObj = null,
    errFunc = (data) => {},
    successFunc = (data) => {},
  }) {
    // send request
    let response, options;

    // if API needs no authentication (auth = false)
    if (!auth) {
      // configuration to fetch
      options =
        method === "GET"
          ? {}
          : {
              method,
              body: JSON.stringify(bodyObj),
              headers: {
                "Content-Type": "application/json",
              },
            };
    } else {
      // if API needs authentication (auth = true)
      // check token
      if (!token) return;

      // configuration to fetch
      options =
        method === "GET"
          ? {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          : {
              method,
              body: JSON.stringify(bodyObj),
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
              },
            };
    }

    // fetch
    response = await fetch(url, options);

    // xử lý response data
    const data = await response.json();
    // console.log(data);

    response.status === 200 || response.status === 201
      ? successFunc(data)
      : errFunc(data);
  },
  []);

  //________________________________
  // return về 1 object
  return {
    endPoints,
    customFetch,
    cookies,
    setCookie,
    removeCookie,
  };
};

// export
export default useHttpShopping;

/*
// ____________________
// sử dụng CUSTOM HOOK
// ____________________
// import CUSTOM HOOK
import useHttpShopping from "../../hooks/use-http-shopping";
import useHttpShopping from "../hooks/use-http-shopping";

// dùng Custom Hook để fetch to Server và use cookies
const { endPoints, customFetch, cookies, setCookie, removeCookie, } = useHttpShopping();
// "token", "expires", "userName",

// send request POST
customFetch({
  auth: true, // default false
  token: cookies.token, // nếu auth true thì phải truyền token
  method: "POST",
  url: endPoints.fetchSignup,
  bodyObj: { username: inputUsername.enteredValue,},
  errFunc: (data) => {console.log(data.message)},
  successFunc: (data) => {},
});

// send request GET
customFetch({
  auth: true, // default false
  token: cookies.token, // nếu auth true thì phải truyền token
  url: endPoints.fetchSignup,
  errFunc: (data) => {console.log(data.message)},
  successFunc: (data) => {},
});
*/

/*
// ____________________
// sử dụng ROUTE LOADER
// ____________________
// import React/Hook/Router...
import { useLoaderData } from "react-router-dom";

// a hotel detail trả về từ Server
const hotel = useLoaderData();

// hàm loader để lấy dữ liệu HOTELS từ API
export async function loader({ request, params }) {
  // lấy id của hotel từ params
  const hotelID = params.hotelID;

  // fetch dữ liệu
  return fetch("process.env.API_ENDPOINT_ORIGIN/client/detail/" + hotelID);
}
*/
