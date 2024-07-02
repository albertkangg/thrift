import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import ClothingMenu from "./Components/ClothingMenu.jsx";
import Home from "./Components/pages/Home";
import Login from "./Components/Login.jsx";
import SignUp from "./Components/Signup.jsx";
import Footer from "./Components/Footer.jsx";
import WithClothing from "./WithClothing.js";
import WithoutClothing from "./WithoutClothing.js";
import CookieConsent from './Components/CookieConsent.js';
import TermsAndConditions from './Components/pages/TermsAndConditions.js';
import AboutUs from './Components/pages/AboutUs.jsx';

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
