// import React/Hook/Router...
import React from "react";

// import helpers functions
import srcImg from "../../utils/srcImg";

// function Component
const HistoryDetailOrderTableItem = (props) => {
  // get data from props
  const item = props.item;

  // render cell content
  const cell = (value) => <td className="p-3 opacity-90">{value}</td>;

  // return
  return (
    <tr>
      {cell(item.productId._id)}
      {cell(
        <img
          src={srcImg(item.productId.img1)}
          alt="product"
          style={{ width: "100px" }}
        />
      )}
      {cell(item.productId.name)}
      {cell(
        <div>
          {new Intl.NumberFormat("vi-VN").format(item.productId.price)} VND
        </div>
      )}
      {cell(item.quantity)}
    </tr>
  );
};

export default HistoryDetailOrderTableItem;
