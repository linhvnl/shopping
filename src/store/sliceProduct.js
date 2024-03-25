// import React/Hook/...
import { createSlice } from "@reduxjs/toolkit";

// HELPERS
const paginationHelper = function (totalDocs, perPage, page) {
  const totalPages = Math.ceil(totalDocs / perPage);
  const docStart = (page - 1) * perPage + 1;
  const docEnd =
    docStart + perPage - 1 < totalDocs ? docStart + perPage - 1 : totalDocs;

  return { totalPages, docStart, docEnd };
};
// const {totalPages, docStart, docEnd} = paginationHelper(totalDocs, perPage, page)

// -----------------
// tạo SLICE
const initialProductState = {
  // trang Home
  products: [],
  popup: {},
  isShowPopup: false,

  // trang Shop
  // mảng chứa tổng categories
  category: [],
  // các docs hiển thị trên page hiện tại
  categoryShow: [],
  // quy định số doc hiển thị trên 1 page
  docsPerPage: 6,
  // tổng số docs theo category
  docsCount: 0,
  // tổng số pages theo category
  docsPages: 0,
  // start - end doc of page
  docStart: 0,
  docEnd: 0,
  // number of current page
  currentPage: 0,
};

const sliceProduct = createSlice({
  name: "product",
  initialState: initialProductState,

  reducers: {
    // -----------------
    // ACTION LOAD API ĐẦU TIÊN
    // lưu data products từ loader API đầu tiên khi tải trang
    LOAD_PRODUCT(state, action) {
      state.products = action.payload;
    },

    // -----------------
    // ACTION CHO HOMEPAGE
    // hiển thị popup theo _id sản phẩm
    SHOW_POPUP(state, action) {
      state.popup = state.products.find((item) => item._id === action.payload);
      state.isShowPopup = true;
    },

    // ẩn popup
    HIDE_POPUP(state) {
      state.isShowPopup = false;
    },

    // -----------------
    // ACTION CHO SHOPPAGE
    // hiển thị product theo category đầu tiên <ALL>
    SEARCH_CATEGORY_PRODUCT(state, action) {
      // lọc theo category
      state.category = !action.payload.keyCategory
        ? state.category
        : action.payload.keyCategory === "all"
        ? state.products
        : state.products.filter(
            (item) => item.category === action.payload.keyCategory
          );

      // hiển thị category theo phân trang
      state.docsCount = state.category.length;

      state.currentPage = action.payload.keyCategory
        ? 1
        : state.currentPage + action.payload.updatePage;

      // pagination
      const { totalPages, docStart, docEnd } = paginationHelper(
        state.docsCount,
        state.docsPerPage,
        state.currentPage
      );

      state.docsPages = totalPages;
      state.docStart = docStart;
      state.docEnd = docEnd;

      state.categoryShow = state.category?.slice(docStart - 1, docEnd);
    },
  },
});

// export actions
export const productActions = sliceProduct.actions;

// export reducer
const productReducer = sliceProduct.reducer;
export default productReducer;
