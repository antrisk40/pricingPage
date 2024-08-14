import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 bg-gray-300 dark:bg-gray-600 rounded fixed bottom-4 left-4 z-50"
    >
      {darkMode ? (
        <FaMoon className="text-xl text-gray-900 dark:text-white" />
      ) : (
        <FaSun className="text-xl text-gray-900 dark:text-white" />
      )}
    </button>
  );
}

export default ThemeToggle;
