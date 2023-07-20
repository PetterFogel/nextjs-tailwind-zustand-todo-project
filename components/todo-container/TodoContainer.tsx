"use client";
import { Todo } from "@/types/todo";
import { TodoForm } from "../todo-form/TodoForm";
import { TodoList } from "../todo-list/TodoList";
import { FC, useEffect, useState } from "react";

export const TodoContainer: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (newTodo: Todo) => setTodos((prevState) => [...prevState, newTodo]);

  const deleteTodoHandler = (updatedList: Todo[]) => setTodos(updatedList);

  const todoCheckHandler = (updatedList: Todo[]) => setTodos(updatedList);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const list = JSON.parse(localStorage.getItem("todoList") || "[]");
    setTodos(list);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex flex-col gap-4 text-sm lg:flex-row">
      <TodoForm onAddTodoClick={addTodoHandler} />
      {!todos || todos.length === 0 ? (
        <div className="flex-1 px-4 text-center">
          <h2 className="text-base md:text-lg">List is empty, please add some todos!</h2>
        </div>
      ) : (
        <TodoList
          todos={todos}
          onDeleteTodoClick={deleteTodoHandler}
          onCheckTodoClick={todoCheckHandler}
        />
      )}
    </div>
  );
};
