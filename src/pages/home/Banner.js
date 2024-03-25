// import React/Hook/Router...
import React from "react";
import { Link } from "react-router-dom";

// import icon/image
import bannerImg from "../../assets/image-icon/banner1.jpg";

////////////////////
// function Component
const Banner = () => {
  // return
  return (
    <div
      className="container px-5 mb-5"
      style={{
        height: "500px",
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="d-flex flex-column justify-content-center h-100"
        style={{ width: "30%" }}
      >
        <p className="mb-1 opacity-50">NEW INSPIRATION 2020</p>

        <h1 className="mb-4">20% OFF ON NEW SEASON</h1>

        <span>
          <Link to="shop" className="btn btn-dark rounded-0 px-4 opacity-75">
            Browse collections
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Banner;
