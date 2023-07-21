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
            <div className="cart-grid-body col-lg-8"></div>

            </div>

            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
