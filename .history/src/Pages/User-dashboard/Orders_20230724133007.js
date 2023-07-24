/** @format */

import React from "react";
import Navbar from "../../Navbar/Navbar";
import Profilebar from "./Profilebar";

const Orders = () => {
  return (
    <div>
      <Navbar />

      <div className="BreadCrumb">
        <div className="container">
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/"> Your account </a>
            </li>
            <li>
              <a href="/"> Order history</a>
            </li>
          </ol>
        </div>
      </div>

      <div className="container-width">
        <div className="page_title_account">Your account</div>

        <div className="user-dashboard">
          <div className="left-container">
            <Profilebar />
          </div>

          <div className="right-container">
            <div className="block_content-right">
              <div class="title_account_second">Order history</div>

              <form>
                <section>
                 
                <div className="cart">
            <section id="main">
              <div className="cart-grid">
                {/* Left */}
                <div className="cart-grid-body">
                  <h1 class="page-title">Shopping Cart</h1>

                  <div className="cart-container">
                    <div className="group_title ">
                      <table>
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th style={{ paddingLeft: "45px" }}>Qty</th>
                            <th>Total</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody style={{ marginTop: "100px" }}>
                          <tr>
                            <td>
                              <span className="big-container">
                                <span className="img-container">
                                  <img
                                    src="	https://demo.bestprestashoptheme.com/vaping/24-cart_default/hummingbird-printed-t-shirt.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </span>

                                <div>
                                  <a href="/">Diamond Halo Stud Monte</a>
                                  <div className="variant">
                                    <span>Size:</span>
                                    <span className="value">Small </span>
                                  </div>
                                  <div className="variant">
                                    <span>Color:</span>
                                    <span>White</span>
                                  </div>
                                </div>
                              </span>
                            </td>
                            <td>
                              <span className="product-price">£22.94</span>
                            </td>

                            <td>
                              <span className="qty">
                                <span className="input-group">
                                  <input
                                    type="text"
                                    id="quantity_wanted"
                                    min="1"
                                  />
                                  <span className="input-group-btn-vertical">
                                    <button
                                      className="button-minus"
                                      type="button"
                                    >
                                      <i
                                        className="fa-solid fa-minus"
                                      ></i>
                                    </button>
                                    <button
                                      className="button-plus"
                                      type="button"
                                    >
                                      <i
                                        className="fa-solid fa-plus"
                                      ></i>
                                    </button>
                                  </span>
                                </span>
                              </span>
                            </td>

                            <td>
                              <span className="product-price total">
                                £22.94
                              </span>
                            </td>

                            <td>
                              <i className="fa-solid fa-trash"></i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
             
                  </div>
                </div>

                {/* Right */}
                <div className="cart-grid-right">
                  <div className="cart-summary">
                    <div className="cart-detailed-totals">
                      <div className="summary">
                        <p>Total products:</p>
                        <p className="value">£22.94</p>
                      </div>
                      <div className="summary">
                        <p>Total Shipping:</p>
                        <p className="value">Free</p>
                      </div>

                      <div className="summary">
                        <p>GST:</p>
                        <p className="value">£100</p>
                      </div>

                      <div className="empty"></div>

                      <div className="summary">
                        <p>
                          {" "}
                          <span className="upper">TOTAL</span> (tax incl.)
                        </p>
                        <p className="value">Free</p>
                      </div>

                      <button className="Checkout">Checkout</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>




                </section>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
