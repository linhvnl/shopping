// import React/Hook/Router...
import React from "react";
import { Link } from "react-router-dom";

// function Component
const CartNavToCheckOut = () => {
  // return
  return (
    <div className="container bg-light py-3">
      <div className="d-flex justify-content-between align-items-center h-100 px-3">
        <Link to="/shop" className="btn py-0 text-secondary">
          <span className="fs-4 fw-bolder">&larr;</span> Continue shopping
        </Link>
        <Link
          to="/checkout"
          className="btn btn-outline-dark rounded-0 py-0 text-secondary"
        >
          Proceed to checkout <span className="fs-4 fw-bolder">&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default CartNavToCheckOut;
