// import React/Hook/Router...
import React from "react";

// import component
import HistoryDetailOrderTableItem from "./HistoryDetailOrderTableItem";

////////////////////
// function Component
const HistoryDetailOrderTable = (props) => {
  // get data from props
  const items = props.items;

  // render row title
  const titleArr = [
    ["ID PRODUCT", "auto"],
    ["IMAGE", "auto"],
    ["NAME", "auto"],
    ["PRICE", "auto"],
    ["COUNT", "auto"],
  ];

  const renderRowTitle = titleArr.map(([title, width], i) => (
    <th scope="col" key={i} className="text-secondary p-3" style={{ width }}>
      {title}
    </th>
  ));

  // return
  return (
    <div className="container pt-4 mb-5">
      <div className="table-responsive">
        <table
          className="table table-borderless text-center"
          style={{ verticalAlign: "middle" }}
        >
          <thead className="bg-light">
            <tr className="table-light text-cenpter">{renderRowTitle}</tr>
          </thead>
          <tbody>
            {items &&
              items.map((item) => {
                return (
                  <HistoryDetailOrderTableItem key={item._id} item={item} />
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryDetailOrderTable;
