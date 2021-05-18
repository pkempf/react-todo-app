import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TodoList from "./TodoList";

const addTodo = (todoList, task = "abcdefg") => {
  const taskInput = todoList.getByLabelText("Task:");
  const submitButton = todoList.getByText("Create Task");
  fireEvent.change(taskInput, { target: { value: task } });
  fireEvent.click(submitButton);
};

it("renders without crashing", () => {
  render(<TodoList />);
});

it("matches the snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("adds a todo", () => {
  const todoList = render(<TodoList />);

  // the todo shouldn't be there yet
  expect(todoList.queryByText("abcdefg")).not.toBeInTheDocument();

  // add the todo
  addTodo(todoList);

  // make sure the task and remove button were added
  expect(todoList.getByText("abcdefg")).toBeInTheDocument();
  expect(todoList.getByText("X")).toBeInTheDocument();

  // make sure our form was reset
  expect(todoList.getByLabelText("Task:")).toHaveValue("");
});

it("deletes a todo", () => {
  const todoList = render(<TodoList />);
  addTodo(todoList);

  // make sure the todo is there to start with
  expect(todoList.getByText("abcdefg")).toBeInTheDocument();

  // click the X to remove it
  fireEvent.click(todoList.getByText("X"));

  // todo should be gone now
  expect(todoList.queryByText("abcdefg")).not.toBeInTheDocument();
});
