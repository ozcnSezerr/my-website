import data from "../data.json";
import React, { useState } from "react";

const ToggleMode = () => {
  const [isNight, setIsNight] = useState(false);

  return (
    <div
      onClick={() => setIsNight(!isNight)}
      className="flex items-center gap-3 cursor-pointer select-none font-bold text-gray-500 text-sm uppercase"
    >
      <div
        className={`relative w-[60px] h-[26px] rounded-full transition-colors duration-300 ease-in-out ${
          isNight ? "bg-[#3A3A3A]" : "bg-[#3730A3]"
        }`}
      >
        <div
          className={`absolute top-[3px] left-1 w-5 h-5 bg-[#FFE86E] rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
            isNight ? "translate-x-8" : "translate-x-0"
          }`}
        ></div>
      </div>
      <span className="w-24">{isNight ? "LIGHT MODE" : "DARK MODE"}</span>
    </div>
  );
};

export default ToggleMode;
