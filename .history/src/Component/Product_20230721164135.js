/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { productData } from "../JSON/product";

const Product = () => {
  console.log(productData);

  return (
    <div className="products-container">
      {productData.map((item, index) => (
        <div className="Main" key={index}>
          <div className="thumbnail">
            <a href="#">
              <img
                src={item.img}
                alt={item.title}
              />
            </a>
          </div>
          <div className="product-groups">
            <div className="product-description">
              <div className="product-title">
                <Link to={`/product/Diamond Halo Stud Monte`}>
                {item.title}
                </Link>
              </div>
            </div>
          </div>

          <div className="product-comments">
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>

          <div className="product-group-price">
            <div className="product-price-and-shipping">
              <span className="price">${item.price} </span>
              <span className="regular-price">${item.mrp} </span>
            </div>
          </div>

          <div className="group-buttons">
            <div className="product-buttons">
              <a href="#">
                {" "}
                <i class="fa-solid fa-check"></i>
                <span> {} </span>
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className="Main">
        <div className="thumbnail">
          <a href="#">
            <img
              src="https://demo.bestprestashoptheme.com/vaping/32-large_default/the-best-is-yet-to-come-framed-poster.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="product-groups">
          <div className="product-description">
            <div className="product-title">
              <a href="#">The best is yet to come' Framed poster</a>
            </div>
          </div>
        </div>

        <div className="product-comments">
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>

        <div className="product-group-price">
          <div className="product-price-and-shipping">
            <span className="price">$34.80</span>
          </div>
        </div>

        <div className="group-buttons">
          <div className="product-buttons">
            <a href="#">
              {" "}
              <i className="fa-solid fa-bag-shopping"></i>
              <span>Add to cart</span>
            </a>
          </div>
        </div>
      </div>

      <div className="Main">
        <div className="thumbnail">
          <a href="#">
            <img
              src="https://demo.bestprestashoptheme.com/vaping/40-large_default/today-is-a-good-day-framed-poster.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="product-groups">
          <div className="product-description">
            <div className="product-title">
              <a href="#">Diamond Halo Stud Ligula</a>
            </div>
          </div>
        </div>

        <div className="product-comments">
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>

        <div className="product-group-price">
          <div className="product-price-and-shipping">
            <span className="price">$34.80</span>
          </div>
        </div>

        <div className="group-buttons">
          <div className="product-buttons">
            <a href="#">
              {" "}
              <i class="fa-solid fa-bag-shopping"></i>
              <span>out of stock</span>
            </a>
          </div>
        </div>
      </div>

      <div className="Main">
        <div className="thumbnail">
          <a href="#">
            <img
              src="https://demo.bestprestashoptheme.com/vaping/49-large_default/mug-the-adventure-begins.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="product-groups">
          <div className="product-description">
            <div className="product-title">
              <a href="#">Diamond Halo Stud Monte</a>
            </div>
          </div>
        </div>

        <div className="product-comments">
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>

        <div className="product-group-price">
          <div className="product-price-and-shipping">
            <span className="price">$14.28</span>
          </div>
        </div>

        <div className="group-buttons">
          <div className="product-buttons">
            <a href="#">
              {" "}
              <i class="fa-solid fa-bag-shopping"></i>
              <span>add to cart</span>
            </a>
          </div>
        </div>
      </div>

      <div className="Main">
        <div className="thumbnail">
          <a href="#">
            <img
              src="https://demo.bestprestashoptheme.com/vaping/28-large_default/brown-bear-printed-sweater.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="product-groups">
          <div className="product-description">
            <div className="product-title">
              <a href="#">Hummingbird printed sweater</a>
            </div>
          </div>
        </div>

        <div className="product-comments">
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>

        <div className="product-group-price">
          <div className="product-price-and-shipping">
            <span className="price">$34.46</span>
            <span className="regular-price">$43.08</span>
          </div>
        </div>

        <div className="group-buttons">
          <div className="product-buttons">
            <a href="#">
              {" "}
              <i class="fa-solid fa-check"></i>
              <span>Select Options</span>
            </a>
          </div>
        </div>
      </div>

      <div className="Main">
        <div className="thumbnail">
          <a href="#">
            <img
              src="https://demo.bestprestashoptheme.com/vaping/36-large_default/the-adventure-begins-framed-poster.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="product-groups">
          <div className="product-description">
            <div className="product-title">
              <a href="#"> Diamond Halo Stud Monte</a>
            </div>
          </div>
        </div>

        <div className="product-comments">
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>

        <div className="product-group-price">
          <div className="product-price-and-shipping">
            <span className="price">$34.80</span>
          </div>
        </div>

        <div className="group-buttons">
          <div className="product-buttons">
            <a href="#">
              {" "}
              <i class="fa-solid fa-bag-shopping"></i>
              <span>out of stock</span>
            </a>
          </div>
        </div>
      </div>

      <div className="Main">
        <div className="thumbnail">
          <a href="#">
            <img
              src="	https://demo.bestprestashoptheme.com/vaping/44-large_default/mug-the-best-is-yet-to-come.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="product-groups">
          <div className="product-description">
            <div className="product-title">
              <a href="#">Diamond Halo Stud Monte</a>
            </div>
          </div>
        </div>

        <div className="product-comments">
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>

        <div className="product-group-price">
          <div className="product-price-and-shipping">
            <span className="price">$14.28</span>
          </div>
        </div>

        <div className="group-buttons">
          <div className="product-buttons">
            <a href="#">
              {" "}
              <i class="fa-solid fa-check"></i>
              <span>Select Options</span>
            </a>
          </div>
        </div>
      </div>

      <div className="Main">
        <div className="thumbnail">
          <a href="# ">
            <img
              src="https://demo.bestprestashoptheme.com/vaping/52-large_default/mug-today-is-a-good-day.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="product-groups">
          <div className="product-description">
            <div className="product-title">
              <a href="#">Mug Today is a good day</a>
            </div>
          </div>
        </div>

        <div className="product-comments">
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>

        <div className="product-group-price">
          <div className="product-price-and-shipping">
            <span className="price">$14.28</span>
          </div>
        </div>

        <div className="group-buttons">
          <div className="product-buttons">
            <a href="#">
              {" "}
              <i class="fa-solid fa-bag-shopping"></i>
              <span>add to cart</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
