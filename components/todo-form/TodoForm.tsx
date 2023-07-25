"use client";
import { FC } from "react";
import { Card } from "../card/Card";
import { useStore } from "@/store/store";
import { v4 as uuid } from "uuid";
import { SubmitHandler, useForm } from "react-hook-form";

interface IForm {
  title: string;
  description: string;
}

export const TodoForm: FC = () => {
  const { selectedDate, addTodo } = useStore((state) => state);

  const { register, handleSubmit, reset } = useForm<IForm>({
    defaultValues: {
      title: "",
      description: ""
    }
  });

  const onSubmit: SubmitHandler<IForm> = (data) => {
    const { title, description } = data;
    const isValueEmpty = !title.replace(/\s/g, "").length;
    if (isValueEmpty) return;
    const uniqueId = uuid();
    const newTodo = {
      id: uniqueId,
      title: title.trim(),
      description: description.trim(),
      isDone: false,
      createdAt: selectedDate.date
    };
    addTodo(newTodo);
    reset();
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <input
          required
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
        />
        <input type="text" placeholder="Description" {...register("description")} />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>
    </Card>
  );
};
