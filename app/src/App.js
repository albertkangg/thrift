import "./App.css";
import Navbar from "./components/Navbar.jsx";
import ClothingMenu from "./components/ClothingMenu.jsx";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <ClothingMenu />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
