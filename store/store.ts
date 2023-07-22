import { create } from "zustand";
import { todoSlice } from "./todo-slice/todoSlice";
import { TodoSlice } from "./todo-slice/types";
import { calendarSlice } from "./calendar-slice/calendarSlice";
import { CalendarSlice } from "./calendar-slice/types";

export const useStore = create<CalendarSlice & TodoSlice>()((...a) => ({
  ...calendarSlice(...a),
  ...todoSlice(...a)
}));
