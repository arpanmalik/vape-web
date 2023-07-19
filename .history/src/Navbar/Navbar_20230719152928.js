/** @format */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">

      <div className="left">

      </div>
      <div className="right"></div>
        <div className="main">
          <Link to="/">
            <img
              src="https://demo.bestprestashoptheme.com/vaping/modules/novthemeconfig/images/logos/logo.png"
              alt="Logo"
            />
          </Link>
        </div>

        <div className="main ">
          <Link to="/">Home</Link>
        </div>

        <div className="main ">
          <Link to="/event-booking">Categories</Link>
        </div>
        <div className="main ">
          <Link to="/courses">Blog</Link>
        </div>
        <div className="main ">
          <Link to="/about-us">About Us</Link>
        </div>

        <div className="main ">
          <Link to="/contact-us">Contact Us</Link>
        </div>

        <div className="main">
          <Link to="/sign-in">
            <button>SIGN IN</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
