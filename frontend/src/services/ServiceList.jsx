import React from "react";

import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from "../assets/weather.png";
import guideImg from "../assets/guide.png";
import customizationImg from "../assets/customization.png";

const serviceData = [
  {
    imgUrl: weatherImg,
    title: "Calculate weather",
    desc: "lorem ipsum dolor sit amet ,constructing  elit",
  },
  {
    imgUrl: guideImg,
    title: "Best to Guide",
    desc: "lorem ipsum dolor sit amet,constructing elit",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "lorem ipsum dolor sit amet,constructingelit",
  },
];

const ServiceList = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard className="serv" item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
