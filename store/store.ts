import { create } from "zustand";
import { persist } from "zustand/middleware";
import { todoSlice } from "./todo-slice/todoSlice";
import { TodoSlice } from "./todo-slice/types";
import { calendarSlice } from "./calendar-slice/calendarSlice";
import { CalendarSlice } from "./calendar-slice/types";

export const useStore = create<CalendarSlice & TodoSlice>()(
  persist(
    (...a) => ({
      ...calendarSlice(...a),
      ...todoSlice(...a)
    }),
    { name: "todo-list", partialize: (state) => ({ todos: state.todos }) }
  )
);
