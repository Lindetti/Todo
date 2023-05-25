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
          {/* <NavLink to="/inprogress">Inprogress</NavLink> */}
          <NavLink to="/completed">Completed</NavLink>
        </div>
        <div className="task-content">
          <p>Completed</p>
          <div className="test2">
            {taskDone.map((item, index) => {
              return (
                <div key={index} className="card">
                  <div className="test">
                    <div className="item-content">
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
        </div>
      </div>
    </>
  );
};

export default Completed;
