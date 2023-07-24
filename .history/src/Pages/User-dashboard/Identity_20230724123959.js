/** @format */

import React from "react";
import Navbar from "../../Navbar/Navbar";

const Identity = () => {
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
              <a href="/"> Your personal information </a>
            </li>
          </ol>
        </div>
      </div>

      <div className="container-width">
        <div className="page_title_account">Your account</div>

        <div className="user-dashboard">
          <div className="left-container">
            <div className="account-links">
              <div className="links">
                <a className="active" href="/">
                  <span className="link-item">
                    <i className="fa-solid fa-user"></i>
                    <span>Information</span>
                  </span>
                </a>
                <a href="/">
                  <span className="link-item">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>Add Address</span>
                  </span>
                </a>

                <a href="/">
                  <span className="link-item">
                    <i className="fa-solid fa-clock-rotate-left"></i>
                    <span>Order History</span>
                  </span>
                </a>
                <a href="/">
                  <span className="link-item">
                    <i className="fa-solid fa-heart"></i>
                    <span>Wishlist</span>
                  </span>
                </a>
                <a href="/">
                  <span className="link-item">
                    <i className="fa-solid fa-power-off"></i>
                    <span>Sign out</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="right-container">
            <div className="block_content-right">
              <div class="title_account_second">Your personal information</div>

                    <form></form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Identity;
