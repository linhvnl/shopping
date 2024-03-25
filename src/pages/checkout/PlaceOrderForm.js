// import React/Hook/Router...
import React from "react";
import { Link } from "react-router-dom";

// function Component
const PlaceOrderForm = (props) => {
  // lấy dữ liệu từ props
  const user = props.user;
  const onSubmitOrder = props.onSubmitOrder;
  const disableSubmit = props.disableSubmit;

  const DUMMY_INPUT = [
    {
      label: "FULL NAME:",
      type: "text",
      name: "fullName",
      placeholder: "Enter Your Full Name Here!",
      defaultValue: user.fullName,
    },
    {
      label: "EMAIL:",
      type: "email",
      name: "email",
      placeholder: "Enter Your Email Here!",
      defaultValue: user.email,
    },
    {
      label: "PHONE NUMBER:",
      type: "tel",
      name: "phoneNumber",
      placeholder: "Enter Your Phone Number Here!",
      defaultValue: user.phoneNumber,
    },
    {
      label: "ADDRESS:",
      type: "text",
      name: "address",
      placeholder: "Enter Your Address Here!",
    },
  ];

  // return
  return (
    <form onSubmit={onSubmitOrder}>
      {/*  các input */}
      {DUMMY_INPUT.map((item) => (
        <div key={item.name} className="mb-3">
          <label className="form-label text-secondary mb-2">{item.label}</label>
          <input
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            defaultValue={item.defaultValue}
            className="form-control rounded-0 opacity-75 px-3 py-2 fs-5"
            required
          />
        </div>
      ))}

      {/* button */}
      <div className="py-3">
        <button
          type="submit"
          className="btn btn-dark rounded-0 fs-5 fw-lighter text-white fst-italic text-opacity-75 px-4"
          disabled={disableSubmit.disable}
        >
          Place order
        </button>
        {disableSubmit.message && (
          <p className="text-danger">
            {disableSubmit.message}{" "}
            <Link to="/cart">
              {" <"}Back to Cart{"> "}
            </Link>
          </p>
        )}
      </div>
    </form>
  );
};

export default PlaceOrderForm;
