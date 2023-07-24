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
                <a
                  id="identity-link"
                  class="active"
                  href="https://demo.bestprestashoptheme.com/vaping/en/identity"
                >
                  <span class="link-item">
                    <i class="material-icons"></i>
                    <span>Information</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Identity;
