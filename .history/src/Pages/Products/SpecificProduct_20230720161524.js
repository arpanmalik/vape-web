/** @format */

import React from "react";
import Navbar from "../../Navbar/Navbar";

const SpecificProduct = () => {
  return (
    <div>
      <Navbar />

      {/* Breadcrumb */}

      <div className="BreadCrumb">
        <div className="container">
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/"> Vaping </a>
            </li>
            <li>
              <a href="/"> Diamond Halo Stud Dolor </a>
            </li>
          </ol>
        </div>
      </div>

      {/* ---------------- */}

      <div className="container-width ">
        <div className="row thumb-v4">
          <div className="col-md-6   col col-xs-12">
            <div className="images-container thumb-bottom">
                <div className="product-cover">
                        <span className="w-100" style={{
                            display: "inline-block" , position: "relative",overflow: "hidden"
                        }}>
                            <img src='https://demo.bestprestashoptheme.com/vaping/49-large_default/mug-the-adventure-begins.jpg' alt='' className="class="js-qv-product-cover img-fluid image-zoom"" />
                        </span>
                </div>
            </div>
          </div>




          <div className="col-md-6 col-xs-12 mt-xs-30 block_information"></div>
        </div>
      </div>
    </div>
  );
};

export default SpecificProduct;