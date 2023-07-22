import { StateCreator } from "zustand";
import { Actions, State } from "./types";

const initialState: State = {
  counter: 0,
  selectedDate: { day: "", date: "" }
};

export const calendarSlice: StateCreator<State & Actions> = (set) => ({
  ...initialState,
  setCounter: (number) => set((state) => ({ counter: state.counter + number })),
  setSelectedDate: (date) =>
    set((state) => ({
      selectedDate: {
        ...state.selectedDate,
        day: date.toLocaleString("en-GB", { weekday: "long" }),
        date: date.toLocaleString("en-GB", { dateStyle: "medium" })
      }
    }))
});
