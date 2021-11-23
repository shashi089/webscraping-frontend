import React from "react";
import Cards from "./components/Cards";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/products" element={<Cards />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
