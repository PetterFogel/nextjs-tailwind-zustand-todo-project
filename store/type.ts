import { Todo } from "@/types/todo";

export interface State {
  counter: number;
  setCounter: (number: number) => void;
  selectedDate: { day: string; date: string };
  setSelectedDate: (date: Date) => void;
  todos: Todo[];
  addTodo: (newTodo: Todo) => void;
  deleteTodo: (todoId: string) => void;
  checkTodo: (todo: Todo) => void;
}
