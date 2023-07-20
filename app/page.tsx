import { CalendarPanel } from "@/components/calendar-panel/CalendarPanel";
import { DarkModePanel } from "@/components/dark-mode-panel/DarkModePanel";
import { TodoContainer } from "@/components/todo-container/TodoContainer";

export default function Home() {
  return (
    <main className="m-auto flex max-w-5xl flex-col gap-4 p-4">
      <DarkModePanel />
      <TodoContainer />
    </main>
  );
}
