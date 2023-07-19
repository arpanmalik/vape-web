import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const BannerSlider = () => {


  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <>
      <div className="Service_Slider_Container mt-5">
        <Slider {...settings} ref={sliderRef} className="Service_Slider">
          <div className="Main">
            <img src="./Image/65.png" alt="" />
            <p className="head">Join Bar Academy</p>
            <Link to="/courses">
              <button>
                LEARN MORE <i className="fa-solid fa-caret-right"></i>
              </button>
            </Link>
          </div>
        </Slider>
      </div>
    </>
  );
};


export default BannerSlider