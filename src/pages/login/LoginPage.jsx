// import React/Hook/Router...
import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

// import icon/image
import bannerImg from "../../assets/image-icon/banner1.jpg";

// import component
import Card from "../../components/UI/Card";
import FormLogIn from "./FormLogIn";

////////////////////
// function Component
const LoginPage = () => {
  // sử dụng cookie cho dữ liệu authentication
  const [cookies, setCookie] = useCookies(["token", "userName", "expires"]);
  const userName = cookies.userName;

  // function thiết lập cookies sau khi đăng nhập thành công
  const loginSuccessHandler = (data) => {
    const expires = new Date(data.data.expires);
    setCookie("token", data.data.token, { path: "/", expires });
    setCookie("expires", data.data.expires, {
      path: "/",
      expires,
    });
    setCookie("userName", data.data.userName, {
      path: "/",
      expires,
    });
  };

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
      {/* nếu đang có user LOG IN thì không hiển thị form LOG IN */}
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
          <FormLogIn onLoginSuccess={loginSuccessHandler} />
        )}
      </div>
    </div>
  );
};

export default LoginPage;
