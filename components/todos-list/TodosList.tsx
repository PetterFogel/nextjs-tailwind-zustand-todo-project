"use client";
import { Todo } from "@/types/todo";
import { FC } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

interface Props {
  todos: Todo[];
  onDeleteTodoClick: (todoId: string) => void;
}

export const TodosList: FC<Props> = ({ todos, onDeleteTodoClick }) => {
  return (
    <ul role="list" className="h-full flex-1 flex-col divide-y rounded border bg-white p-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="group/item flex items-center justify-between hover:bg-slate-100">
          <div className="flex flex-col gap-1 p-2">
            <p className="text font-semibold capitalize">{todo.title}</p>
          </div>
          <div
            onClick={() => onDeleteTodoClick(todo.id)}
            className="invisible m-2 cursor-pointer rounded-md p-1 text-gray-500 hover:bg-red-500 hover:text-yellow-50 group-hover/item:visible">
            <TrashIcon className="color h-5 w-5" />
          </div>
        </li>
      ))}
    </ul>
  );
};
