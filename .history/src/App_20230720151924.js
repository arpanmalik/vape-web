/** @format */

import React from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Navbar/Navbar.css";
import Homepage from "./Pages/HomePage/Homepage";
import "./CSS/Normal.css";
import FullWidthProduct from "./Pages/Products/FullWidthProduct";
import "./Footer/Footer.css";
import Footer from "./Footer/Footer";
import SignIn from "./Pages/SignIn/SignIn";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            minHeight : '100vh'
          }}
        >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<FullWidthProduct />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/create-account" element={<Cre}
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
