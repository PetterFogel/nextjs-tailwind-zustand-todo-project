"use client";
import { Todo } from "@/types/todo";
import { TodosForm } from "../todos-form/TodosForm";
import { TodosList } from "../todos-list/TodosList";
import { FC, useEffect, useState } from "react";

export const TodosContainer: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (newTodo: Todo) => setTodos((prevState) => [...prevState, newTodo]);

  const deleteTodoHandler = (updatedList: Todo[]) => setTodos(updatedList);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const list = JSON.parse(localStorage.getItem("todoList") || "[]");
    setTodos(list);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex flex-col">
      <h1 className="p-4 text-center text-4xl">Todays Todos</h1>
      <div className="flex flex-col gap-4 text-sm lg:flex-row">
        <TodosForm onAddTodoClick={addTodoHandler} />
        {!todos || todos.length === 0 ? (
          <div className="flex-1 text-center">
            <h2 className="text-lg">List is empty, please add some todos!</h2>
          </div>
        ) : (
          <TodosList todos={todos} onDeleteTodoClick={deleteTodoHandler} />
        )}
      </div>
    </div>
  );
};
