"use client";
import { Todo } from "@/types/todo";
import { useState } from "react";
import { TodosForm } from "@/components/todos-form/TodosForm";
import { TodosList } from "@/components/todos-list/TodosList";

export default function Home() {
  const [total, setTotal] = useState(0);
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
    <main className="m-auto max-w-5xl p-4">
      <div className="flex flex-col">
        <h1 className="p-4 text-center text-4xl">Todays Todos</h1>
        <div className="flex flex-col gap-4 text-sm lg:flex-row">
          <TodosForm />
          <TodosList todos={todos} />
        </div>
      </div>
    </main>
  );
}
