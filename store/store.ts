import { State } from "./type";
import { create } from "zustand";

const ifWindow = typeof window !== "undefined";
const todos = ifWindow ? JSON.parse(localStorage.getItem("todoList") || "[]") : [];

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
  addTodo: (newTodo) => set((state) => ({ todos: [...state.todos, newTodo] })),
  deleteTodo: (todoId) => set((state) => ({ todos: state.todos.filter((t) => t.id !== todoId) })),
  checkTodo: (todo) =>
    set((state) => ({
      todos: state.todos.map((t) => (t.id === todo.id ? { ...t, isDone: todo.isDone } : t))
    }))
}));
