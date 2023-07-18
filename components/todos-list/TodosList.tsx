"use client";
import { Todo } from "@/types/todo";
import { FC } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

interface Props {
  todos: Todo[];
}

export const TodosList: FC<Props> = ({ todos }) => {
  return (
    <ul role="list" className="flex-1 flex-col divide-y rounded border bg-white p-3">
      {todos.map((todo, i) => (
        <li key={i} className="group/item flex items-center justify-between hover:bg-slate-100">
          <div className="flex flex-col gap-1 p-2">
            <p className="text font-semibold capitalize">{todo.title}</p>
            {/* <p className="break-normal text-xs capitalize text-slate-500">{todo.description}</p> */}
          </div>
          <div className="invisible m-2 cursor-pointer rounded-md p-1 text-gray-500 hover:bg-red-500 hover:text-yellow-50 group-hover/item:visible">
            <TrashIcon className="color h-5 w-5" />
          </div>
        </li>
      ))}
    </ul>
  );
};
