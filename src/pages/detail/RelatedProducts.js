// import React/Hook/Router...
import React from "react";
import { useNavigate } from "react-router-dom";

// import Component
import ProductItem from "../../components/common/ProductItem";

////////////////////
// function Component
const RelatedProducts = (props) => {
  // lấy dữ liệu từ props
  const related = props.relatedProducts;

  // sử dụng điều hướng từ Router
  const navigate = useNavigate();

  // hàm xử lý sự kiện khi click vào hình ảnh để đi đến trang DetailPage theo id
  const navigateDetailPageHandler = function (id) {
    navigate(`/detail/${id}`);
  };

  // return
  return (
    <div className="container mb-5">
      <h4 className="mb-4">RELATED PRODUCTS</h4>
      <div className="row row-cols-4">
        {related?.map((product) => (
          <ProductItem
            key={product._id}
            product={product}
            onClickHandler={navigateDetailPageHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
