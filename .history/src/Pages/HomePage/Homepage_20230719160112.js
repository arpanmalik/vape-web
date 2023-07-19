/** @format */

import React from "react";
import BannerSlider from "./BannerSlider";

const Homepage = () => {
  return (
    <>
      <BannerSlider />

      <div className="HomePage">
        <div className="Container">
          <div className="Banner_Two_Sec">
            <div className="img-container">
              <img src="https://demo.bestprestashoptheme.com/vaping/img/cms/bn-25-1.jpg" alt="" />
            </div>
            <div className="img-container">
              <img src="https://demo.bestprestashoptheme.com/vaping/img/cms/bn-25-2.jpg" alt="" />
            </div>
            <div className="img-container">
              <img src="https://demo.bestprestashoptheme.com/vaping/img/cms/bn-25-3.jpg" alt="" />
            </div>
            <div className="img-container">
              <img src="https://demo.bestprestashoptheme.com/vaping/img/cms/bn-25-4.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
