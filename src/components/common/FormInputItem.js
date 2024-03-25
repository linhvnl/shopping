// import React/Hook/Router...
import React from "react";

/////////////////////////
// function Component
const FormInputItem = (props) => {
  // gán tên mới cho props
  const inputFullName = props.items.inputFullName || "noInput";
  const inputEmail = props.items.inputEmail || "noInput";
  const inputPassword = props.items.inputPassword || "noInput";
  const inputPhoneNumber = props.items.inputPhoneNumber || "noInput";

  // tạo mảng các thông tin input
  const inputInfoList = [
    {
      input: inputFullName,
      type: "text",
      id: "fullname",
      name: "fullname",
      placeholder: "Full Name",
      errMessage: "Name must not be empty.",
    },
    {
      input: inputEmail,
      type: "email",
      id: "email",
      name: "email",
      placeholder: "Email",
      errMessage: "Email must not be empty.",
    },
    {
      input: inputPassword,
      type: "password",
      id: "password",
      name: "password",
      placeholder: "Password",
      errMessage: "Passwork must have least 8 character. Try again!",
    },
    {
      input: inputPhoneNumber,
      type: "tel",
      id: "phone",
      name: "phone",
      placeholder: "Phone",
      errMessage: "Phone must not be empty.",
    },
  ];

  // tạo html cho các input từ mảng thông tin input
  const inputList = inputInfoList
    .filter((info) => info.input !== "noInput")
    .map((info) => {
      return (
        <div key={info.id} className="border p-2">
          <input
            type={info.type}
            id={info.id}
            name={info.name}
            placeholder={info.placeholder}
            onChange={info.input.inputChangeHandler}
            onBlur={info.input.inputBlurHandler}
            value={info.input.enteredValue}
            className="bg-transparent border-0 w-100 p-2"
          />
          {info.input.hasError && (
            <p
              className="text-danger border-top pt-1 mb-0"
              style={{ fontSize: "10px" }}
            >
              {info.errMessage}
            </p>
          )}
        </div>
      );
    });

  return inputList;
};

export default FormInputItem;
