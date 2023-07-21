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
                      <div class="row">
                        <div class="col-md-10">
                          <div class="row">
                            <div class="col-md-7">
                              <div class="label label-product">Product</div>
                            </div>
                            <div class="col-md-5 d-flex">
                              <div class="label label-price">Price</div>
                              <div class="label label-qty ml-auto">Qty</div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="label label-total">Total</div>
                        </div>
                      </div>
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
