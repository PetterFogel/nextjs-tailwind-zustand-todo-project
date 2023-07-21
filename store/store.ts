import { create } from "zustand";

interface State {
  counter: number;
  setCounter: (number: number) => void;
}

export const useStore = create<State>()((set) => ({
  counter: 0,
  setCounter: (number) => set((state) => ({ counter: state.counter + number }))
}));
