import "../Styles/Home.css";
import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Inprogress = ({
  inprogress,
  items,
  setItems,
  completed,
  isDone,
  setIsDone,
}) => {
  const deleteFunction = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <>
      <div className="task-wrapper">
        <div className="links">
          <NavLink to="/">All my task</NavLink>
          {/* <NavLink to="/inprogress">Inprogress</NavLink>
          <NavLink to="/completed">Completed</NavLink> */}
        </div>
        <div className="task-content">
          <p>Inprogress</p>
          <div className="test2">
            {!isDone
              ? inprogress.map((item, index) => {
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
                      <button onClick={completed}>Done</button>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Inprogress;
