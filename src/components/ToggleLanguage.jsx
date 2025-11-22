import React from "react";
import { useLanguage } from "../context/LanguageContext";

const ToggleLanguage = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div
      data-testid="lang-btn"
      onClick={toggleLanguage}
      className="min-w-38 flex cursor-pointer select-none font-bold text-sm uppercase tracking-wide items-center"
    >
      {language === "tr" ? (
        <span className="text-gray-500 dark:text-white">
          SWITCH TO{" "}
          <span className="text-theme dark:text-[#B7AAFF]">ENGLISH</span>
        </span>
      ) : (
        <span className="text-gray-500 dark:text-white">
          <span className="text-[#3730A3] dark:text-[#B7AAFF]">TÜRKÇE</span>'YE
          GEÇ
        </span>
      )}
    </div>
  );
};

export default ToggleLanguage;
