import "../Styles/Home.css";
import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Completed = ({ setItems, items, setTaskDone, taskDone }) => {
  const deleteFunction = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    setTaskDone(updatedItems);
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
          <p>Completed</p>
          <div className="test2">
            {taskDone.map((item, index) => {
              return (
                <div key={index} className="items">
                  <div className="test">
                    <div className="remove-item">
                      <div>
                        <p>{item.title}</p>
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
        </div>
      </div>
    </>
  );
};

export default Completed;
