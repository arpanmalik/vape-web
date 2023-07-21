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
              <div className="row d-flex align-items-center">
                <div className="col-xl-4 col-md-4 contentsticky_search">


                <div id="_desktop_search_content" data-id_lang="1" data-ajaxsearch="1" data-novadvancedsearch_type="top" data-instantsearch="" data-search_ssl="1" data-link_search_ssl="https://demo.bestprestashoptheme.com/vaping/en/search" data-action="https://demo.bestprestashoptheme.com/vaping/en/module/novadvancedsearch/result">
        <form method="get" action="https://demo.bestprestashoptheme.com/vaping/en/module/novadvancedsearch/result" id="searchbox" class="form-novadvancedsearch icon_search">
            <input type="hidden" name="fc" value="module">
            <input type="hidden" name="module" value="novadvancedsearch">
            <input type="hidden" name="controller" value="result">
            <input type="hidden" name="orderby" value="position">
            <input type="hidden" name="orderway" value="desc">
            <input type="hidden" name="id_category" class="id_category" value="0">
            <div class="input-group input-group-left">
                <div class="input-group-btn nov_category_tree">
                    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" value="aaaaa" aria-expanded="false">
                        <span>Categories</span>
                    </button>
                    <ul class="dropdown-menu list-unstyled">
                        <li class="dropdown-item " data-value="0"><span>All Categories</span></li>
                        <li class="dropdown-item " data-value="2"><span>Home</span></li>
                                                            <li>
                                <ul class="list-unstyled pl-5">
                                                                            <li class="dropdown-item font-weight-bold" data-value="3">
                                            <span>Vape</span>
                                        </li>
                                                    <li class="dropdown-item" data-value="4">
            <span>- Starter Kit</span>
                    </li>
            <li class="dropdown-item" data-value="5">
            <span>- Tank</span>
                    </li>
                                                                                <li class="dropdown-item font-weight-bold" data-value="6" selected="">
                                            <span>E-liquid</span>
                                        </li>
                                                    <li class="dropdown-item" data-value="7">
            <span>- Stationery</span>
                    </li>
            <li class="dropdown-item" data-value="8">
            <span>- Accessories</span>
                    </li>
                                                                                <li class="dropdown-item font-weight-bold" data-value="9">
                                            <span>Art</span>
                                        </li>
                                                                                                            </ul>
                            </li>
                                            </ul>
                </div>
                <input type="text" id="search_query_top" class="search_query ui-autocomplete-input form-control ac_input" name="search_query" value="" placeholder="Enter search keywords" novautocomplete="off">
                <span class="input-group-btn button-search">
                    <button class="btn btn-secondary" type="submit" name="submit_search"><i class="zmdi zmdi-search"></i></button>
                </span>
            </div>
        </form>
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
