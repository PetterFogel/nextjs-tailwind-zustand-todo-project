"use client";
import { Todo } from "@/types/todo";
import { useState } from "react";

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
        <div className="selection:mono flex flex-col gap-4 text-sm lg:flex-row">
          <form className="flex h-full flex-1 flex-col gap-3 rounded border bg-white p-3 ">
            <input className="rounded-lg border p-2" placeholder="Title" type="text" />
            <input className="rounded-lg border p-2" placeholder="Description" type="text" />
            <button
              className="text-l rounded-lg bg-violet-500 p-2 text-white hover:bg-violet-600"
              type="submit">
              Add
            </button>
          </form>
          <ul
            role="list"
            className="flex flex-1 flex-col  divide-slate-200 rounded border bg-white p-3">
            {todos.map((todo, i) => (
              <li key={i} className="group/item flex items-center rounded hover:bg-slate-100">
                <div className="flex flex-col gap-1 p-2">
                  <p className="text font-semibold capitalize">{todo.title}</p>
                  <p className="break-normal text-xs capitalize text-slate-500">
                    {todo.description}
                  </p>
                </div>
                <div className="invisible m-2 cursor-pointer rounded-md px-2 py-1 hover:bg-red-500 hover:text-yellow-50 group-hover/item:visible">
                  <p>Delete</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
