/** @format */

import React from "react";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";

const Cart = () => {
  return (
    <>
      <div>
        <Navbar />
        <Breadcrumb title={"Cart"} />

        <div className="container-width">
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
                            <th>Qty</th>
                            <th>Total</th>
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
                                  <div class="variant">
                                    <span class="label-atrr">Size:</span>
                                    <span class="value">Small </span>
                                  </div>
                                  <div class=" variant">
                                    <span class="label-atrr">Color:</span>
                                    <span class="value">White</span>
                                  </div>
                                </div>
                              </span>
                            </td>
                            <td>
                              <span class="value">$22.94</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
