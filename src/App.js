import "./app.css";
import { useState, useEffect } from "react";
import React from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/handleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const handleCheckboxChange = (_id) => {
    setSelectedTodo(_id);
  };
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };
  return (
    <>
    <div className="main-container">
          <div className="container">
        <div className="app-bar">
          <h1>TODO APP</h1>
        </div>
        <div className="todo-input">
          <input
            className="input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter todo"
          />
          <button
            className="btn-add"
            onClick={
              isUpdating
                ? () =>
                    updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdating ? "update" : "Add"}
          </button>
        </div>
      </div>
      {toDo.map((item) => (
        <ToDo
          key={item._id}
          text={item.text}
          isChecked={selectedTodo === item._id}
          handleCheckboxChange={() => handleCheckboxChange(item._id)}
          updateMode={() => updateMode(item._id, item.text)}
          deleteToDo={() => deleteToDo(item._id, setToDo)}
        />
      ))}
      </div>
    </>
  );
}

export default App;
