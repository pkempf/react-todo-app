import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewTodoForm = ({ createTodo }) => {
  const INITIAL_STATE = { task: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const { value } = evt.target;
    setFormData({ task: value });
  };

  const getInput = (evt) => {
    evt.preventDefault();
    createTodo({ ...formData, id: uuid() });
    setFormData(INITIAL_STATE);
  };

  return (
    <div className="NewTodoForm">
      <form onSubmit={getInput}>
        <div>
          <label htmlFor="task">Task:</label>
          <input
            onChange={handleChange}
            type="text"
            name="task"
            value={formData.task}
            id="task"
          />
        </div>
        <button id="newTaskButton">Create Task</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
