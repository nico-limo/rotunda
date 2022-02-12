import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Parser from "./components/Parser";
import Zoo from "./components/Zoo";
import "./styles/app.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/parser" element={<Parser />} />
        <Route path="/zoo" element={<Zoo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
