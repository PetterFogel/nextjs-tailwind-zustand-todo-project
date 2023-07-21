import { CalendarPanel } from "@/components/calendar-panel/CalendarPanel";
import { DarkModePanel } from "@/components/dark-mode-panel/DarkModePanel";
import { TodoContainer } from "@/components/todo-container/TodoContainer";

export default function Home() {
  return (
    <main className="m-auto max-w-5xl space-y-4  p-4">
      <DarkModePanel />
      <CalendarPanel />
      <TodoContainer />
    </main>
  );
}
