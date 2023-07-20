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
            <h2 className="page_title_account text-center"></h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
