"use client";
import { FC } from "react";
import { TodoForm } from "../todo-form/TodoForm";
import { TodoList } from "../todo-list/TodoList";
import { useStore } from "@/store/store";

export const TodoContainer: FC = () => {
  const { selectedDate, todos } = useStore((state) => state);

  const todosByDate = todos.filter((t) => t.createdAt === selectedDate.date);

  return (
    <div className="flex flex-col gap-4 text-sm md:flex-row">
      <TodoForm />
      {!todos || todosByDate.length === 0 ? (
        <div className="w-full">
          <h2 className="text-base font-medium md:text-lg">Please add some todos for this date!</h2>
        </div>
      ) : (
        <TodoList todos={todosByDate} />
      )}
    </div>
  );
};
