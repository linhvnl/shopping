// import React/Hook/Router...
import React from "react";

////////////////////
// function Component
const DetailProductDescription = (props) => {
  // tạo phần list nội dung mô tả dài chi tiết
  const longDesc =
    props.longDesc &&
    props.longDesc
      .replaceAll(" - ", "\n- ")
      .replaceAll(" • ", "\n- ")
      .split("\n")
      .map((line, i) => {
        if (i === 0)
          return (
            <p className="mb-1" key={i}>
              {line.toUpperCase()}
            </p>
          );
        return (
          <li key={i} className="mb-1">
            {line}
          </li>
        );
      });

  // return
  // phần mô tả chi tiết sản phẩm
  return (
    <div>
      <p className="d-inline-block bg-dark text-light text-opacity-75 px-4 py-2 mb-4">
        DESCRIPTION
      </p>
      <h5 className="text-dark mb-3">PRODUCT DESCRIPTION</h5>
      {longDesc && longDesc[0]}
      <ul className="list-unstyled">{longDesc && longDesc.slice(1)}</ul>
    </div>
  );
};

export default DetailProductDescription;
