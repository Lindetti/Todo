import "../Styles/Home.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "../Components/Modal/Modal";

const Home = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [item, setItem] = useState([]);
  const [itemInput, setItemInput] = useState("");

  const showModal = () => {
    setIsModalActive(true);
  };

  const closeModal = () => {
    setIsModalActive(false);
  };

  const addItem = (addNewItem) => {
    setItem([...item, addNewItem]);
  };

  const handleOnChange = (event) => {
    setItemInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      date: document.getElementById("date").value,
    };
    addItem(newItem);
    setItemInput("");
    setIsModalActive(false);
  };

  return (
    <div className="task-wrapper">
      <div className="links">
        <NavLink to="/">All my task</NavLink>
        <NavLink to="/inprogress">Inprogress</NavLink>
        <NavLink to="/completed">Completed</NavLink>
      </div>
      <div className="task-content">
        <div className="addTaskBtn">
          <button onClick={showModal}>+ Add new task</button>
        </div>
        <div className="test2">
          {item.map((item) => {
            return (
              <div className="items">
                <div className="test">
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                  <p>{item.date}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Modal
          showModal={isModalActive}
          closeModal={closeModal}
          addTask={handleSubmit}
          handleOnChange={handleOnChange}
          handleInput={itemInput}
        />
      </div>
    </div>
  );
};

export default Home;
