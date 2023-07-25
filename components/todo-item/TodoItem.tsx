import { ChangeEvent, FC } from "react";
import { Todo } from "@/types/todo";
import { useStore } from "@/store/store";
import { TrashIcon } from "@heroicons/react/24/solid";

interface Props {
  todo: Todo;
}

export const TodoItem: FC<Props> = ({ todo }) => {
  const { deleteTodo, checkTodo } = useStore((state) => state);

  return (
    <li className="group/item flex flex-col gap-3 rounded-md p-3 hover:bg-slate-100 dark:hover:bg-slate-900">
      <div className="flex">
        <div className="flex w-full gap-3">
          <input
            onChange={(e) => checkTodo({ ...todo, isDone: e.target.checked })}
            checked={todo.isDone}
            id="checked-checkbox"
            type="checkbox"
          />
          <p className="text-base font-medium">{todo.title}</p>
        </div>
        <div
          onClick={() => deleteTodo(todo.id)}
          className="invisible ml-3 cursor-pointer rounded-md text-gray-400 hover:text-red-500 group-hover/item:visible">
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
