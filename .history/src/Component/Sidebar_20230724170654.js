/** @format */

import React from "react";
import { Offcanvas } from "react-bootstrap";
import Link

const Sidebar = (props) => {
  return (
    <Offcanvas show={props.show} onHide={props.handleClose}>
      <Offcanvas.Body>
        <div className="sidebar">

        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
