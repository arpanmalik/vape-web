/** @format */

import React, { useState } from "react";
import Product from "../../Component/Product";
import Navbar from "../../Navbar/Navbar";

const SpecificProduct = () => {
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
    <div>
      <Navbar />

      {/* Breadcrumb */}

      <div className="BreadCrumb">
        <div className="container">
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/"> Vaping </a>
            </li>
            <li>
              <a href="/"> Diamond Halo Stud Dolor </a>
            </li>
          </ol>
        </div>
      </div>

      {/* ---------------- */}

      <div className="container-width ">
        <div className="thumb-v4">
          <div className="left-container">
            <div className="images-container thumb-bottom">
              <div className="product-cover">
                <span
                  className="w-100"
                  style={{
                    display: "inline-block",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="https://demo.bestprestashoptheme.com/vaping/49-large_default/mug-the-adventure-begins.jpg"
                    alt=""
                    className="js-qv-product-cover img-fluid image-zoom "
                    style={{
                      width: "100%",
                      display: "block",
                    }}
                  />
                </span>
              </div>
            </div>

            <div className="product-list ">
              <div className="item thumb-container">
                <img
                  class="thumb js-thumb  selected "
                  src="https://demo.bestprestashoptheme.com/vaping/49-large_default/mug-the-adventure-begins.jpg"
                  alt=""
                />
              </div>

              <div class="item thumb-container">
                <img
                  class="thumb js-thumb "
                  src="https://demo.bestprestashoptheme.com/vaping/50-large_default/mug-the-adventure-begins.jpg"
                  alt=""
                />
              </div>

              <div class="item thumb-container">
                <img
                  class="thumb js-thumb "
                  src="https://demo.bestprestashoptheme.com/vaping/51-large_default/mug-the-adventure-begins.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="right-container">
            <div className="block_content">
              <h1 class="detail-product-name">Diamond Halo Stud Dolor</h1>

              <div className="group-price">
                <div className="product-price ">
                  <span>£14.28</span>
                </div>

                <div className="tax-shipping-delivery-label">Tax included</div>
              </div>

              <div className="product-information">
                <p>
                  The best is yet to come! Give your walls a voice with a framed
                  poster. This aesthethic, optimistic poster will look great in
                  your desk or in an open-space office. Painted wooden frame
                  with passe-partout for more depth.
                </p>
              </div>

              <div className="pro-cate">
                <label className="control-label">Categories:</label>
                <div>
                  <span>
                    <a href="/">E-liquid</a>
                  </span>
                  <span>
                    <a href="/">Accessories</a>
                  </span>
                </div>
              </div>

              <div className="product-actions">
                <div className="product-add-to-cart">
                  <div className="control-label">Quantity:</div>

                  <div className="product-quantity">
                    <div className="qty">
                      <div className="input-group">
                        <input
                          type="text"
                          id="quantity_wanted"
                          min="1"
                          value={quantity}
                        />

                        <span className="input-group-btn-vertical">
                          <button className="button-minus" type="button">
                            <i
                              className="fa-solid fa-minus"
                              onClick={() => decreaseQuan()}
                            ></i>
                          </button>
                          <button className="button-plus" type="button">
                            <i
                              className="fa-solid fa-plus"
                              onClick={() => increaeQuan()}
                            ></i>
                          </button>
                        </span>
                      </div>
                    </div>
                    <div class="add">
                      <button
                        class="btn btn-primary add-to-cart"
                        data-button-action="add-to-cart"
                        type="submit"
                      >
                        <span>Add to cart</span>
                      </button>
                    </div>
                  </div>

                  <div className="product-payments">
                    <label> Guaranteed safe checkout:</label>

                    <div className="image-payment text-left">
                      <img
                        className="img-fluid"
                        src="https://demo.bestprestashoptheme.com/vaping/modules/novthemeconfig/images/payment_700x-1.png"
                        alt="payment"
                        title="Payment"
                      />
                    </div>
                  </div>

                  <div className="wishlist_bottom">
                    <a className="addToWishlist" href="/">
                      <i className="fa-regular fa-heart"></i>
                      <span>Add to wishlist</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-90 mt-xs-50 wow fadeInUp  animated">
          <div className="tabs">
            <ul className="nav nav-tabs">
              <li className="nav-item">
              <a class="nav-link js-product-nav-active active" data-toggle="tab" href="#description" aria-expanded="true">Description</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="tab"
                  href="#product-details"
                  aria-expanded="false"
                >
                  Product Details
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="tab"
                  href="#collapseReviews"
                  aria-expanded="false"
                >
                  Customer reviews<span class="count-comment"></span>
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="tab"
                  href="#tab-custom"
                  aria-expanded="false"
                >
                  Delivery policy
                </a>
              </li>
            </ul>


            <div class="tab-content" id="tab-content">
                    <div class="tab-pane fade" id="description" aria-expanded="false">
                        
                            <div class="product-description"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p></div>
                        
                    </div>
                    
  
          <div class="product-manufacturer">
                  <a href="https://demo.bestprestashoptheme.com/vaping/en/brand/1-studio-design">
            <img src="https://demo.bestprestashoptheme.com/vaping/img/m/1.jpg" class="img img-thumbnail manufacturer-logo">
          </a>
              </div>
              <div class="product-reference">
        <label class="label">Reference </label>
        <span itemprop="sku">demo_1</span>
      </div>
      

  
          <div class="product-quantities">
        <label class="label">In stock</label>
        <span>298 Items</span>
      </div>
      

  
      

  
    <div class="product-out-of-stock">
      
    </div>
  

  
          <section class="product-features">
        <h3>Data sheet</h3>
        <dl class="data-sheet">
                      <dt class="name">Composition</dt>
            <dd class="value">Cotton</dd>
                      <dt class="name">Property</dt>
            <dd class="value">Short sleeves</dd>
                  </dl>
      </section>
      

    
          <section class="product-features">
        <h3>Specific References</h3>
          <dl class="data-sheet">
                      </dl>
      </section>
      

  
      
</div>
                    
                    
                                            
                                        <div class="tab-pane fade" id="collapseReviews" aria-expanded="false">
                        <script type="text/javascript">
var novproductcomments_controller_url = 'https://demo.bestprestashoptheme.com/vaping/en/module/novproductcomments/default';
var confirm_report_message = 'Are you sure that you want to report this comment?';
var secure_key = 'd151f95dbd23c2b79011e378c8d7d8c3';
var novproductcomments_url_rewrite = '1';
var productcomment_added = 'Your comment has been added!';
var productcomment_added_moderation = 'Your comment has been submitted and will be available once approved by a moderator.';
var productcomment_title = 'New comment';
var productcomment_ok = 'OK';
var moderation_active = 1;
</script>

		<div id="new_comment_form">
		<div class="modal-header">
			<h4 class="modal-title text-xs-center"><i class="fa fa-edit"></i> Write your review</h4>
		</div>
		<div class="modal-body">
			<form id="id_new_comment_form" action="#">
								<div class="product row no-gutters hidden-sm-down">
					<div class="product-image col-3">
						<img class="img-fluid" src="https://demo.bestprestashoptheme.com/vaping/24-medium_default/hummingbird-printed-t-shirt.jpg" height="" width="" alt="Diamond Halo Stud Monte">
					</div>
					<div class="product_desc col-9">
						<p class="product_name">Diamond Halo Stud Monte</p>
						<p>The best is yet to come! Give your walls a voice with a framed poster. This aesthethic, optimistic poster will look great in your desk or in an open-space office. Painted wooden frame with passe-partout for more depth.</p>
					</div>
				</div>
								<div class="new_comment_form_content">
					<div id="new_comment_form_error" class="error alert alert-danger">
						<ul></ul>
					</div>
											<ul id="criterions_list">
													<li>
								<label>Quality</label>
								<div class="star_content">
									<input type="hidden" name="criterion[1]" value="5"><div class="cancel"><a title="Cancel Rating"></a></div><div class="star star_on"><a title="1">1</a></div>
									<div class="star star_on"><a title="2">2</a></div>
									<div class="star star_on"><a title="3">3</a></div>
									<div class="star star_on"><a title="4">4</a></div>
									<div class="star star_on"><a title="5">5</a></div>
								</div>
								<div class="clearfix"></div>
							</li>
												</ul>
										<label for="comment_title">Title for your review<sup class="required">*</sup></label>
					<input id="comment_title" name="title" type="text" value="">

					<label for="content">Your review<sup class="required">*</sup></label>
					<textarea id="content" name="content"></textarea>

					
					<div id="new_comment_form_footer">
						<input id="id_product_comment_send" name="id_product" type="hidden" value="1">
						<div class="fl"><sup class="required">*</sup> Required fields</div>
						<div class="fr">
							<button id="submitNewMessage" data-dismiss="modal" aria-label="Close" class="btn btn-primary" name="submitMessage" type="submit">Send</button>
						</div>
					</div>
				</div>
			</form><!-- /end new_comment_form_content -->
		</div>
	</div>
	
	
                    </div>
                    <div class="tab-pane fade js-product-tab-active active in" id="tab-custom" aria-expanded="true">
                        <p>Vivamus a placerat dolor. Proin ut vehicula mauris. Etiam sagittis augue ipsum. Aliquam vestibulum massa nulla, ullamcorper aliquam diam feugiat vel. Fusce porttitor ultrices ante, posuere vehicula lacus tempor eu. Sed et purus et massa mattis aliquet ac vel dolor. Pellentesque eros lectus, placerat nec finibus ac, lobortis eu risus.</p>
                    </div>
                </div>



          </div>
        </div>

        <section className="relate-product">
          <h3 className="title_block">Related products</h3>
          <Product />
        </section>
      </div>
    </div>
  );
};

export default SpecificProduct;
