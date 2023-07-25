"use client";
import { FC } from "react";
import { Card } from "../card/Card";
import { useStore } from "@/store/store";
import { v4 as uniqueId } from "uuid";
import { SubmitHandler, useForm } from "react-hook-form";

interface IForm {
  title: string;
  description: string;
}

export const TodoForm: FC = () => {
  const { selectedDate, addTodo } = useStore((state) => state);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors }
  } = useForm<IForm>({
    defaultValues: {
      title: "",
      description: ""
    }
  });

  const onSubmit: SubmitHandler<IForm> = (data) => {
    const { title, description } = data;
    const isTitleEmpty = !title.replace(/\s/g, "").length;
    if (isTitleEmpty) return setError("title", { message: "Please enter title" });
    const newTodo = {
      id: uniqueId(),
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
          type="text"
          placeholder="Title"
          className={`${errors.title && "error"}`}
          {...register("title", { required: "Please enter title" })}
        />
        {errors.title && <p className="ml-3 text-sm text-red-500">{errors.title?.message}</p>}
        <input
          type="text"
          placeholder="Description"
          className="border-none"
          {...register("description")}
        />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>
    </Card>
  );
};
