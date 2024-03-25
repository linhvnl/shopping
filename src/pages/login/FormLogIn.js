// import React/Hook/Router...
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// import CUSTOM HOOK
import useInput from "../../hooks/use-input";
import useHttpShopping from "../../hooks/use-http-shopping";

// import component
import Card from "../../components/UI/Card";
import FormInputItem from "../../components/common/FormInputItem";

/////////////////////////
// logic xác thực là hợp lệ
// email có "@" // const isEmail = (value) => value.includes("@");
// value không được rỗng
const isNotEmpty = (value) => value.trim() !== "";
// value có ít nhất 8 ký tự
const is8Chars = (value) => value.trim().length >= 8;

/////////////////////////
// function Component
const FormLogIn = (props) => {
  // state message phản hồi xác thực
  const [authMessage, setAuthMessage] = useState(null);

  // dùng Custom Hook để fetch to Server
  const { endPoints, customFetch } = useHttpShopping();

  // dùng Custom Hook cho mỗi đầu vào
  const { input: inputEmail } = useInput(isNotEmpty);
  const { input: inputPassword } = useInput(is8Chars);

  // hiệu lực form tổng, form chỉ valid khi tất cả input đều valid
  let isValidForm = false;
  if (inputEmail.isValidValue && inputPassword.isValidValue) {
    isValidForm = true;
  }

  // sử dụng điều hướng sau khi LOG UP thành công
  const navigate = useNavigate();

  // hàm xử lý Submit cho form
  const submitFormHandler = (event) => {
    event.preventDefault();

    // submit là đã "touch"
    inputEmail.inputBlurHandler();
    inputPassword.inputBlurHandler();

    // tổng form không hợp lệ thì return
    if (!isValidForm) return;

    // logic muốn thực hiện khi tổng form hợp lệ, gửi ACTION để Log in
    customFetch({
      method: "POST",
      url: endPoints.fetchLogin,
      bodyObj: {
        email: inputEmail.enteredValue,
        password: inputPassword.enteredValue,
      },
      errFunc: (data) => setAuthMessage(data.dataError),
      successFunc: (data) => {
        props.onLoginSuccess(data);
        navigate("/");
      },
    });

    // đặt lại giá trị ban đầu (reset) input PASSWORD (yêu cầu nhập lại)
    inputPassword.resetInput();
  };

  // return
  return (
    <Card>
      <h3 className="text-center pt-3 pb-5">Sign In</h3>

      {/* phản hồi LOG IN có lỗi gì hay không */}
      {authMessage && (
        <div className="text-danger text-center">
          <p className="mb-0">__VALIDATION__</p>
          <ul className="list-unstyled">
            {authMessage?.map((err, i) => (
              <li key={i}>{err.msg}</li>
            ))}
          </ul>
        </div>
      )}

      {/* form input */}
      <form onSubmit={submitFormHandler}>
        <FormInputItem items={{ inputEmail, inputPassword }} />

        {/* nút submit SIGN IN */}
        <div className="mt-3">
          <button
            type="submit"
            disabled={!isValidForm}
            className="btn btn-dark rounded-0 w-100 p-3 opacity-75"
            style={{ fontSize: "12px" }}
          >
            SIGN IN
          </button>
        </div>
      </form>

      {/* nút điều hướng qua SIGN UP */}
      <div className="text-center mt-5 mb-3">
        <span className="text-secondary">Create an account? </span>
        <Link to="/register" className="text-decoration-none">
          Sign up
        </Link>
      </div>
    </Card>
  );
};

export default FormLogIn;
