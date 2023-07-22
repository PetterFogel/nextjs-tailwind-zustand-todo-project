import { StateCreator } from "zustand";
import { Actions, State } from "./types";

export const todoSlice: StateCreator<State & Actions> = (set) => ({
  todos: [],
  addTodo: (newTodo) => set((state) => ({ todos: [...state.todos, newTodo] })),
  deleteTodo: (todoId) => set((state) => ({ todos: state.todos.filter((t) => t.id !== todoId) })),
  checkTodo: (todo) =>
    set((state) => ({
      todos: state.todos.map((t) => (t.id === todo.id ? { ...t, isDone: todo.isDone } : t))
    }))
});
