"use client";
import { FC, useEffect, useState } from "react";
import { Todo } from "@/types/todo";
import { TodoForm } from "../todo-form/TodoForm";
import { TodoList } from "../todo-list/TodoList";
import { useStore } from "@/store/store";

export const TodoContainer: FC = () => {
  const { selectedDate, todos } = useStore((state) => state);
  const [_, setTodos] = useState<Todo[]>([]);

  const todoCheckHandler = (updatedList: Todo[]) => setTodos(updatedList);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const list: Todo[] = JSON.parse(localStorage.getItem("todoList") || "[]");
    setTodos(list);
  }, []);

  useEffect(() => {
    console.log("TEST");
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  const todosByDate = todos.filter((t) => t.createdAt === selectedDate.date);

  return (
    <div className="flex flex-col gap-4 text-sm lg:flex-row">
      <TodoForm />
      {!todos || todosByDate.length === 0 ? (
        <div className="flex-1 px-4 text-center">
          <h2 className="text-base md:text-lg">Please add some todos for this date!</h2>
        </div>
      ) : (
        <TodoList todos={todosByDate} onCheckTodoClick={todoCheckHandler} />
      )}
    </div>
  );
};
