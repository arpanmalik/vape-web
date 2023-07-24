/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";

const Profilebar = () => {
  const location = useLocation();

  const links = [
    {
      link: "Information",
      path: "/identity",
    },
    {
      link: "Add Address",
      path: "/",
    },
    {
      link: "Order History",
      path: "/",
    },
    {
      link: "Wishlist",
      path: "/identity",
    },
  ];

  return (
    <div className="account-links">
      <div className="links">
      

        {links.map((i, index) => (
          <Link
            className={i.path === location.pathname ? "active" : ""}
            to={i.path}
            key={index}
          >
            <span className="link-item">
              <i className="fa-solid fa-user"></i>
              <span> {i.link} </span>
            </span>
          </Link>
        ))}

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
