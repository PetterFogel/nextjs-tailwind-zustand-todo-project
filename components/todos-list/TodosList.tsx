"use client";
import { FC } from "react";
import { Todo } from "@/types/todo";
import { TrashIcon } from "@heroicons/react/24/solid";

interface Props {
  todos: Todo[];
  onDeleteTodoClick: (todos: Todo[]) => void;
}

export const TodosList: FC<Props> = ({ todos, onDeleteTodoClick }) => {
  const deleteTodoHandler = (todoId: string) => {
    const updatedList = todos.filter((t) => t.id !== todoId);
    onDeleteTodoClick(updatedList);
  };

  return (
    <ul
      role="list"
      className="h-full flex-1 flex-col divide-y rounded-lg border bg-white px-4 py-6 shadow-md ring-1 ring-slate-900/5 dark:bg-slate-800">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="group/item flex items-center justify-between  hover:bg-slate-100">
          <div className="flex flex-col gap-1 p-2">
            <p className="text-base font-medium capitalize">{todo.title}</p>
          </div>
          <div
            onClick={() => deleteTodoHandler(todo.id)}
            className="invisible m-2 cursor-pointer rounded-md p-1 text-gray-400 hover:text-red-500  group-hover/item:visible">
            <TrashIcon className="color h-5 w-5" />
          </div>
        </li>
      ))}
    </ul>
  );
};
