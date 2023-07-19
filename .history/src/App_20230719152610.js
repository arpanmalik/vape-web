/** @format */

import React from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
