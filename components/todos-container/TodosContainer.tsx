"use client";
import { Todo } from "@/types/todo";
import { TodosForm } from "../todos-form/TodosForm";
import { Switch } from "@headlessui/react";
import { TodosList } from "../todos-list/TodosList";
import { FC, useEffect, useState } from "react";

export const TodosContainer: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [enabled, setEnabled] = useState(false);

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

  useEffect(() => {
    if (
      typeof window !== "undefined"
        ? localStorage.theme === "dark" ||
          (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
        : false
    ) {
      setEnabled(true);
      document.documentElement.classList.add("dark");
    } else {
      setEnabled(false);
      document.documentElement.classList.remove("dark");
    }
  }, [enabled]);

  const toggleSwitchHandler = (checked: boolean) => {
    setEnabled(checked);
    if (checked) return (localStorage.theme = "dark");
    localStorage.theme = "light";
  };

  return (
    <div className="flex flex-col bg-white dark:bg-black">
      <Switch
        checked={enabled}
        onChange={toggleSwitchHandler}
        className={`${
          enabled ? "bg-indigo-500" : "bg-gray-200"
        } relative inline-flex h-6 w-11 items-center rounded-full`}>
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
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
