"use client";
import { Todo } from "@/types/todo";
import { TodosForm } from "../todos-form/TodosForm";
import { TodosList } from "../todos-list/TodosList";
import { FC, useState } from "react";

export const TodosContainer: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "123",
      title: "Make lunch",
      description:
        "Lunch for todays is meatballs and potatoes Lunch for todays is meatballs and potatoes",
      isDone: false
    },
    {
      id: "456",
      title: "Do dishes",
      description: "Do the dishes after work",
      isDone: false
    },
    {
      id: "567",
      title: "Do dishes",
      description: "Do the dishes after work",
      isDone: false
    }
  ]);
  return (
    <div className="flex flex-col">
      <h1 className="p-4 text-center text-4xl">Todays Todos</h1>
      <div className="flex flex-col gap-4 text-sm lg:flex-row">
        <TodosForm />
        <TodosList todos={todos} />
      </div>
    </div>
  );
};
