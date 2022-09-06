import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./pages/Principal";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Prifile from "./pages/Prifile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Prifile />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
);
