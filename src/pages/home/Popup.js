// import React/Hook/Router...
import React from "react";
import { useNavigate } from "react-router-dom";

// import sử dụng REDUX STORE
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/sliceProduct";

// import helpers functions
import srcImg from "../../utils/srcImg";

// import icon/image
import iconCart2 from "../../assets/image-icon/icon-cart-2.png";

// import component
import Modal from "../../components/UI/Modal";

////////////////////
// function Component
const Popup = (props) => {
  // lấy dữ liệu 1 product cần hiển thị từ STORE
  const popup = useSelector((state) => state.product.popup);

  // sử dụng điều hướng từ Router
  const navigate = useNavigate();

  // sử dụng dispatch và Actions để cập nhật STORE hiển thị popup
  const dispatch = useDispatch();

  // hàm xử lý sự kiện ẩn/tắt popup sản phẩm
  const hidePopupHandler = function () {
    dispatch(productActions.HIDE_POPUP());
  };

  // return
  return (
    <Modal onClose={hidePopupHandler}>
      {/* nội dung Popup */}
      <div className="row">
        {/* hình ảnh */}
        <div className="col-6">
          <img
            src={srcImg(popup.img1)}
            alt="product"
            className="w-100 image-hover"
          />
        </div>

        {/* nội dung */}
        <div className="col-6 pb-4">
          {/* nút đóng Popup */}
          <div className="text-end">
            <button
              type="button"
              className="bg-transparent border-0 fs-4"
              onClick={hidePopupHandler}
            >
              X
            </button>
          </div>

          {/* mô tả sản phẩm */}
          <div className="p-4">
            <h4 className="fw-bold">{popup.name}</h4>
            <p className="fs-5 mb-2">
              {new Intl.NumberFormat("vi-VN").format(popup.price)} VND
            </p>
            <p className="opacity-75 mb-4">{popup.short_desc}</p>

            {/* button để xem chi tiết sản phẩm */}
            <button
              type="button"
              className="d-flex align-items-center btn btn-dark rounded-0 fst-italic fw-bold text-secondary px-4 p-1"
              onClick={() => {
                navigate(`/detail/${popup._id}`);
                hidePopupHandler();
              }}
            >
              <img
                src={iconCart2}
                alt="icon"
                style={{
                  width: "16px",
                  marginRight: "6px",
                  opacity: "60%",
                }}
              />
              View Detail
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Popup;
