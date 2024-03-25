// import React/Hook/Router...
import React from "react";
import { Link } from "react-router-dom";

////////////////////
// function Component
const ComponentMessage = (props) => {
  // lấy dữ liệu props
  const message = props.message;
  const toPath = props.toPath;
  const textColor = props.textColor || "text-secondary";

  // return
  return (
    <div className="mt-3 mb-5 text-center">
      <p className={`fs-5 ${textColor} mb-0`}>{message}</p>
      <Link to={`/${toPath}`} className="btn text-warning w-auto p-0">
        Go to {toPath} <span className="fs-4 fw-bolder">&rarr;</span>
      </Link>
    </div>
  );
};

export default ComponentMessage;
