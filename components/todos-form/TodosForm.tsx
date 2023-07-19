"use client";
import { Todo } from "@/types/todo";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { Card } from "../card/Card";

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
    <Card>
      <form onSubmit={submitHandler} className="flex flex-col gap-3">
        <input
          className="appearance-none rounded-md px-3 py-2 shadow ring-1 ring-gray-950/10"
          placeholder="Title"
          type="text"
          value={value}
          onChange={inputChangeHandler}
        />
        <input
          className="appearance-none rounded-md px-3 py-2 shadow ring-1 ring-gray-950/10"
          placeholder="Description"
          type="text"
        />
        <button
          className="text-l appearance-none rounded-lg bg-indigo-500 p-2 font-semibold text-white  ring-1 ring-gray-950/10 hover:bg-indigo-600"
          type="submit">
          Add
        </button>
      </form>
    </Card>
  );
};
