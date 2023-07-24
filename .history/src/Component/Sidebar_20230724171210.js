/** @format */

import React from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <Offcanvas show={props.show} onHide={props.handleClose}>
      <Offcanvas.Body style={{ padding: 0 }}>
        <div className="sidebar">
          <i
            className="fa-solid fa-circle-xmark"
            onClick={() => props.onHide}
          ></i>
          <Link to="/">
            <img src="./Image/2.png" alt="logo" className="logo" />
          </Link>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
