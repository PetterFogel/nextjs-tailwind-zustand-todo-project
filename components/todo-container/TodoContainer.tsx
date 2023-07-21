"use client";
import { FC, useEffect, useState } from "react";
import { Todo } from "@/types/todo";
import { TodoForm } from "../todo-form/TodoForm";
import { TodoList } from "../todo-list/TodoList";
import { useStore } from "@/store/store";
import { CalendarPanel } from "../calendar-panel/CalendarPanel";

export const TodoContainer: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { counter } = useStore((state) => state);
  const [selectedDate, setSelectedDate] = useState({
    dayName: "",
    date: ""
  });

  const addTodoHandler = (newTodo: Todo) => setTodos((prevState) => [...prevState, newTodo]);
  const deleteTodoHandler = (updatedList: Todo[]) => setTodos(updatedList);
  const todoCheckHandler = (updatedList: Todo[]) => setTodos(updatedList);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const list: Todo[] = JSON.parse(localStorage.getItem("todoList") || "[]");
    setTodos(list);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const date = new Date();
    date.setDate(date.getDate() + counter);
    setSelectedDate({
      dayName: date.toLocaleString("en-GB", { weekday: "long" }),
      date: date.toLocaleString("en-GB", { dateStyle: "medium" })
    });
  }, [counter]);

  const todosByDate = todos.filter((t) => t.createdAt === selectedDate.date);

  return (
    <>
      <CalendarPanel selectedDate={selectedDate} />
      <div className="flex flex-col gap-4 text-sm lg:flex-row">
        <TodoForm onAddTodoClick={addTodoHandler} selectedDate={selectedDate.date} />
        {!todos || todosByDate.length === 0 ? (
          <div className="flex-1 px-4 text-center">
            <h2 className="text-base md:text-lg">Please add some todos for this date!</h2>
          </div>
        ) : (
          <TodoList
            todos={todosByDate}
            onDeleteTodoClick={deleteTodoHandler}
            onCheckTodoClick={todoCheckHandler}
          />
        )}
      </div>
    </>
  );
};
