/** @format */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="container">
          <div className="left">
            <div className="main img-container" style={{ padding: 0 }}>
              <Link to="/">
                {/* <img
                  src="https://demo.bestprestashoptheme.com/vaping/modules/novthemeconfig/images/logos/logo.png"
                  alt="Logo"
                /> */}
                Krish  Vapes
              </Link>
            </div>

            <div className="main ">
              <Link to="/">Home</Link>
            </div>

            <div className="main ">
              <div class="dropdown-custom">
                <Link to="/products">Categories</Link>
                <div class="dropdown-content-custome">
                  <ul>
                    <li className="item">
                      <span className="menu-title">Vaping</span>
                      <div className="menu-content">
                        <ul className="content-bold">
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="item">
                      <span className="menu-title">Smoking accessories</span>
                      <div className="menu-content">
                        <ul className="content-bold">
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="item">
                      <span className="menu-title">Drink</span>
                      <div className="menu-content">
                        <ul className="content-bold">
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="item">
                      <span className="menu-title">American sweets</span>
                      <div className="menu-content">
                        <ul className="content-bold">
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="item">
                      <span className="menu-title">Battery </span>
                      <div className="menu-content">
                        <ul className="content-bold">
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="item">
                      <span className="menu-title">Phone accessories </span>
                      <div className="menu-content">
                        <ul className="content-bold">
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="item">
                      <span className="menu-title">Plastic bag</span>
                      <div className="menu-content">
                        <ul className="content-bold">
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="item">
                      <span className="menu-title">Tissue Paper </span>
                      <div className="menu-content">
                        <ul className="content-bold">
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                          <li>
                            <a href="/products">Lorem Ipsum</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="main ">
              <Link to="#">Blog</Link>
            </div>
            <div className="main ">
              <Link to="/-us">About Us</Link>
            </div>

            <div className="main ">
              <Link to="/contact-us">Contact Us</Link>
            </div>
          </div>
          <div className="right">
            <div className="main">
              <Link to="/login">
                <button>SIGN IN</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
