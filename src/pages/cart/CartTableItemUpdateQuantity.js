// import React/Hook/Router...
import React from "react";

// import icon/image
import iconArrowLeft from "../../assets/image-icon/icon-arrow-left-FREEPIK.png";
import iconArrowRight from "../../assets/image-icon/icon-arrow-right-FREEPIK.png";

////////////////////
// function Component
const CartTableItemUpdateQuantity = (props) => {
  // return
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img
        src={iconArrowLeft}
        alt="icon-left"
        style={{ width: "10px", marginRight: "-2px" }}
        onClick={props.onUpdateQuantity.bind(null, { quantity: -1 })}
      />

      <input
        type="text"
        className="border-0 text-center px-0"
        size="1"
        readOnly
        value={props.quantity}
      />

      <img
        src={iconArrowRight}
        alt="icon-right"
        style={{ width: "10px", marginLeft: "-2px" }}
        onClick={props.onUpdateQuantity.bind(null, { quantity: 1 })}
      />
    </div>
  );
};

export default CartTableItemUpdateQuantity;
