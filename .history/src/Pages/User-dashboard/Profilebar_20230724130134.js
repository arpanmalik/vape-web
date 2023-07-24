/** @format */

import React from "react";
import { useLocation } from "react-router-dom";

const Profilebar = () => {
  const location = useLocation();

  return (
    <div className="account-links">
      <div className="links">
        <a className={} href="/">
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
  );
};

export default Profilebar;
