export interface CalendarSlice extends State, Actions {}

export interface State {
  counter: number;
  selectedDate: { day: string; date: string };
}

export interface Actions {
  setCounter: (number: number) => void;
  setSelectedDate: (date: Date) => void;
}
