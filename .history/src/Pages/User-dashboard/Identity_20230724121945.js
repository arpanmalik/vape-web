import React from 'react'
import Navbar from '../../Navbar/Navbar'

const Identity = () => {
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
              <a href="/"> Vaping </a>
            </li>
            <li>
              <a href="/"> {name} </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Identity