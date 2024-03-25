// import React/Hook/Router...
import React from "react";
import { Link } from "react-router-dom";

// import CUSTOM HOOK
import useHttpShopping from "../../hooks/use-http-shopping";

// import icon/image
import bannerImg from "../../assets/image-icon/banner1.jpg";

// import component
import Card from "../../components/UI/Card";
import FormLogUp from "./FormLogUp";

////////////////////
// function Component
const RegisterPage = () => {
  // dùng Custom Hook để fetch to Server và use cookies
  const { cookies } = useHttpShopping();
  const userName = cookies.userName;

  // return
  return (
    // phần container style background
    <div
      className="container mb-4"
      style={{
        height: "700px",
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "120%",
        backgroundPosition: "35% -35%",
      }}
    >
      {/* phần Card Form */}
      {/* nếu đang có user LOG IN thì không hiển thị form LOG UP */}
      <div className="d-flex justify-content-center align-items-center h-100">
        {userName ? (
          <Card>
            <h1 className="text-center py-5">Welcome {userName}!</h1>
            <div className="text-center my-2">
              <span className="text-secondary">Go to </span>
              <Link to="/" className="text-decoration-none">
                Home
              </Link>
            </div>
          </Card>
        ) : (
          <FormLogUp />
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
