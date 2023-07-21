import { create } from "zustand";

interface State {
  counter: number;
  setCounter: (number: number) => void;
  selectedDate: { day: string; date: string };
  setSelectedDate: (date: Date) => void;
}

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
    }))
}));
