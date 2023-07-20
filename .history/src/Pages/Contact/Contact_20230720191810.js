/** @format */

import React from "react";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";

const Contact = () => {
  return (
    <div className="contact-us">
      <Navbar />
      <Breadcrumb title={"Contact"} />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5070472463995!2d77.18552060477374!3d28.52447542551125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e0667819b4f%3A0x834995f160759db8!2sQutub%20Minar!5e0!3m2!1sen!2sin!4v1689856842238!5m2!1sen!2sin"
        height="450"
        style={{ border: 0, width: "100%" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container-width">
        <div className="contact-form">
          <div className="left-container">
            <div className="form-cont">
              <h2>Get In Touch</h2>

              <div className="input-group">
                <div className="form-group">
                  <label>Name</label>
                  <br />
                  <input type="text" name="Name" placeholder="Name" />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <br />
                  <input type="text" name="Email" placeholder="Email Address" />
                </div>

                <div className="form-group">
                  <label>Phone</label>
                  <br />
                  <input type="text" name="Phone" placeholder="Phone Number" />
                </div>
              </div>


            <div className="single-input"> 
            <label>Your message</label>
            <textarea name="textarea-982" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Comment or Message *"></textarea>

            </div>

            </div>
          </div>
          <div className="right-container"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
