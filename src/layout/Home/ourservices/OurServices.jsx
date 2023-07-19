import React from "react";
import "../ourservices/ourservice.css";
import webDesign from "../../../assets/design.png";
import appDevelopment from "../../../assets/app-development.png";
import Report from "../../../assets/report.png";
import productStrategy from "../../../assets/new-product.png";
import webDeveloper from "../../../assets/coding.png";
import digitalMarketing from "../../../assets/bullhorn.png";
const OurServices = () => {
  const data = [
    {
      img: webDesign,
      head: "WEB DESIGN",
      para: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      img: appDevelopment,
      head: "APP DEVELOPMENT",
      para: "A small river named Duden flows by their place and supplies it with the necessary regelialia. ",
    },
    {
      img: Report,
      head: "REPORTS",
      para: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      img: productStrategy,
      head: "PRODUCT STRATEGY",
      para: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      img: webDeveloper,
      head: "WEB DEVELOPER",
      para: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      img: digitalMarketing,
      head: "DIGITAL MARKETING",
      para: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
  ];
  return (
    <div className="service-container">
      <h1>Services</h1>
      <p>
        Software development processes to create custom applications that
        fulfill specific business needs.
      </p>
      <div className="service-card">
        {data.map((el, i) => (
          <div className="service-body">
            <img src={el.img} className="service-image" alt="" />

            <p className="head-key">{el.head}</p>
            <div className="hr">
              {/* <hr style={{width: "30px", backgroundColor: "#3e64ff", height: "2px", textAlign: "center"}}  /> */}
              </div>
            <p className="para-key">{el.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
