// import React/Hook/...
import React from "react";

// function Component
const Footer = () => {
  // text cho Footer
  const dummyFooter = [
    {
      col_number: 1,
      col_title: "CUSTOMER SERVICES",
      col_values: [
        "Help & Contact Us",
        "Returns & Refunds",
        "Online Stores",
        "Terms & Conditions",
      ],
    },
    {
      col_number: 2,
      col_title: "COMPANY",
      col_values: ["What We Do", "Available Services", "Lates Posts", "FAQs"],
    },
    {
      col_number: 3,
      col_title: "SOCIAL MEDIA",
      col_values: ["Twitter", "Instagram", "Facebook", "Pinterest"],
    },
  ];

  // tạo list hiển thị footer
  const list = dummyFooter.map((item) => {
    return (
      <div key={item.col_number} className="col">
        <h5 className="mb-3">{item.col_title}</h5>
        <ul className="list-unstyled">
          {item.col_values.map((value, i) => (
            <li key={i} className="mb-1">
              {/* <a href="#"
                className="text-decoration-none text-secondary fst-italic">
                {value}</a> */}
              <span className="text-secondary fst-italic">{value}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  });

  // return
  return (
    <div className="bg-dark">
      <div className="container text-light pt-3 pb-4">
        <footer className="row py-5">{list}</footer>
      </div>
    </div>
  );
};

export default Footer;
