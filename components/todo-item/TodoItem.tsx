import { FC } from "react";
import { Todo } from "@/types/todo";
import { TrashIcon } from "@heroicons/react/24/solid";

interface Props {
  todo: Todo;
  onDeleteTodoClick: (todoId: string) => void;
}

export const TodoItem: FC<Props> = ({ todo, onDeleteTodoClick }) => {
  return (
    <li className="group/item flex items-center justify-between rounded-md p-3 hover:bg-slate-100 dark:hover:bg-slate-900">
      <div className="flex flex-col">
        <p className="text-base font-medium capitalize">{todo.title}</p>
      </div>
      <div
        onClick={() => onDeleteTodoClick(todo.id)}
        className="invisible cursor-pointer rounded-md text-gray-400 hover:text-red-500  group-hover/item:visible">
        <TrashIcon className="color h-5 w-5" />
      </div>
    </li>
  );
};
