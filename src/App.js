import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Committee from "./pages/Committee/Committee";
import Contact from "./pages/ContactUs/Contact";
import GoToTop from "./components/topButton/GoToTop";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/committee" element={<Committee />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <GoToTop />
    </Router>
  );
};
export default App;
