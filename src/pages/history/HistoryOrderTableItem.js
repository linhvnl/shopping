// import React/Hook/Router...
import React from "react";
import { Link } from "react-router-dom";

// function Component
const HistoryOrderTableItem = (props) => {
  // get data from props
  const item = props.item;

  // render cell content
  const cell = (value) => <td className="px-2 py-3 opacity-75">{value}</td>;

  // return
  return (
    <tr>
      {cell(item._id)}
      {cell(item.userId)}
      {cell(item.fullName)}
      {cell(item.phoneNumber)}
      {cell(item.address)}
      {cell(
        <div>
          {new Intl.NumberFormat("vi-VN").format(item.total)}
          <br />
          VND
        </div>
      )}
      {cell(item.delivery)}
      {cell(item.status)}
      {cell(
        <Link
          className="btn btn-outline-dark rounded-0 px-2 py-0 d-flex align-items-center"
          to={`/history/${item._id}`}
        >
          <span>View</span>
          <span className="fs-4 fw-bolder ps-1">&rarr;</span>
        </Link>
      )}
    </tr>
  );
};

export default HistoryOrderTableItem;
