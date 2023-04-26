import "../Styles/Home.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "../Components/Modal/Modal";

const Home = ({ items, setItems }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [itemInput, setItemInput] = useState("");

  const deleteFunction = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const showModal = () => {
    setIsModalActive(true);
  };

  const closeModal = () => {
    setIsModalActive(false);
  };

  const addItem = (addNewItem) => {
    setItems([...items, addNewItem]);
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
    setIsModalActive(false);
    event.target.reset();
  };

  return (
    <>
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
            {items.map((item, index) => {
              return (
                <div key={index} className="items">
                  <div className="test">
                    <div className="remove-item">
                      <div>
                        <p>{item.title}</p>
                        <img />
                      </div>
                      <p>{item.description}</p>
                      <p>{item.date}</p>
                      <img
                        className="remove-icon"
                        onClick={() => deleteFunction(index)}
                        src="/trash-can.svg"
                        alt="trash can, click it to delete"
                      />
                    </div>
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
    </>
  );
};

export default Home;
