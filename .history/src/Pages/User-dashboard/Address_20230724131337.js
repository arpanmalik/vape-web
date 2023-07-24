/** @format */

import React from "react";
import Navbar from "../../Navbar/Navbar";
import Profilebar from "./Profilebar";

const Address = () => {
  return (
    <div>
      <Navbar />

      <div className="BreadCrumb">
        <div className="container">
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/"> Your account </a>
            </li>
            <li>
              <a href="/"> Your personal information </a>
            </li>
          </ol>
        </div>
      </div>

      <div className="container-width">
        <div className="page_title_account">Your account</div>

        <div className="user-dashboard">
          <div className="left-container">
            <Profilebar />
          </div>

          <div className="right-container">
            <div className="block_content-right">
              <div class="title_account_second">Your personal information</div>

              <form>
                <section>
                  <div className="form-group Gender_Group">
                    <label className="form-control-label">
                      Alias<span style={{ color: "red" }}>*</span>{" "}
                    </label>

                    <div className="form-control-valign">
                      <input
                        className="Input"
                        type="text"
                        placeholder="Alias"
                      />
                    </div>
                  </div>

                  <div className="form-group Gender_Group">
                    <label className="form-control-label">
                      First  name <span style={{ color: "red" }}>*</span>{" "}
                    </label>

                    <div className="form-control-valign">
                      <input
                        className="Input"
                        type="text"
                        placeholder="Last name"
                      />

                      <span className="comment">
                        Only letters and the dot (.) character, followed by a
                        space, are allowed.
                      </span>
                    </div>
                  </div>

                  <div className="form-group Gender_Group">
                    <label className="form-control-label">
                      Last name <span style={{ color: "red" }}>*</span>{" "}
                    </label>

                    <div className="form-control-valign">
                      <input
                        className="Input"
                        type="text"
                        placeholder="Last name"
                      />

                      <span className="comment">
                        Only letters and the dot (.) character, followed by a
                        space, are allowed.
                      </span>
                    </div>
                  </div>

                  <div className="form-group Gender_Group">
                    <label className="form-control-label">
                      Email <span style={{ color: "red" }}>*</span>{" "}
                    </label>

                    <div className="form-control-valign">
                      <input
                        className="Input"
                        type="text"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>

                  <div className="form-group Gender_Group">
                    <label className="form-control-label">
                      Password <span style={{ color: "red" }}>*</span>{" "}
                    </label>

                    <div className="form-control-valign">
                      <input
                        className="Input"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <div className="form-group Gender_Group">
                    <label className="form-control-label">
                      Birthdate
                      <span style={{ color: "red" }}>*</span>{" "}
                    </label>

                    <div className="form-control-valign">
                      <input
                        className="Input"
                        type="text"
                        placeholder="Birthdate"
                      />
                      <span className="comment">(E.g.: 05/31/1970)</span>
                    </div>
                  </div>

                  <div className="form-group Gender_Group">
                    <label className="form-control-label" />

                    <div className="form-control-valign">
                      <button className="continue_shopping" type="button">
                        Save
                      </button>
                    </div>
                  </div>
                </section>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
