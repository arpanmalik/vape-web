/** @format */

import React from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Navbar/Navbar.css'
import Homepage from "./Pages/HomePage/Homepage";
import './CSS/Normal.css'
import FullWidthProduct from "./Pages/Products/FullWidthProduct";
import './CSS/'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<FullWidthProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
