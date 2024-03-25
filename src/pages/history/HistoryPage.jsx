// import React/Hook/Router...
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

// import CUSTOM HOOK
import useHttpShopping from "../../hooks/use-http-shopping";

// import component
import PageBanner from "../../components/common/PageBanner";
import HistoryOrderTable from "./HistoryOrderTable";

import ComponentMessage from "../../components/common/ComponentMessage";

// function Component
const HistoryPage = () => {
  // orders data fetch
  const [orders, setOrders] = useState([]);

  // dùng Custom Hook để fetch to Server và use cookies
  const { endPoints, customFetch, cookies } = useHttpShopping();
  const userName = cookies.userName;

  useEffect(
    () => {
      // send request GET to fetch orders
      customFetch({
        auth: true, // default false
        token: cookies.token, // nếu auth true thì phải truyền token
        url: endPoints.fetchOrders,
        errFunc: (data) => {
          console.log(data.message);
        },
        successFunc: (data) => {
          setOrders(data);
          // console.log(data);
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

      <PageBanner title="HISTORY" />

      {/* danh sách order */}
      <div className="container px-0 mb-5">
        <div className="row">
          {/* nếu chưa có order thì thông báo người dùng */}
          {!orders?.length ? (
            <ComponentMessage
              message="You have no order..."
              toPath="shop"
            ></ComponentMessage>
          ) : (
            <HistoryOrderTable orders={orders} />
          )}
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
