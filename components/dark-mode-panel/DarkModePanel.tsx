import { FC, useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export const DarkModePanel: FC = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isDarkMode =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (isDarkMode) {
      setEnabled(true);
      document.documentElement.classList.add("dark");
      return;
    }
    setEnabled(false);
    document.documentElement.classList.remove("dark");
  }, [enabled]);

  const toggleSwitchHandler = (checked: boolean) => {
    setEnabled(checked);
    if (checked) return (localStorage.theme = "dark");
    localStorage.theme = "light";
  };
  return (
    <Switch
      checked={enabled}
      onChange={toggleSwitchHandler}
      className={`${
        enabled ? "bg-primary" : "bg-gray-200"
      } relative inline-flex h-6 w-11 items-center self-end rounded-full`}>
      <span className="sr-only">Enable notifications</span>
      <div
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full  transition`}>
        {enabled ? <MoonIcon className="h-4 w-4" /> : <SunIcon className="h-4 w-4" />}
      </div>
    </Switch>
  );
};
