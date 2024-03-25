// import React/Hook/Router...
import React from "react";
import { useLoaderData } from "react-router-dom";

// import component
import DetailProduct from "./DetailProduct";
import RelatedProducts from "./RelatedProducts";

////////////////////
// function Component
const DetailPage = () => {
  // lấy dữ liệu list product từ API (đã được hàm loader ở route tải về)
  const { detailProduct, relatedProducts } = useLoaderData();

  // return
  return (
    <>
      <DetailProduct detailProduct={detailProduct} />
      <RelatedProducts relatedProducts={relatedProducts} />
    </>
  );
};

export default DetailPage;
