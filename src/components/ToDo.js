import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

const ToDo = ({
  text,
  updateMode,
  deleteToDo,
  isChecked,
  handleCheckboxChange,
}) => {
  return (
    <>
      <div className="todo-list">
        <div className="list-row">
          <div className="first_items">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <p className="todo-text">{text}</p>
          </div>
          <div className="icons">
            <FaEdit className="icon edit-icon" onClick={updateMode} />
            <span className="edit-text">Edit</span>
            <MdOutlineDelete
              className="icon delete-icon"
              onClick={deleteToDo}
            />
            <span className="delete-text">Delete</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
