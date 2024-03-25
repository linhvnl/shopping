// import React/Hook/Router...
import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

// import CUSTOM HOOK
import useHttpShopping from "../../hooks/use-http-shopping";

// import component
import PageBanner from "../../components/common/PageBanner";
import HistoryDetailOrderTable from "./HistoryDetailOrderTable";

////////////////////
// function Component
const HistoryDetailPage = (props) => {
  // get params
  const { orderId } = useParams();

  // order data fetch
  const [order, setOrder] = useState([]);

  // dùng Custom Hook để fetch to Server và use cookies
  const { endPoints, customFetch, cookies } = useHttpShopping();
  const userName = cookies.userName;

  useEffect(
    () => {
      // send request GET to fetch orders
      customFetch({
        auth: true, // default false
        token: cookies.token, // nếu auth true thì phải truyền token
        url: endPoints.fetchOrder + orderId,
        errFunc: (data) => {
          console.log(data.message);
        },
        successFunc: (data) => {
          // console.log(data);
          setOrder(data);
        },
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // return
  return (
    <>
      {/* nếu chưa LOG IN thì chuyển hướng về page login */}
      {!userName && <Navigate to="/login"></Navigate>}

      <PageBanner title="ORDER DETAIL" />

      <div className="container px-5 mb-5">
        <h3 className="opacity-90">INFORMATION ORDER</h3>
        <p className="opacity-90 mb-0">ID User: {order.userId}</p>
        <p className="opacity-90 mb-0">Full Name: {order.fullName}</p>
        <p className="opacity-90 mb-0">Phone: {order.phoneNumber}</p>
        <p className="opacity-90 mb-0">Address: {order.address}</p>
        <p className="opacity-90 mb-0">
          Total: {new Intl.NumberFormat("vi-VN").format(order.total)} VND
        </p>
        <p className="opacity-90 mb-0">Status: {order.status}</p>
      </div>

      <HistoryDetailOrderTable items={order.items} />
    </>
  );
};

export default HistoryDetailPage;
