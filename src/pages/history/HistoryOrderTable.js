// import React/Hook/Router...
import React from "react";

// import component
import HistoryOrderTableItem from "./HistoryOrderTableItem";

////////////////////
// function Component
const HistoryOrderTable = (props) => {
  // get data from props
  const orders = props.orders;

  // render row title
  const titleArr = [
    ["ID ORDER", "auto"],
    ["ID USER", "auto"],
    ["NAME", "auto"],
    ["PHONE", "auto"],
    ["ADDRESS", "auto"],
    ["TOTAL", "auto"],
    ["DELIVERY", "auto"],
    ["STATUS", "auto"],
    ["DETAIL", "auto"],
  ];

  const renderRowTitle = titleArr.map(([title, width], i) => (
    <th scope="col" key={i} className="text-secondary p-3" style={{ width }}>
      {title}
    </th>
  ));

  // return
  return (
    <div className="container">
      <div className="table-responsive">
        <table
          className="table table-borderless text-center"
          style={{ verticalAlign: "middle" }}
        >
          <thead className="bg-light">
            <tr className="table-light text-cenpter">{renderRowTitle}</tr>
          </thead>
          <tbody>
            {orders &&
              orders?.map((item) => {
                return <HistoryOrderTableItem key={item._id} item={item} />;
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryOrderTable;
