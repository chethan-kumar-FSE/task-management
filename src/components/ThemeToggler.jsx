import { useEffect, useState } from "react";

export const ThemeToggler = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const label = darkMode ? "Toggle light mode" : "Toggle dark mode";

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      aria-label={label}
      aria-pressed={darkMode}
      className="px-3 py-2 rounded-lg text-sm 
                 bg-gray-100 dark:bg-gray-700 
                 text-gray-600 dark:text-gray-300 
                 hover:bg-gray-200 dark:hover:bg-gray-600 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 transition"
    >
      <span className="sr-only">{label}</span>

      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};
