import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Inprogress from "./Pages/Inprogress";
import Completed from "./Pages/Completed";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [inprogress, setInprogress] = useState([]);
  const [taskDone, setTaskDone] = useState([]);
  const [isDone, setIsDone] = useState(false);

  const handleComplete = () => {
    const completedItems = [...items];
    setTaskDone(completedItems);
    setIsDone(!isDone);
    console.log("click");
  };

  useEffect(() => {
    setInprogress([...items]);
  }, [items]);

  return (
    <div className="wrapper">
      <Navbar itemLength={items.length} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              completed={handleComplete}
              items={items}
              setItems={setItems}
              setTaskDone={setTaskDone}
              setIsDone={setIsDone}
            />
          }
        />
        {/* <Route
          path="/inprogress"
          element={
            <Inprogress
              setIsDone={setIsDone}
              isDone={isDone}
              completed={handleComplete}
              items={items}
              setItems={setItems}
              inprogress={inprogress}
            />
          }
        /> */}
        <Route
          path="/completed"
          element={
            <Completed
              taskDone={taskDone}
              setTaskDone={setTaskDone}
              items={items}
              setItems={setItems}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
