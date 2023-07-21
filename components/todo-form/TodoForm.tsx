"use client";
import { useStore } from "@/store/store";
import { Todo } from "@/types/todo";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { Card } from "../card/Card";

interface Props {
  onAddTodoClick: (todo: Todo) => void;
}

export const TodoForm: FC<Props> = ({ onAddTodoClick }) => {
  const [titleValue, setTitleValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const { selectedDate } = useStore((state) => state);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValueEmpty = !titleValue.replace(/\s/g, "").length;
    if (isValueEmpty) return;
    const uniqueId = uuid();
    const newTodo = {
      id: uniqueId,
      title: titleValue.trim(),
      description: descValue.trim(),
      isDone: false,
      createdAt: selectedDate.date
    };
    onAddTodoClick(newTodo);
    setTitleValue("");
    setDescValue("");
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className="flex flex-col gap-3">
        <input
          required
          type="text"
          placeholder="Title"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={descValue}
          onChange={(e) => setDescValue(e.target.value)}
        />

        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>
    </Card>
  );
};
