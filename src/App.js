import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Suggestion from "./pages/Suggestions/Suggestion";
import Committee from "./pages/Committee/Committee";
import Contact from "./pages/ContactUs/Contact";
import GoToTop from "./components/topButton/GoToTop";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/committee" element={<Committee />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/suggestion" element={<Suggestion />}></Route>
      </Routes>
      <GoToTop />
    </Router>
  );
};
export default App;
