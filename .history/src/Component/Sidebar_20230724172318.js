/** @format */

import React from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const token = localStorage.getItem("token");

  let links;

  if (token) {
    const Component = () => {
      return (
        <>
          <li>
            <Link to="/identity">Information</Link>
          </li>
          <li>
            <Link to="/address">Add Address</Link>
          </li>
          <li>
            <Link to="/order">Order History</Link>
          </li>
          <li>
            <Link to="/mywishlist">Wishlist</Link>
          </li>
        </>
      );
    };

    links = <Component />;
  } else {
    const Component = () => {
      return (
        <>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/create-account">Create An Account</Link>
          </li>
        </>
      );
    };

    links = <Component />;
  }

  return (
    <Offcanvas show={props.show} onHide={props.handleClose}>
      <Offcanvas.Body style={{ padding: 0 }}>
        <div className="sidebar">
          <i
            className="fa-solid fa-circle-xmark"
            onClick={() => props.onHide()}
          ></i>
          <Link to="/">
            <img src="./Image/2.png" alt="logo" className="logo" />
          </Link>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Categories</Link>
            </li>
            <li>
              <Link to="/posts">Blog</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            {links}
          </ul>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
