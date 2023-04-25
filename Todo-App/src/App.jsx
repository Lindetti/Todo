import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Inprogress from "./Pages/Inprogress";
import Completed from "./Pages/Completed";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inprogress" element={<Inprogress />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
