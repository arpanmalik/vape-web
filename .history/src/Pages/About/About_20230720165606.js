/** @format */

import React from "react";
import Navbar from "../../Navbar/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />

      {/* Banner */}   <div className=" AboutUs">
            <img
              src="https://demo.bestprestashoptheme.com/vaping/modules/novnivoslider/images/a655ddd43767e32ba4e85dd399cad31aa32bfe30_slide3-2.jpg"
              alt=""
            />
          </div>

      <div className="HomePage">
        <div className="Container">
          {" "}
       
          <div className="About_Us-Content">
            <h5>Lorem Ipsum</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tempus eleifend ullamcorper. Sed maximus nunc vitae metus
              pharetra, quis pharetra felis iaculis. Aenean in nisl eget lorem
              congue efficitur id ut orci. Mauris volutpat tortor non lectus
              rhoncus vestibulum bibendum quis leo. Nulla lobortis feugiat nibh.
              Mauris pulvinar quam nec lectus ornare, id auctor nulla venenatis.
              Duis sit amet rhoncus lacus. Proin nisi dolor, posuere mattis
              viverra vel, dignissim et augue. Suspendisse convallis nec neque
              et tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus
              et ultrices posuere cubilia curae;{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
