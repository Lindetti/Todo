import { useState } from "react";
import "../../Styles/Modal.css";

const Modal = ({
  showModal,
  closeModal,
  addTask,
  handleOnChange,
  handleInput,
}) => {
  const modalClassName = showModal
    ? "modal display-block"
    : "modal display-none";

  const [startDate, setStartDate] = useState(null);

  return (
    <div className={modalClassName}>
      <div className="modal">
        <div className="modal-content">
          <div className="content-div">
            <form onSubmit={addTask}>
              <p>Title:</p>
              <input
                type="text"
                placeholder="title.."
                onChange={(event) => handleOnChange(event, "title")}
                value={handleInput.title}
                id="title"
              />
              <p>Description: </p>
              <textarea
                id="description"
                onChange={(event) => handleOnChange(event, "description")}
                value={handleInput.description}
              />
              <input
                className="date"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                onChange={(event) => handleOnChange(event, "date")}
                value={handleInput.date}
                id="date"
              />

              <button disabled={!handleInput} type="submit" className="addTask">
                Add
              </button>
            </form>
            <div className="closeDiv">
              <div className="close-icon">
                <span className="close-x" onClick={closeModal}>
                  &times;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
