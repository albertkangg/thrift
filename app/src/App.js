import "./App.css";
import Navbar from "./components/Navbar.jsx";
import ClothingMenu from "./components/ClothingMenu.jsx";
import Home from "./components/pages/Home";
import Login from "./components/Login.jsx";
import SignUp from "./components/Signup.jsx";
import Footer from "./components/Footer.jsx";
import WithClothing from "./WithClothing.js";
import WithoutClothing from "./WithoutClothing.js";
import CookieConsent from './components/CookieConsent.js';
import TermsAndConditions from './components/pages/TermsAndConditions.js';
import AboutUs from './components/pages/AboutUs.jsx';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route element={<WithClothing />}>
            <Route exact path="/" element={<Home />} />
          </Route>
          <Route element={<WithoutClothing />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Route>
        </Routes>
        <Footer /> 
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
