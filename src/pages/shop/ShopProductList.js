// import React/Hook/Router...
import React from "react";
import { useNavigate } from "react-router-dom";

// import sử dụng REDUX STORE
import { useSelector } from "react-redux";

// import Component
import ShopPagination from "./ShopPagination";
import ProductItem from "../../components/common/ProductItem";

////////////////////
// function Component
const ShopProductList = () => {
  // lấy dữ liệu products từ STORE
  const categoryShow = useSelector((state) => state.product.categoryShow);

  // sử dụng điều hướng từ Router
  const navigate = useNavigate();

  // tạo list item hiển thị 8 sản phẩm
  const items =
    categoryShow &&
    categoryShow?.map((product) => (
      <ProductItem
        key={product._id}
        product={product}
        onClickHandler={(id) => navigate(`/detail/${id}`)}
      />
    ));

  // return
  return (
    <div className="col-9 p-0 ps-5">
      {/* phần input search*/}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <input
          type="text"
          size="25"
          className="opacity-50 px-3 py-2"
          placeholder="Enter Search Here!"
        />

        <select name="sort" id="sort" className="text-secondary fw-bold">
          <option value="default">Default sorting </option>
        </select>
      </div>

      {/* danh sách các sản phẩm search theo CATEGORY */}
      <div className="row row-cols-3 g-2 mb-5">{items}</div>

      {/* phần pagination */}
      <ShopPagination />
    </div>
  );
};

export default ShopProductList;
