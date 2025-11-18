import React, { useState } from "react";

const ToggleLanguage = () => {
  const [isTurkish, setIsTurkish] = useState(false);

  const toggleLanguage = () => {
    setIsTurkish(!isTurkish);
  };

  return (
    <div
      onClick={toggleLanguage}
      className="w-38 flex cursor-pointer select-none font-bold text-sm uppercase tracking-wide items-center"
    >
      {isTurkish ? (
        <span className="text-gray-500">
          SWITCH TO <span className="text-theme">ENGLISH</span>
        </span>
      ) : (
        <span className="text-gray-500">
          <span className="text-[#3730A3]">TÜRKÇE</span>'YE GEÇ
        </span>
      )}
    </div>
  );
};

export default ToggleLanguage;
