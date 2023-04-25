import "../Styles/Home.css";
import { NavLink } from "react-router-dom";

const Inprogress = () => {
  return (
    <div className="task-wrapper">
      <div className="links">
        <NavLink to="/">All my task</NavLink>
        <NavLink to="/inprogress">Inprogress</NavLink>
        <NavLink to="/completed">Completed</NavLink>
      </div>
      <div className="task-content">
        <p>Inprogress</p>
      </div>
    </div>
  );
};

export default Inprogress;
