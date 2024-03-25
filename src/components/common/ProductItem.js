// import React/Hook/Router...
import React from "react";

// import helpers functions
import srcImg from "../../utils/srcImg";

////////////////////
// function Component
const ProductItem = (props) => {
  // get data from props
  const { product, onClickHandler } = props;

  // return
  return (
    <div className="col text-center">
      <img
        src={srcImg(product.img1)}
        alt="product"
        className="w-100 mb-3 image-hover"
        onClick={onClickHandler.bind(null, product._id)}
      />
      <h5 className="fw-bold" onClick={onClickHandler.bind(null, product._id)}>
        {product.name}
      </h5>
      <p className="fs-5 opacity-75">
        {new Intl.NumberFormat("vi-VN").format(product.price)} VND
      </p>
    </div>
  );
};

export default ProductItem;
