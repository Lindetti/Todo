import "../Styles/Home.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "../Components/Modal/Modal";

const Home = ({ items, setItems, completed, setTaskDone }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [itemInput, setItemInput] = useState("");

  const deleteFunction = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    setTaskDone(updatedItems);
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
      state: "inprogress",
    };

    addItem(newItem);
    setIsModalActive(false);
    event.target.reset();
    // setIsDone(false);
  };

  return (
    <>
      <div className="task-wrapper">
        <div className="links">
          <NavLink to="/">All my task</NavLink>
          {/* <NavLink to="/inprogress">Inprogress</NavLink>  */}
          <NavLink to="/completed">Completed</NavLink>
        </div>
        <div className="task-content">
          <div className="addTaskBtn">
            <button onClick={showModal}>+ Add new task</button>
          </div>
          <div className="test2">
            {items.map((item, index) => {
              return (
                <div key={index} className="card">
                  <div className="test">
                    <div className="item-content">
                      <div className="check" onClick={completed}>
                        <img src="/check.svg" alt="done" />
                      </div>
                      <div className="title">
                        <h2>{item.title}</h2>
                      </div>
                      <h5>{item.description}</h5>
                      <p>{item.date}</p>
                    </div>
                    <div className="remove-item">
                      <img
                        onClick={() => deleteFunction(index)}
                        src="/white-trashcan.svg"
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
