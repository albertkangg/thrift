import React from "react";
// import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/pages/Home";
import SignUp from "./Components/pages/SignUp"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
export default App;
