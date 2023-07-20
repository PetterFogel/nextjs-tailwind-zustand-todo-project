"use client";
import { FC, useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface Props {
  selectedDate: { dayName: string; date: string };
  onDecreaseDateClick: () => void;
  onIncreaseDateClick: () => void;
}

export const CalendarPanel: FC<Props> = ({
  selectedDate,
  onDecreaseDateClick,
  onIncreaseDateClick
}) => {
  return (
    <div className="flex items-center justify-center">
      <ChevronLeftIcon
        className="color h-10 w-10 cursor-pointer text-slate-500"
        onClick={onDecreaseDateClick}
      />
      <div className="flex w-56 flex-col gap-2">
        <h1 className="text-center text-4xl">{selectedDate.dayName}</h1>
        <h1 className="text-center text-xl text-slate-500">{selectedDate.date}</h1>
      </div>
      <ChevronRightIcon
        className="color h-10 w-10 cursor-pointer text-slate-500"
        onClick={onIncreaseDateClick}
      />
    </div>
  );
};
