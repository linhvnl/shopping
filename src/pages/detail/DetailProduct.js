// import React/Hook/Router...
import React from "react";

// import component
import DetailProductDescription from "./DetailProductDescription";
import DetailProductImage from "./DetailProductImage";
import DetailProductIntroduction from "./DetailProductIntroduction";
import DetailProductAddToCart from "./DetailProductAddToCart";

////////////////////
// function Component
const DetailProduct = (props) => {
  // lấy dữ liệu từ props
  const detail = props.detailProduct;

  // return
  return (
    <div className="container pb-2 my-5 text-secondary">
      {/* phần giới thiệu sản phẩm */}
      <div className="row mb-5">
        {/* giới thiệu hình ảnh */}
        <div className="col-6">
          <DetailProductImage {...detail} />
        </div>

        {/* giới thiệu nội dung */}
        <div className="col-6 pt-4 pe-4">
          <DetailProductIntroduction {...detail} />

          {/* button để thêm sản phẩm vào giỏ hàng */}
          <DetailProductAddToCart productId={detail._id} />
        </div>
      </div>

      {/* phần mô tả chi tiết sản phẩm */}
      <DetailProductDescription longDesc={detail.long_desc} />
    </div>
  );
};

export default DetailProduct;
