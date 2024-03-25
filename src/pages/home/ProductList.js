// import React/Hook/Router...
import React from "react";

// import sử dụng REDUX STORE
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/sliceProduct";

// import component
import ProductItem from "../../components/common/ProductItem";

////////////////////
// function Component
const ProductList = () => {
  // lấy dữ liệu products từ STORE
  const products = useSelector((state) => state.product.products);
  const productsToShow8 = products?.slice(0, 8);

  // sử dụng dispatch và Actions để cập nhật STORE hiển thị popup
  const dispatch = useDispatch();

  // hàm xử lý sự kiện khi click vào hình ảnh để xem popup sản phẩm
  const showPopupHandler = function (id) {
    dispatch(productActions.SHOW_POPUP(id));
  };

  // tạo list item hiển thị 8 sản phẩm
  const items = productsToShow8?.map((product) => (
    <ProductItem
      key={product._id}
      product={product}
      onClickHandler={showPopupHandler}
    />
  ));

  // return
  return (
    <div className="container mb-5">
      {/* tiêu đề */}
      <div className="mb-4">
        <p className="opacity-50 fs-5 mb-1">MADE THE HARD WAY</p>

        <h3>TOP TRENDING PRODUCTS</h3>
      </div>

      {/* danh sách 8 sản phẩm */}
      <div className="row row-cols-4">{items}</div>
    </div>
  );
};

export default ProductList;
