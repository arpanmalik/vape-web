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
        <div className="thumb-v4">
          <div className="left-container">
            <div className="images-container thumb-bottom">
              <div className="product-cover">
                <span
                  className="w-100"
                  style={{
                    display: "inline-block",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="https://demo.bestprestashoptheme.com/vaping/49-large_default/mug-the-adventure-begins.jpg"
                    alt=""
                    className="js-qv-product-cover img-fluid image-zoom "
                    style={{
                      width: "100%",
                      display: "block",
                    }}
                  />
                </span>
              </div>
            </div>

            <div className="product-list ">
              <div className="item thumb-container">
                <img
                  class="thumb js-thumb  selected "
                  src="https://demo.bestprestashoptheme.com/vaping/49-large_default/mug-the-adventure-begins.jpg"
                  alt=""
                />
              </div>

              <div class="item thumb-container">
                <img
                  class="thumb js-thumb "
                  src="https://demo.bestprestashoptheme.com/vaping/50-large_default/mug-the-adventure-begins.jpg"
                  alt=""
                />
              </div>

              <div class="item thumb-container">
                <img
                  class="thumb js-thumb "
                  src="https://demo.bestprestashoptheme.com/vaping/51-large_default/mug-the-adventure-begins.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="right-container">
            <div className="block_content">
              <h1 class="detail-product-name">Diamond Halo Stud Dolor</h1>

              <div className="group-price">
                <div className="product-price ">
                  <span>$14.28</span>
                </div>

                    <div className="tax-shipping-delivery-label justify-content-end"></div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificProduct;
