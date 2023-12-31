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
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Notes from "./pages/notes/Notes";
import Notices from "./pages/notices/Notices";

const App = () => {
  return (
    <>
      <ToastContainer autoClose={1500} pauseOnHover={false} />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/committee" element={<Committee />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/suggestion" element={<Suggestion />}></Route>
          <Route path="/notes" element={<Notes />}></Route>
          <Route path="/notices" element={<Notices />}></Route>

          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
        <GoToTop />
      </Router>
    </>
  );
};
export default App;
