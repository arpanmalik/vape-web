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
                  <input type="radio" name="id_gender" value="1" />
                  <span></span>
                </span>
                Mr.
              </label>

              <label className="radio-inline">
                <span className="custom-radio">
                  <input type="radio" name="id_gender" value="1" />
                  <span></span>
                </span>
                Mrs.
              </label>
            </div>
            <form>
              <div className="form-group">
                <i className="fa-solid fa-user"></i>
                <input type="text" placeholder="First Name" />
              </div>

              <p className="form-control-comment">
                Only letters and the dot (.) character, followed by a space, are
                allowed.
              </p>

       
              <div className="form-group">
                <i className="fa-solid fa-user"></i>
                <input type="text" placeholder="Last Name" />
              </div>

              <p className="form-control-comment">
              Only letters and the dot (.) character, followed by a space, are allowed.
              </p>


              
              <div className="form-group">
                <i className="fa-solid fa-envelope"></i>
                <input type="text" placeholder="Email" />
              </div>

              <div className="form-group">
                <i className="fa-solid fa-envelope"></i>
                <input type="text" placeholder="Email" />
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
