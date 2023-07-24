/** @format */

import React from "react";
import Breadcrumb from "../../Component/Breadcrumb";
import Pagination from "../../Component/Pagination";
import Product from "../../Component/Product";
import Navbar from "../../Navbar/Navbar";

const FullWidthProduct = () => {
  return (
    <>
     <div style={{border : '1px solid red'}}>
     <Navbar />
     <Breadcrumb title={'E-Liquid'} />
      <div className="container-width ">
        <div className="products-selection">
          <div className="product-list-fiter">
            <span className="toggle_filter ">
              <i className="fa-solid fa-sliders"></i>
              <span> FILTER</span>
            </span>
            <span className="toggle_filter ">
              |<span> There are 12 products.</span>
            </span>
          </div>
        </div>


        <Product />
    
      </div>

      <Pagination />
     </div>
    </>
  );
};

export default FullWidthProduct;