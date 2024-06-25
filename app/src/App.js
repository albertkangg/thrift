import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import ClothingMenu from "./Components/ClothingMenu.jsx";
import Home from "./Components/pages/Home";
import Login from "./Components/Login.jsx";
import SignUp from "./Components/Signup.jsx";
import WithClothing from "./WithClothing.js";
import WithoutClothing from "./WithoutClothing.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<WithClothing />}>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route element={<WithoutClothing />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
