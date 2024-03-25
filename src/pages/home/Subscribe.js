// import React/Hook/Router...
import React from "react";

// function Component
const Subscribe = () => {
  // return
  return (
    <div className="container py-5">
      <div className="row row-cols-2">
        <div className="col">
          <h4 className="mb-0">LET'S BE FRIENDS!</h4>
          <p className="opacity-50" style={{ fontSize: "14px" }}>
            Nisi nisi tempor consequat laboris nisi.
          </p>
        </div>

        <div className="col">
          <div className="input-group">
            <input
              type="email"
              className="form-control border-2 rounded-0 opacity-50"
              placeholder="Enter your email address"
            />
            <button type="button" className="btn btn-dark rounded-0 px-4 py-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
