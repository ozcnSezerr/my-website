import React from "react";
import data from "../data.json";
import { useLanguage } from "../context/LanguageContext";

const ProfileSection = () => {
  const { languageData } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto p-6 pb-8 pt-0 font-sans">
      {/* title */}
      <h1 className="text-5xl font-bold text-slate-800 mb-10 dark:text-[#AEBCCF]">
        {languageData.profileSection.title}
      </h1>

      <div className="flex flex-col md:flex-row md:space-x-12 space-y-12 md:space-y-0">
        {/* left personal information section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-[#4338CA] mb-6 dark:text-[#B7AAFF]">
            {languageData.profileSection.title}
          </h2>

          <div className="grid grid-cols-[160px_1fr] gap-y-4">
            {/* label 0 */}
            <div className="font-bold">
              {languageData.profileSection.basicInfo[0].label}
            </div>
            <div>{languageData.profileSection.basicInfo[0].value}</div>
            {/* label 1 */}
            <div className="font-bold">
              {languageData.profileSection.basicInfo[1].label}
            </div>
            <div>{languageData.profileSection.basicInfo[1].value}</div>
            {/* label 2 */}
            <div className="font-bold">
              {languageData.profileSection.basicInfo[2].label}
            </div>
            <div>
              <p className="whitespace-pre-line">
                {languageData.profileSection.basicInfo[2].value}
              </p>
            </div>
            {/* label 3 */}
            <div className="font-bold">
              {languageData.profileSection.basicInfo[3].label}
            </div>
            <div>
              <p>{languageData.profileSection.basicInfo[3].value}</p>
            </div>
          </div>
        </div>

        {/* right about section */}
        <div className="mr-28 md:w-1/2">
          <h2 className="text-3xl font-semibold text-[#4338CA] dark:text-[#B7AAFF] mb-6">
            {languageData.profileSection.aboutMe.title}
          </h2>
          <div className="text-gray-500 dark:text-white space-y-4 leading-relaxed">
            <p className="whitespace-pre-line">
              {languageData.profileSection.aboutMe.paragraphs[0]}
            </p>
            <p>{languageData.profileSection.aboutMe.paragraphs[1]}</p>
          </div>
        </div>
      </div>
      <hr className="text-[#BAB2E7] mt-12" />
    </div>
  );
};

export default ProfileSection;
