// import React/Hook/Router...
import React from "react";
import { Link } from "react-router-dom";

// function Component

const PageBanner = (props) => {
  // return
  return (
    <div className="container bg-light mb-5" style={{ height: "150px" }}>
      <div className="d-flex justify-content-between align-items-center h-100 px-5">
        <h4 className="fw-bold mb-0">{props.title}</h4>
        <p className="mb-0">
          {/* nếu page CHECKOUT thì thêm điều hướng về Home và Cart */}
          {props.title === "CHECKOUT" && (
            <>
              <Link to="/" className="text-decoration-none text-dark fw-bold">
                HOME
              </Link>
              &ensp;/&ensp;
              <Link
                to="/cart"
                className="text-decoration-none text-dark fw-bold"
              >
                CART
              </Link>
              &ensp;/&ensp;
            </>
          )}

          {/* nếu page ORDER DETAIL thì thêm điều hướng về History */}
          {props.title === "ORDER DETAIL" && (
            <>
              <Link
                to="/history"
                className="text-decoration-none text-dark fw-bold"
              >
                HISTORY
              </Link>
              &ensp;/&ensp;
            </>
          )}

          <span className="fw-bold opacity-50">{props.title}</span>
        </p>
      </div>
    </div>
  );
};

export default PageBanner;
