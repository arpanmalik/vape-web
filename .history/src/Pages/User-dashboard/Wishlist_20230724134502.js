/** @format */

import React from "react";
import Navbar from "../../Navbar/Navbar";
import Profilebar from "./Profilebar";

const Wishlist = () => {
  return (
    <div>
      <Navbar />

      <div className="BreadCrumb">
        <div className="container">
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/"> Your account </a>
            </li>
            <li>
              <a href="/"> Order history</a>
            </li>
          </ol>
        </div>
      </div>

      <div className="container-width">
        <div className="page_title_account">Your account</div>

        <div className="user-dashboard">
          <div className="left-container">
            <Profilebar />
          </div>

          <div className="right-container">
            <div className="block_content-right">
              <div class="title_account_second">Wishlist</div>

              <div className="wlp_bought_list">
                <div className="Wishlist">
                  <a href="#" className="lnkdel">
                    <i className="fa-solid fa-circle-xmark"></i>
                  </a>

                  <div class="clearfix">
                    <div class="product_image">
                      <a href="/">
                        <img
                          class="img-fluid"
                          src="https://demo.bestprestashoptheme.com/vaping/44-medium_default/mug-the-best-is-yet-to-come.jpg"
                          alt="Diamond Halo Stud Natoque"
                        />
                      </a>
                    </div>
                    <div class="product_infos">
                      <div>
                        <a href="/">Diamond Halo Stud Natoque</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
