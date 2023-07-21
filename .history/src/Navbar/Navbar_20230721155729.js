/** @format */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header id="header" className="header-1 sticky-menu">
        <div className="header-top hidden-sm-down">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6 col-lg-6">
                <div className="w-login">
                  <a href="/">
                    <i class="fa-solid fa-user"></i>
                    <span>Register</span>
                  </a>

                  <span>or</span>

                  <a href="/">
                    <span>Login</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="header-center">
              <div className="three-sec-cont">
                <div className="left-cont">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input type="text" placeholder="Enter Search Keyword" />
                </div>
                <div className="mid-cont">
                  <img src="./Image/2.png" alt="logo" />
                </div>

                <div className="right-cont">
                  <i class="fa-solid fa-phone"></i>

                  <div class="content">
                    <span class="phone_number">800-140-10000</span>
                    <br />
                    <span>Mon - Fri: 8:00 - 17:00</span>
                  </div>

                  <div className="mini-cart">
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-cart-shopping"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="container">
            <div className="Navbar">
              <div className="container">
                <div className="left">
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
                            <span className="menu-title">
                              Smoking accessories
                            </span>
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
                            <span className="menu-title">
                              Phone accessories{" "}
                            </span>
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
                    <Link to="/posts">Blog</Link>
                  </div>
                  <div className="main ">
                    <Link to="/about">About Us</Link>
                  </div>

                  <div className="main ">
                    <Link to="/contact-us">Contact Us</Link>
                  </div>
                </div>
                <div className="right">

                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
