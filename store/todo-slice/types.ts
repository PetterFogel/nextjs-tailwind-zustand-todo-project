import { Todo } from "@/types/todo";

export interface TodoSlice extends State, Actions {}

export interface State {
  todos: Todo[];
}

export interface Actions {
  addTodo: (newTodo: Todo) => void;
  deleteTodo: (todoId: string) => void;
  checkTodo: (todo: Todo) => void;
}
