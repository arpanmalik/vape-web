/** @format */

import React from "react";

const Pagination = () => {
  return (
    <nav className="pagination ">
      <div>
        <ul className="page-list">
            <li className="current">
                <a href="/">1</a>
            </li>
            <li> 
            <a href="/">2</a></li>
            <li className="next">
                <a href="#"></a>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Pagination;
