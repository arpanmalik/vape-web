
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
                    <img src='	https://demo.bestprestashoptheme.com/vaping/modules//smartblog/images/57-single-default.jpg' alt='' />
                 </a> 

                <div className='sdsarticleHeader'>
                <div class="sdstitle_block"><a title="Lorem ipsum dolor sit amet, consectetur" href="https://demo.bestprestashoptheme.com/vaping/en/blog/lorem-ipsum-dolor-sit-amet-consectetur.html?id_post=57">Lorem ipsum dolor sit amet, consectetur</a></div>
                </div>

            </div>




        </div>




    </div>
  )
}

export default Blogs