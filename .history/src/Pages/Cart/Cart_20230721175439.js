/** @format */

import React, { useState } from "react";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";

const Cart = () => {
  const [quantity, setQuantity] = useState(0);

  function increaeQuan() {
    setQuantity(quantity + 1);
  }

  function decreaseQuan() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }
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
                              <span className="product-price">$22.94</span>
                            </td>

                            <td>
                           
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
