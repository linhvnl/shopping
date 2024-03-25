// import React/Hook/Router...
import React from "react";

// function Component
const CheckoutOrder = (props) => {
  // lấy dữ liệu từ props
  const cart = props.cart;

  // tính total của giỏ hàng
  const total = cart?.reduce(
    (sum, item) => sum + item.productId.price * item.quantity,
    0
  );

  // return
  return (
    <div className="container bg-light p-5">
      {/* tiêu đề */}
      <h3 className="mb-3">YOUR ORDER</h3>

      {/* list sản phẩm */}
      {cart?.map((product) => {
        return (
          <div key={product.productId._id} className="border-bottom py-2">
            <div className="d-flex justify-content-between align-items-baseline">
              <p
                className="fw-bold mb-0 overflow-hidden"
                style={{ height: "1.5rem" }}
              >
                {product.productId.name}
              </p>
              <p
                className="opacity-75 text-nowrap mb-0 ms-1"
                style={{ height: "1.5rem", fontSize: "14px" }}
              >
                {new Intl.NumberFormat("vi-VN").format(product.productId.price)}{" "}
                VND x {product.quantity}
              </p>
            </div>
            {product.quantity > product.productId.count && (
              <p className="text-danger mb-0" style={{ fontSize: "14px" }}>
                Stock is not enough, only {product.productId.count} left
              </p>
            )}
          </div>
        );
      })}

      {/* total */}
      <div className="d-flex justify-content-between py-2">
        <p className="fw-bold mb-0">TOTAL</p>
        <p className="mb-0">
          {new Intl.NumberFormat("vi-VN").format(total)} VND
        </p>
      </div>
    </div>
  );
};

export default CheckoutOrder;
