import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/pages/Home";
import Login from "./components/Login.jsx";
import SignUp from "./components/Signup.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
