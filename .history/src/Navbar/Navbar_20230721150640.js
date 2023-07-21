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
          <div class="row d-flex align-items-center">
                    <div class="col-md-6 col-lg-6">
                        <div class="w-login d-flex">
            <a class="register" href="https://demo.bestprestashoptheme.com/vaping/en/login?create_account=1" rel="nofollow" title="Register Account"><i class="zmdi zmdi-account"></i><span>Register</span></a>
        <span>or</span>
        <a class="login" href="https://demo.bestprestashoptheme.com/vaping/en/my-account" rel="nofollow" title="Log in to your customer account"><span>Login</span></a>
    </div>
                    </div>     
                    <div class="col-md-6 col-lg-6 d-flex align-items-center justify-content-end">
                        <div id="_desktop_currency_selector" class="currency-selector groups-selector hidden-sm-down currentcy-selector-dropdown">
    <div class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="main">
        <span class="expand-more">USD</span>
    </div>
    <div class="currency-list dropdown-menu">
        <div class="currency-list-content">
                            <div class="currency-item">
                    <a title="British Pound" rel="nofollow" href="https://demo.bestprestashoptheme.com/vaping/en/6-e-liquid?SubmitCurrency=1&amp;id_currency=1">£ GBP</a>
                </div>
                            <div class="currency-item current flex-first">
                    <a title="US Dollar" rel="nofollow" href="https://demo.bestprestashoptheme.com/vaping/en/6-e-liquid?SubmitCurrency=1&amp;id_currency=2">$ USD</a>
                </div>
                    </div>
    </div>
</div><div id="_desktop_language_selector" class="language-selector groups-selector hidden-sm-down language-selector-dropdown">
  <div class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="main">
                          <span class="expand-more">
              <img class="img-fluid" src="/vaping/img/l/1.jpg" alt="English" width="16" height="11">
            </span>
                                                                                      </div>
  <div class="language-list dropdown-menu">
    <div class="language-list-content">
                  <div class="language-item current flex-first">
            <div class="current">
              <a href="https://demo.bestprestashoptheme.com/vaping/en/6-e-liquid">
                <img class="img-fluid" src="/vaping/img/l/1.jpg" alt="English" width="16" height="11">
                <span>English</span>
              </a>
            </div>
          </div>
                  <div class="language-item">
            <div>
              <a href="https://demo.bestprestashoptheme.com/vaping/es/6-e-liquid">
                <img class="img-fluid" src="/vaping/img/l/3.jpg" alt="Español" width="16" height="11">
                <span>Español</span>
              </a>
            </div>
          </div>
                  <div class="language-item">
            <div>
              <a href="https://demo.bestprestashoptheme.com/vaping/fr/6-e-liquid">
                <img class="img-fluid" src="/vaping/img/l/4.jpg" alt="Français" width="16" height="11">
                <span>Français</span>
              </a>
            </div>
          </div>
                  <div class="language-item">
            <div>
              <a href="https://demo.bestprestashoptheme.com/vaping/it/6-e-liquid">
                <img class="img-fluid" src="/vaping/img/l/5.jpg" alt="Italiano" width="16" height="11">
                <span>Italiano</span>
              </a>
            </div>
          </div>
                  <div class="language-item">
            <div>
              <a href="https://demo.bestprestashoptheme.com/vaping/pl/6-e-liquid">
                <img class="img-fluid" src="/vaping/img/l/6.jpg" alt="Polski" width="16" height="11">
                <span>Polski</span>
              </a>
            </div>
          </div>
                  <div class="language-item">
            <div>
              <a href="https://demo.bestprestashoptheme.com/vaping/ar/6-e-liquid">
                <img class="img-fluid" src="/vaping/img/l/7.jpg" alt="اللغة العربية" width="16" height="11">
                <span>اللغة العربية</span>
              </a>
            </div>
          </div>
            </div>
  </div>
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
