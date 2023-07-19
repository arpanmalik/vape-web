/** @format */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="main">
          <Link to="/">
            <img src='https://demo.bestprestashoptheme.com/vaping/modules/novthemeconfig/images/logos/logo.png' alt='Logo' />
          </Link>
        </div>

        <div className="main ">
          <Link to="/">Home</Link>
        </div>

        <div className="main Hide_On_Tab">
          <Link to="/event-booking">Categories</Link>
        </div>
        <div className="main Hide_On_Tab">
          <Link to="/courses">Blog</Link>
        </div>
        <div className="main Hide_On_Tab">
          <Link to="/about-us">About Us</Link>
        </div>

        <div className="main Hide_On_Tab">
          <Link to="/contact-us">Contact Us</Link>
        </div>

        <div className="main Tab_Burger">
          <Link to="/sign-in">
            <button>SIGN IN</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
