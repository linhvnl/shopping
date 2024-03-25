// import React/Hook/Router...
import React from "react";

// import component
import CartTableItem from "./CartTableItem";

// function Component
const CartTable = (props) => {
  // render row title
  const titleArr = [
    ["IMAGE", "auto"],
    ["PRODUCT", "auto"],
    ["PRICE", "auto"],
    ["QUANTITY", "auto"],
    ["TOTAL", "auto"],
    ["REMOVE", "auto"],
  ];

  const renderRowTitle = titleArr.map(([title, width], i) => (
    <th scope="col" key={i} className="text-secondary p-3" style={{ width }}>
      {title}
    </th>
  ));

  // return
  return (
    <div className="container">
      <div className="table-responsive pt-5 pb-2">
        <table
          className="table table-borderless text-center mb-5"
          style={{ verticalAlign: "middle" }}
        >
          {/* tiêu đề */}
          <thead>
            <tr className="table-light">{renderRowTitle}</tr>
          </thead>

          {/* list sản phẩm */}
          <tbody>
            {props.cart &&
              props.cart?.map((product) => {
                return (
                  <CartTableItem
                    key={product._id}
                    product={product}
                    onReLoad={props.onReLoad}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartTable;
