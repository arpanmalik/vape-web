
import React from 'react'
import Breadcrumb from '../../Component/Breadcrumb'
import Navbar from '../../Navbar/Navbar'

const Blogs = () => {
  return (
    <div>
        <Navbar />
        <Breadcrumb title={'All Post'} />

        <div className="container-width ">

            <div className='post'>
                <a href='/'>
                    <img src='	https://demo.bestprestashoptheme.com/vaping/modules//smartblog/images/57-single-default.jpg'
                 </a> 
            </div>




        </div>




    </div>
  )
}

export default Blogs