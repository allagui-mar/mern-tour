import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slideToScroll: 1,
          infinites: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial ">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          iusto, vero at vitae, non quas magnam provident ipsa doloremque
          cupiditate facere, nisireprehenderit incidunt voluptates aliquid unde
          est quasi laborum.
        </p>
        <div className="testimonial_img">
          <img src={ava01} alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          iusto, vero at vitae, non quas magnam provident ipsa doloremque
          cupiditate facere, nisireprehenderit incidunt voluptates aliquid unde
          est quasi laborum.
        </p>
        <div className="testimonial_img">
          <img src={ava02} alt="" />
          <div>
            <h6 className="mb-0 mt-3">Myriam Benraad</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          iusto, vero at vitae, non quas magnam provident ipsa doloremque
          cupiditate facere, nisireprehenderit incidunt voluptates aliquid unde
          est quasi laborum.
        </p>
        <div className="testimonial_img">
          <img src={ava03} alt="" />
          <div>
            <h6 className="mb-0 mt-3">Sarah Kayla</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial ">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          iusto, vero at vitae, non quas magnam provident ipsa doloremque
          cupiditate facere, nisireprehenderit incidunt voluptates aliquid unde
          est quasi laborum.
        </p>
        <div className="testimonial_img">
          <img src={ava01} alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          iusto, vero at vitae, non quas magnam provident ipsa doloremque
          cupiditate facere, nisireprehenderit incidunt voluptates aliquid unde
          est quasi laborum.
        </p>
        <div className="testimonial_img">
          <img src={ava02} alt="" />
          <div>
            <h6 className="mb-0 mt-3">Myriam Benraad</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          iusto, vero at vitae, non quas magnam provident ipsa doloremque
          cupiditate facere, nisireprehenderit incidunt voluptates aliquid unde
          est quasi laborum.
        </p>
        <div className="testimonial_img">
          <img src={ava03} alt="" />
          <div>
            <h6 className="mb-0 mt-3">Sarah Kayla</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
