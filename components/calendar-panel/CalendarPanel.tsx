"use client";
import { FC, useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useStore } from "@/store/store";

interface Props {
  selectedDate: { dayName: string; date: string };
}

export const CalendarPanel: FC<Props> = ({ selectedDate }) => {
  const { setCounter } = useStore((state) => state);

  return (
    <div className="flex items-center justify-center">
      <ChevronLeftIcon
        className="color h-10 w-10 cursor-pointer text-slate-500"
        onClick={() => setCounter(-1)}
      />
      <div className="flex w-56 flex-col gap-2">
        <h1 className="text-center text-4xl">{selectedDate.dayName}</h1>
        <h1 className="text-center text-xl text-slate-500">{selectedDate.date}</h1>
      </div>
      <ChevronRightIcon
        className="color h-10 w-10 cursor-pointer text-slate-500"
        onClick={() => setCounter(+1)}
      />
    </div>
  );
};
