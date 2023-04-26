import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Inprogress from "./Pages/Inprogress";
import Completed from "./Pages/Completed";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="wrapper">
      <Navbar itemLength={items.length} />
      <Routes>
        <Route path="/" element={<Home items={items} setItems={setItems} />} />
        <Route path="/inprogress" element={<Inprogress />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
