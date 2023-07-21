import { Todo } from "@/types/todo";
import { create } from "zustand";

interface State {
  counter: number;
  setCounter: (number: number) => void;
  selectedDate: { day: string; date: string };
  setSelectedDate: (date: Date) => void;
  todos: Todo[];
  addTodo: (newTodo: Todo) => void;
  deleteTodo: (todoId: string) => void;
  checkTodo: (todo: Todo) => void;
}

const ifWindow = typeof window !== "undefined";
const todos = ifWindow ? JSON.parse(localStorage.getItem("todoList") || "[]") : [];

const setLocalStorageHandler = (state: Todo[]) =>
  localStorage.setItem("todoList", JSON.stringify(state));

export const useStore = create<State>()((set) => ({
  counter: 0,
  setCounter: (number) => set((state) => ({ counter: state.counter + number })),
  selectedDate: { day: "", date: "" },
  setSelectedDate: (date) =>
    set((state) => ({
      selectedDate: {
        ...state.selectedDate,
        day: date.toLocaleString("en-GB", { weekday: "long" }),
        date: date.toLocaleString("en-GB", { dateStyle: "medium" })
      }
    })),
  todos,
  addTodo: (newTodo) =>
    set((state) => {
      setLocalStorageHandler([...state.todos, newTodo]);
      return {
        todos: [...state.todos, newTodo]
      };
    }),
  deleteTodo: (todoId) =>
    set((state) => {
      setLocalStorageHandler(state.todos.filter((t) => t.id !== todoId));
      return {
        todos: state.todos.filter((t) => t.id !== todoId)
      };
    }),
  checkTodo: (todo) =>
    set((state) => {
      const updatedList = state.todos.map((t) =>
        t.id === todo.id ? { ...t, isDone: todo.isDone } : t
      );
      setLocalStorageHandler(updatedList);
      return {
        todos: state.todos.map((t) => (t.id === todo.id ? { ...t, isDone: todo.isDone } : t))
      };
    })
}));
