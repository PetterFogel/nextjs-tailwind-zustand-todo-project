"use client";
import { FC } from "react";
import { Todo } from "@/types/todo";
import { Card } from "../card/Card";
import { TodoItem } from "../todo-item/TodoItem";

interface Props {
  todos: Todo[];
}

export const TodoList: FC<Props> = ({ todos }) => {
  return (
    <Card>
      <ul role="list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </Card>
  );
};
