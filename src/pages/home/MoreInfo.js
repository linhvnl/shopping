// import React/Hook/Router...
import React from "react";

// function Component
const MoreInfo = () => {
  // text cho Footer
  const dummyInfo = [
    {
      col_number: 1,
      col_title: "FREE SHIPPING",
      col_value: "Free shipping worldwide",
    },
    {
      col_number: 2,
      col_title: "24 X 7 SERVICE",
      col_value: "Free shipping worldwide",
    },
    {
      col_number: 3,
      col_title: "FESTIVAL OFFER",
      col_value: "Free shipping worldwide",
    },
  ];

  // tạo list hiển thị footer
  const info = dummyInfo.map((item) => {
    return (
      <div key={item.col_number} className="col" style={{ paddingLeft: "13%" }}>
        <h5>{item.col_title}</h5>
        <p className="opacity-50 mb-0" style={{ fontSize: "14px" }}>
          {item.col_value}
        </p>
      </div>
    );
  });

  // return
  return (
    <div className="container bg-light py-5">
      <div className="row">{info}</div>
    </div>
  );
};

export default MoreInfo;
