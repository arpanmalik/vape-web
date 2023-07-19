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
           <img src='https://demo.bestprestashoptheme.com/vaping/modules/novnivoslider/images/9ce1ccf9d4f214799df07ca900c1cfa02e597aa5_slide1-1.jpg' alt='' />
          </div>
        </Slider>
      </div>
    </>
  );
};


export default BannerSlider