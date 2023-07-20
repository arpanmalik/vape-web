import React from 'react'
import Navbar from '../../Navbar/Navbar'

const SpecificProduct = () => {
  return (
    <div>
        <Navbar />

        {/* Breadcrumb */}

        <div className='BreadCrumb'>
        <div className='container'>
                <ol>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'> {title} </a>
                    </li>
                </ol>
        </div>
    </div>

        {/* ---------------- */}

    </div>
  )
}

export default SpecificProduct