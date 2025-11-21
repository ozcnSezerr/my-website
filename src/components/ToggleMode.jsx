import { useDarkMode } from "../context/ThemeContext";

const ToggleMode = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <div
      onClick={toggleDarkMode}
      className="flex items-center gap-3 select-none font-bold text-gray-500 dark:text-gray-300 text-sm uppercase"
    >
      <div
        className={`relative w-[60px] h-[26px] rounded-full transition-colors duration-300 ease-in-out dark:bg-[#3A3A3A] bg-indigo-800
        `}
      >
        <div
          className={`absolute top-[3px] right-1 w-5 h-5 bg-yellow-300 dark:bg-yellow-500 rounded-full shadow-md transform transition-transform duration-300 ease-in-out dark:-translate-x-8 translate-x-0"
          }`}
        ></div>
      </div>
      <span className="w-24">{isDark ? "LIGHT MODE" : "DARK MODE"}</span>
    </div>
  );
};

export default ToggleMode;
