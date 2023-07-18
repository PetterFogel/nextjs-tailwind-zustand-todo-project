"use client";
import { Todo } from "@/types/todo";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";

interface Props {
  onAddTodoClick: (todo: Todo) => void;
}

export const TodosForm: FC<Props> = ({ onAddTodoClick }) => {
  const [value, setValue] = useState("");

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const uniqueId = uuid();
    const newTodo = {
      id: uniqueId,
      title: value,
      description: "",
      isDone: false
    };
    onAddTodoClick(newTodo);
    setValue("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex h-full flex-1 flex-col  gap-3 rounded-lg border bg-white  px-4 py-6 shadow-md  ring-1 ring-slate-900/5 dark:bg-slate-800">
      <input
        className="rounded-md px-3 py-2 shadow ring-1 ring-gray-950/10"
        placeholder="Title"
        type="text"
        value={value}
        onChange={inputChangeHandler}
      />
      <input
        className="rounded-md px-3 py-2 shadow ring-1 ring-gray-950/10"
        placeholder="Description"
        type="text"
      />
      <button
        className="text-l rounded-lg bg-indigo-500 p-2 font-semibold text-white  ring-1 ring-gray-950/10 hover:bg-indigo-600"
        type="submit">
        Add
      </button>
    </form>
  );
};
