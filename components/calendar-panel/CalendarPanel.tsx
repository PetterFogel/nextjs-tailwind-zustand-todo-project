"use client";
import { FC, useEffect, useState } from "react";

export const CalendarPanel: FC = () => {
  const [currentDate, setCurrentDate] = useState({
    dayName: "",
    date: ""
  });
  useEffect(() => {
    const currentDate = new Date();
    setCurrentDate({
      dayName: currentDate.toLocaleString("en-GB", { weekday: "long" }),
      date: currentDate.toLocaleString("en-GB", { dateStyle: "medium" })
    });
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-center text-4xl">{currentDate.dayName}</h1>
      <h1 className="text-center text-xl text-slate-500">{currentDate.date}</h1>
    </div>
  );
};
