// import React/Hook/Router...
import React, { useEffect } from "react";

// import sử dụng REDUX STORE
import { useDispatch } from "react-redux";
import { productActions } from "../../store/sliceProduct";

// function Component
const ShopNavbar = (props) => {
  // sử dụng dispatch và Actions để cập nhật STORE hiển thị theo CATEGORY
  const dispatch = useDispatch();

  // khởi tạo dữ liệu ban đầu là tất cả product cho state category ở STORE
  useEffect(() => {
    dispatch(productActions.SEARCH_CATEGORY_PRODUCT({ keyCategory: "all" }));
  }, [dispatch]);

  // tạo hàm xử lý tìm kiếm theo danh mục để hiển thị
  const searchCategoryHandler = function (keyCategory) {
    dispatch(productActions.SEARCH_CATEGORY_PRODUCT({ keyCategory }));
  };

  // tạo 1 tên danh mục
  const categoryName = function (title) {
    return (
      <p className="bg-dark bg-opacity-10 fw-bolder px-4 py-3 mb-2">{title}</p>
    );
  };

  // tạo 1 button để tìm kiếm theo danh mục
  const categoryButton = function (title) {
    return (
      <button
        type="button"
        name={title.toLowerCase()}
        className={`d-block bg-transparent border-0 text-black-50 fst-italic fw-bold px-4 py-1 mb-1 ${"abc"}`}
        onClick={(e) => searchCategoryHandler(e.target.name)}
      >
        {title}
      </button>
    );
  };

  // return
  return (
    <div className="col-3 p-0 text-secondary">
      <h4 className="fw-bolder mb-4">CATEGORIES</h4>

      <p className="bg-dark text-white-50 fw-bold px-4 py-3 mb-2">APPLE</p>
      {categoryButton("All")}

      {/* --- */}
      {categoryName("iPHONE & MAC")}
      {categoryButton("iPhone")}
      {categoryButton("iPad")}
      {categoryButton("Macbook")}

      {/* --- */}
      {categoryName("iWIRELESS")}
      {categoryButton("Airpod")}
      {categoryButton("Watch")}

      {/* --- */}
      {categoryName("OTHER")}
      {categoryButton("Mouse")}
      {categoryButton("Keyboard")}
      {categoryButton("Other")}
    </div>
  );
};

export default ShopNavbar;
