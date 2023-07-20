/** @format */

import React from "react";
import Breadcrumb from "../../Component/Breadcrumb";

const SignIn = () => {
  return (
    <>
      <div>
        <Breadcrumb title={"Log in to your account"} />

        <div className="container-width">
          <div className="block-form-login"></div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
