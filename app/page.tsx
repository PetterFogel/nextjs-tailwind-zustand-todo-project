"use client";
import { Todo } from "@/types/todo";
import { useState } from "react";

export default function Home() {
  const [total, setTotal] = useState(0);
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "123",
      title: "Make lunch",
      description: "Lunch for todays is meatballs and potatoes",
      isDone: false,
    },
    {
      id: "456",
      title: "Do dishes",
      description: "Do the dishes after work",
      isDone: false,
    },
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl p-4 text-center">Todays Todos</h1>
        <div className=" p-4 rounded-lg">
          <form className="grid grid-cols-6 items-center text-black">
            <input
              className="col-span-3 p-3 border"
              placeholder="Enter Item"
              type="text"
            />
            <input
              className="col-span-2 p-3 border mx-3"
              placeholder="Enter $"
              type="number"
            />
            <button
              className="text-black border border-black hover:bg-slate-300 p-3 text-l"
              type="submit"
            >
              Add
            </button>
          </form>
          <ul className="p-6 divide-y divide-slate-200 bg-white">
            {todos.map((todo, i) => (
              <li key={i} className="flex py-4 first:pt-0 last:pb-0">
                <div className="p-4 w-full flex flex-col gap-3">
                  <span className="capitalize">{todo.title}</span>
                  <span>{todo.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
