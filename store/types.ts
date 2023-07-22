import { Todo } from "@/types/todo";

export interface State {
  counter: number;
  selectedDate: { day: string; date: string };
  todos: Todo[];
}

export interface Actions {
  setCounter: (number: number) => void;
  setSelectedDate: (date: Date) => void;
  addTodo: (newTodo: Todo) => void;
  deleteTodo: (todoId: string) => void;
  checkTodo: (todo: Todo) => void;
}
