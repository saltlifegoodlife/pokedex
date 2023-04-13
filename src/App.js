import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./components/homePage/homePage";
import DetailsPage from "./components/detailsPage/detailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="details/:num" element={<DetailsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
