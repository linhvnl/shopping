// import React/Hook/Router...
import React from "react";

// import sử dụng REDUX STORE
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/sliceProduct";

////////////////////
// function Component
const ShopPagination = (props) => {
  // lấy dữ liệu products từ STORE
  const productStore = useSelector((state) => state.product);

  // dữ liệu phân trang
  const docsCount = productStore.docsCount;
  const docsPages = productStore.docsPages;
  const docStart = productStore.docStart;
  const docEnd = productStore.docEnd;
  const currentPage = productStore.currentPage;

  // style disable cho button chuyển trang
  const classDisablePrevious =
    docsCount === 0 || currentPage === 1 ? "disabled" : "";
  const classDisableNext =
    docsCount === 0 || currentPage === docsPages ? "disabled" : "";

  // sử dụng dispatch và Actions để cập nhật STORE hiển thị theo CATEGORY
  const dispatch = useDispatch();

  // return
  return (
    <div className="d-flex flex-column align-items-end">
      {/* phần pagination */}
      <nav aria-label="Page navigation example">
        <ul className="pagination mb-1">
          <li className="page-item me-1">
            <button
              className={`page-link text-dark rounded-0 ${classDisablePrevious}`}
              type="button"
              onClick={() =>
                dispatch(
                  productActions.SEARCH_CATEGORY_PRODUCT({ updatePage: -1 })
                )
              }
            >
              <span>&laquo;</span>
            </button>
          </li>

          {docsCount === 0 ? null : (
            <li className="page-item me-1">
              <span className="page-link bg-dark text-light">
                {currentPage}
              </span>
            </li>
          )}

          <li className="page-item">
            <button
              className={`page-link text-dark rounded-0 ${classDisableNext}`}
              type="button"
              onClick={() =>
                dispatch(
                  productActions.SEARCH_CATEGORY_PRODUCT({ updatePage: 1 })
                )
              }
            >
              <span>&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* text hiển thị số lượng kết quả*/}
      <p className="text-secondary">
        Showing {docStart}-{docEnd} of {docsCount} results
      </p>
    </div>
  );
};

export default ShopPagination;
