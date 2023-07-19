"use client";
import { FC } from "react";
import { Todo } from "@/types/todo";
import { Card } from "../card/Card";
import { TodoItem } from "../todo-item/TodoItem";

interface Props {
  todos: Todo[];
  onDeleteTodoClick: (todos: Todo[]) => void;
}

export const TodoList: FC<Props> = ({ todos, onDeleteTodoClick }) => {
  const deleteTodoHandler = (todoId: string) => {
    const updatedList = todos.filter((t) => t.id !== todoId);
    onDeleteTodoClick(updatedList);
  };

  return (
    <Card>
      <ul role="list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDeleteTodoClick={deleteTodoHandler} />
        ))}
      </ul>
    </Card>
  );
};
