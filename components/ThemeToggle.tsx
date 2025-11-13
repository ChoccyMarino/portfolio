"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-sm font-semibold text-zinc-900 transition-colors hover:border-zinc-900 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-400"
      onClick={toggleTheme}
      disabled={!resolvedTheme}
    >
      <span className="text-lg" aria-hidden="true">
        {resolvedTheme ? (isDark ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>) : "…"}
      </span>
    </button>
  );
}
