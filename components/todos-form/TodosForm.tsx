"use client";
import { ChangeEvent, FC, FormEvent, useState } from "react";

interface Props {
  onAddTodoClick: (value: string) => void;
}

export const TodosForm: FC<Props> = ({ onAddTodoClick }) => {
  const [value, setValue] = useState("");

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddTodoClick(value);
    setValue("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex h-full flex-1 flex-col gap-3 rounded border bg-white p-3 ">
      <input
        className="rounded-lg border p-2"
        placeholder="Title"
        type="text"
        value={value}
        onChange={inputChangeHandler}
      />
      <input className="rounded-lg border p-2" placeholder="Description" type="text" />
      <button
        className="text-l rounded-lg bg-sky-500 p-2 font-semibold text-white hover:bg-sky-700"
        type="submit">
        Add
      </button>
    </form>
  );
};
