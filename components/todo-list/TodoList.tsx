"use client";
import { FC } from "react";
import { Todo } from "@/types/todo";
import { Card } from "../card/Card";
import { TodoItem } from "../todo-item/TodoItem";

interface Props {
  todos: Todo[];
  onDeleteTodoClick: (todos: Todo[]) => void;
  onCheckTodoClick: (todos: Todo[]) => void;
}

export const TodoList: FC<Props> = ({ todos, onDeleteTodoClick, onCheckTodoClick }) => {
  const deleteTodoHandler = (todoId: string) => {
    const updatedList = todos.filter((t) => t.id !== todoId);
    onDeleteTodoClick(updatedList);
  };

  const checkTodoHandler = (todo: Todo) => {
    todos = todos.map((t) => (t.id === todo.id ? { ...t, isDone: todo.isDone } : t));
    onCheckTodoClick(todos);
  };

  return (
    <Card>
      <ul role="list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodoClick={deleteTodoHandler}
            onCheckTodoClick={checkTodoHandler}
          />
        ))}
      </ul>
    </Card>
  );
};
