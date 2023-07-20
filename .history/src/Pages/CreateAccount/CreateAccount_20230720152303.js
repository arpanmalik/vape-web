/** @format */

import React from "react";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";

const CreateAccount = () => {
  return (
    <div>
      <Navbar />
      <Breadcrumb title={"Create an account"} />
      <div className="container-width">
        <div className="block-form-login">
          <div className="login-form">
          <div className="form-control-valign">
            <label className="radio-inline">
                <span className="custom-radio">
                    <input type={}
                </span>
            </label>
          </div>
            <form>
              <div className="form-group">
                <i className="fa-regular fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>

              <div className="forgot-password">
                <i className="fa-regular fa-envelope"></i>
                <a href="/">
                  {" "}
                  Forgot your <strong>Password</strong>{" "}
                </a>
                <i className="fa-solid fa-question"></i>
              </div>

              <button>LOGIN</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
