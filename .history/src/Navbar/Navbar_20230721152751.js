/** @format */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <div className="Navbar">
        <div className="container">
          <div className="left">
            <div className="main img-container" style={{ padding: 0 }}>
              <Link to="/">
                <img
                  src="https://demo.bestprestashoptheme.com/vaping/modules/novthemeconfig/images/logos/logo.png"
                  alt="Logo"
                />
                Krish Vapes
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
            <div className="main">
              <Link to="/login">
                <button>SIGN IN</button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}

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
  
</div>

            <div className="left-cont">
       

            </div>
            <div className="mid-cont"></div>
            <div className="right-cont"></div>



            </div>
          </div>{" "}
        </div>
      </header>
    </>
  );
};

export default Navbar;
