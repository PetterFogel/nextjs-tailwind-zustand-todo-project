"use client";
import { FC, useEffect } from "react";
import { useStore } from "@/store/store";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export const CalendarPanel: FC = () => {
  const { setCounter, selectedDate, setSelectedDate, counter } = useStore((state) => state);

  useEffect(() => {
    const date = new Date();
    date.setDate(date.getDate() + counter);
    setSelectedDate(date);
  }, [counter, setSelectedDate]);

  return (
    <div className="flex items-center justify-center">
      <ChevronLeftIcon
        className="color h-10 w-10 cursor-pointer text-slate-500"
        onClick={() => setCounter(-1)}
      />
      <div className="flex w-56 flex-col gap-2">
        <h1 className="text-center text-4xl">{selectedDate.day}</h1>
        <h1 className="text-center text-xl text-slate-500">{selectedDate.date}</h1>
      </div>
      <ChevronRightIcon
        className="color h-10 w-10 cursor-pointer text-slate-500"
        onClick={() => setCounter(+1)}
      />
    </div>
  );
};
