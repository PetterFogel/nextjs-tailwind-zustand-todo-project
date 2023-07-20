import { ChangeEvent, FC, useState } from "react";
import { Todo } from "@/types/todo";
import { TrashIcon } from "@heroicons/react/24/solid";

interface Props {
  todo: Todo;
  onDeleteTodoClick: (todoId: string) => void;
  onCheckTodoClick: (todo: Todo) => void;
}

export const TodoItem: FC<Props> = ({ todo, onDeleteTodoClick, onCheckTodoClick }) => {
  const checkTodoHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onCheckTodoClick({ ...todo, isDone: event.target.checked });
  };

  return (
    <li className="group/item flex flex-col gap-3 rounded-md p-3 hover:bg-slate-100 dark:hover:bg-slate-900">
      <div className="flex">
        <div className="flex w-full gap-3">
          <input
            onChange={checkTodoHandler}
            checked={todo.isDone}
            id="checked-checkbox"
            type="checkbox"
          />
          <p className="text-base font-medium capitalize">{todo.title}</p>
        </div>
        <div
          onClick={() => onDeleteTodoClick(todo.id)}
          className="invisible cursor-pointer rounded-md text-gray-400 hover:text-red-500  group-hover/item:visible">
          <TrashIcon className="color h-5 w-5" />
        </div>
      </div>
      {todo.description && (
        <p className="hidden text-sm text-slate-500 group-hover/item:block dark:text-slate-400">
          {todo.description}
        </p>
      )}
    </li>
  );
};
