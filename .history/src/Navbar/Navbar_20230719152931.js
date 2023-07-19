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
          <Link to="/sign-in">
            <button>SIGN IN</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
