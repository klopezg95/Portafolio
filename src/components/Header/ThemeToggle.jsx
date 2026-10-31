import { useEffect, useState } from "react";

function getInitialTheme() {
  try {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
  } catch {
    // Funciona aunque no se pueda guardar la preferencia.
  }

  return "dark";
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);

    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // El cambio visual funciona aunque no se pueda guardar.
    }
  }, [theme, isDark]);

  const toggleTheme = () => {
    setTheme((previous) => (previous === "dark" ? "light" : "dark"));
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      onClick={toggleTheme}
      className="inline-flex min-h-[44px] items-center gap-3 rounded-full px-1 font-sans focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
    >
      {/* Fondo del interruptor. */}
      <span
        aria-hidden="true"
        className={`relative inline-flex h-8 w-14 shrink-0 items-center rounded-full transition-colors duration-300 motion-reduce:transition-none ${
          isDark ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        {/* Círculo que se desliza. */}
        <span
          className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
            isDark ? "translate-x-6" : "translate-x-0"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`h-4 w-4 ${isDark ? "text-blue-600" : "text-amber-600"}`}
          >
            {isDark ? (
              <path d="M20.9 13.2A9 9 0 0 1 10.8 3.1 9 9 0 1 0 20.9 13.2Z" />
            ) : (
              <>
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </>
            )}
          </svg>
        </span>
      </span>
    </button>
  );
}

export default ThemeToggle;
