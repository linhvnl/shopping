// import React/Hook/Router...
import React from "react";

////////////////////
// function Component
const DetailProductIntroduction = (props) => {
  // return
  return (
    <div className="mb-4">
      <h2 className="text-black mb-3">{props.name}</h2>
      <p className="fs-5 mb-3">
        {new Intl.NumberFormat("vi-VN").format(props.price)} VND
      </p>
      <p className="mb-4">{props.short_desc}</p>
      <p className="fw-bold mb-0">
        CATEGORY:&ensp;
        <span className="fw-normal">{props.category}</span>
      </p>
    </div>
  );
};

export default DetailProductIntroduction;
