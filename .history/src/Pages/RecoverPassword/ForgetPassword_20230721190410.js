import React from 'react'
import Breadcrumb from '../../Component/Breadcrumb'
import Navbar from '../../Navbar/Navbar'

const ForgetPassword = () => {
  return (
    <>
        <div>
            <Navbar />
            <Breadcrumb  title={'Reset your password'} />
            <div className='container-width'>
                <p className='send-renew-password-link'>
                Please enter the email address you used to register. You will receive a temporary link to reset your password.
                </p>

                <section className='reset-password'></section>
            </div>
        </div>
    </>
  )
}

export default ForgetPassword