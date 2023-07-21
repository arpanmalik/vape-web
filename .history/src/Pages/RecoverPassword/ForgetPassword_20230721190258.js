import React from 'react'
import Breadcrumb from '../../Component/Breadcrumb'
import Navbar from '../../Navbar/Navbar'

const ForgetPassword = () => {
  return (
    <>
        <div>
            <Navbar />
            <Breadcrumb />
            <div className='container-width'>
                <p className='send-renew-password-link'>
                Please enter the email address you used to register. You will receive a temporary link to reset your password.
                </p>
            </div>
        </div>
    </>
  )
}

export default ForgetPassword