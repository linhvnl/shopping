// import React/Hook/Router...
import React from "react";
import { Link } from "react-router-dom";

////////////////////
// function Component
const Pagination = (props) => {
  // lấy dữ liệu từ props
  // ------- logic phân trang -------
  // tổng số document
  const totalDocs = props.paginating.totalDocs;
  // số document trên 1 trang
  const perPage = props.paginating.perPage;
  // tổng số trang
  const totalPages = props.paginating.totalPages;
  // số trang hiện tại
  const page = props.paginating.page;
  // số document trang hiện tại
  const numDocs = props.paginating.numDocs;
  // --------
  // số START - END document trang hiện tại
  const numStart = (page - 1) * perPage + 1;
  const numEnd = numStart - 1 + numDocs;

  // --------------
  // return
  return (
    <div className="d-flex justify-content-end align-items-baseline border border-2 border-top-0 rounded-bottom">
      {/* text hiển thị số lượng kết quả*/}
      <p className="text-secondary fw-bold py-2 mb-0 me-4">
        {numStart}-{numEnd} of {totalDocs}
      </p>

      {/* phần pagination */}
      {/* previous page */}
      {page > 1 ? (
        <Link
          className="text-secondary text-decoration-none fw-bolder fs-5 px-3 py-2"
          to={`?perPage=${perPage}&page=${page - 1}`}
        >
          {"<"}
        </Link>
      ) : (
        <span className="fw-bolder fs-5 px-3 py-2 opacity-25">{"<"}</span>
      )}

      {/* next page */}
      {page < totalPages ? (
        <Link
          className="text-secondary text-decoration-none fw-bolder fs-5 px-3 py-2"
          to={`?perPage=${perPage}&page=${page + 1}`}
        >
          {">"}
        </Link>
      ) : (
        <span className="fw-bolder fs-5 px-3 py-2 opacity-25">{">"}</span>
      )}
    </div>
  );
};

export default Pagination;
