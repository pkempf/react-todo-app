import React from "react";
import "./Todo.css";

const Todo = ({ id, task = "Task Placeholder", handleRemove }) => {
  return (
    <div className="Todo">
      <div className="Todo-task">{task}</div>
      <div className="Todo-remove">
        <button className="Todo-remove-btn" onClick={() => handleRemove(id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
