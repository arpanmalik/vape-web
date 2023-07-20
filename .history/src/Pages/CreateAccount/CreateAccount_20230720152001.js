import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../Component/Breadcrumb'

const CreateAccount = () => {
  return (
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

                <div className="no-account">
                  <Linkhref="/">
                    No account? Create one here
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CreateAccount