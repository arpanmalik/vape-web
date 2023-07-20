/** @format */

import React from "react";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <Breadcrumb title={"All Post"} />

      <div className="container-width ">
        <div className="post">
          <a href="/">
            <img
              src="	https://demo.bestprestashoptheme.com/vaping/modules//smartblog/images/57-single-default.jpg"
              alt=""
            />
          </a>

          <div className="sdsarticleHeader">
            <div class="sdstitle_block">
              <a href="/">Lorem ipsum dolor sit amet, consectetur</a>
            </div>
          </div>

          <div class="post-info">
            <span class="datetime">May 19, 2022</span>
            
            <span class="comment">
              <i class="fa fa-comment-o"></i>
              <a
                title="0 Comments"
                href="https://demo.bestprestashoptheme.com/vaping/en/blog/lorem-ipsum-dolor-sit-amet-consectetur.html?id_post=57#articleComments"
              >
                0 Comments
              </a>
            </span>
            <span class="viewed">
              <i class="fa fa-eye"></i>Views (89)
            </span>
            <span itemprop="author" class="author">
              <i class="fa fa-user"></i>
              Vinova Vinova{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
