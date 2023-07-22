import { create } from "zustand";
import { Actions, State } from "./types";

const ifWindow = typeof window !== "undefined";
const todos = ifWindow ? JSON.parse(localStorage.getItem("todoList") || "[]") : [];

const initialState: State = {
  counter: 0,
  selectedDate: { day: "", date: "" },
  todos
};

export const useStore = create<State & Actions>()((set) => ({
  ...initialState,
  setCounter: (number) => set((state) => ({ counter: state.counter + number })),
  setSelectedDate: (date) =>
    set((state) => ({
      selectedDate: {
        ...state.selectedDate,
        day: date.toLocaleString("en-GB", { weekday: "long" }),
        date: date.toLocaleString("en-GB", { dateStyle: "medium" })
      }
    })),
  addTodo: (newTodo) => set((state) => ({ todos: [...state.todos, newTodo] })),
  deleteTodo: (todoId) => set((state) => ({ todos: state.todos.filter((t) => t.id !== todoId) })),
  checkTodo: (todo) =>
    set((state) => ({
      todos: state.todos.map((t) => (t.id === todo.id ? { ...t, isDone: todo.isDone } : t))
    }))
}));
