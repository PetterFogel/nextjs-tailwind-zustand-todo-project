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
    const isValueEmpty = !value.replace(/\s/g, "").length;
    if (isValueEmpty) return;
    const uniqueId = uuid();
    const newTodo = {
      id: uniqueId,
      title: value.trim(),
      description: "",
      isDone: false
    };
    onAddTodoClick(newTodo);
    setValue("");
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className="flex flex-col gap-3">
        <input placeholder="Title" type="text" value={value} onChange={inputChangeHandler} />
        <input placeholder="Description" type="text" />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>
    </Card>
  );
};
