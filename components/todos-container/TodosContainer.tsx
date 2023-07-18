"use client";
import { Todo } from "@/types/todo";
import { TodosForm } from "../todos-form/TodosForm";
import { TodosList } from "../todos-list/TodosList";
import { v4 as uuid } from "uuid";
import { FC, useEffect, useState } from "react";

export const TodosContainer: FC = () => {
  const [todos, setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem("todoList") || "[]"));

  const addTodoHandler = (value: string) => {
    const uniqueId = uuid();
    const newTodo: Todo = {
      id: uniqueId,
      title: value,
      description: "",
      isDone: false
    };
    setTodos((prevState) => [...prevState, newTodo]);
  };

  const deleteTodoHandler = (todoId: string) => {
    const updatedList = todos.filter((t) => t.id !== todoId);
    setTodos(updatedList);
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex flex-col">
      <h1 className="p-4 text-center text-4xl">Todays Todos</h1>
      <div className="flex flex-col gap-4 text-sm lg:flex-row">
        <TodosForm onAddTodoClick={addTodoHandler} />
        <TodosList todos={todos} onDeleteTodoClick={deleteTodoHandler} />
      </div>
    </div>
  );
};
