/** @format */

import React from "react";
import { Offcanvas, Accordion , Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "react-notifications-component";

const Sidebar = (props) => {
  const token = localStorage.getItem("token");
  let links;
  const navigate = useNavigate();
  const loggedOut = () => {
    Store.addNotification({
      title: "Logged Out Successfully",
      message: "",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
    navigate("/login");
    localStorage.removeItem("token");
  };

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
          <li>
            <a href="#" onClick={loggedOut}>
              Sign out
            </a>
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
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <a href="#">Categories</a>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Accordion.Item eventKey="12">
                      <Accordion.Header>
                        <a href="#">Vaping</a>
                      </Accordion.Header>
                      <Accordion.Body>
                        <a href="#">Vaping</a>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </li>

            <li>
              <Accordion defaultActiveKey="0">
                {/* Outer Accordion - First Level */}
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Categories
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Accordion defaultActiveKey="0">
                        {/* Inner Accordion - Second Level */}
                        <Card>
                          <Accordion.Toggle as={Card.Header} eventKey="0">
                            Vaping
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              {/* Content for Vaping */}
                              <a href="#">Vaping Link 1</a>
                              <a href="#">Vaping Link 2</a>
                              {/* Add more links or content here */}
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        {/* Add more nested accordion items here */}
                      </Accordion>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
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
