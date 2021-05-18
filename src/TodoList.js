import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todoObj) => {
    setTodos((todos) => [...todos, todoObj]);
  };
  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const todosToRender = todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      task={todo.task}
      handleRemove={removeTodo}
    />
  ));

  return (
    <div className="TodoList">
      <NewTodoForm createTodo={addTodo} />
      <hr />
      {todosToRender}
    </div>
  );
};

export default TodoList;
