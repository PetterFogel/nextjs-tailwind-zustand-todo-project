"use client";
import { FC } from "react";
import { Todo } from "@/types/todo";
import { TodoItem } from "../todo-item/TodoItem";
import { CardWrapper } from "../card-wrapper/CardWrapper";

interface Props {
  todos: Todo[];
}

export const TodoList: FC<Props> = ({ todos }) => {
  return (
    <CardWrapper title="Todays Todos">
      <ul role="list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </CardWrapper>
  );
};
