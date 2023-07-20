/** @format */

import React from "react";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";

const SignIn = () => {
  return (
    <>
      <div>
        <Navbar />
        <Breadcrumb title={"Log in to your account"} />
        <div className="container-width">
          <div className="block-form-login">
            <div className="login-form">
              <h2 className="page_title_account">Login</h2>

              <form>
                <div className="form-group">
                  <i className="fa-regular fa-envelope"></i>
                  <div className="empty"></div>
                  <input type="email" placeholder="Email" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
