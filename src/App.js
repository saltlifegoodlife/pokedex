import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./components/homePage/homePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {/* <Route path="/details/:id" element={<DetailsPage />}></Route> */}
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
