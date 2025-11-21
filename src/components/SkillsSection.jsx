import React from "react";
import data from "../data.json";
import { useLanguage } from "../context/LanguageContext";

function SkillsSection() {
  const { languageData } = useLanguage();
  return (
    <section
      className="flex flex-col justify-center items-center pb-8"
      id="skills"
    >
      <div className="flex flex-col w-full max-w-6xl px-4">
        <h2 className="font-bold text-5xl mb-7 text-start dark:text-[#AEBCCF]">
          {languageData.skillsSection.title}
        </h2>
        <div className="flex flex-wrap justify-between pb-10">
          {languageData.skillsSection.skills.map((el, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col gap-y-2"
            >
              <p className="text-indigo-700 font-medium text-3xl dark:text-[#B7AAFF]">
                {el.name}
              </p>
              <p className="text-gray-500 text-sm dark:text-white">{el.text}</p>
            </div>
          ))}
        </div>
        <hr className="text-[#BAB2E7] mx-2" />
      </div>
    </section>
  );
}

export default SkillsSection;
