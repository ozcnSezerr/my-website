import React from "react";
import data from "../data.json";
import { useLanguage } from "../context/LanguageContext";

const FooterSection = () => {
  const { languageData } = useLanguage();
  const emailLink = `mailto:${languageData.footer.email}`;

  return (
    <div
      className="
        flex pt-30 pb-40 gap-x-82 justify-center
        flex-col md:flex-row md:gap-x-82 gap-y-10 md:gap-y-0 items-center md:items-start dark:bg-[#141414]
      "
    >
      {/* Left Section */}
      <div className=" max-w-lg w-full flex flex-col gap-y-20 text-center md:text-left items-center md:items-start">
        <p className="font-semibold text-5xl whitespace-pre-line md:text-5xl dark:text-[#AEBCCF]">
          {languageData.footer.title}
        </p>

        <p className="text-[#AF0C48] font-medium text-xl md:text-xl dark:text-pink-400">
          <span>👉</span>
          <a
            href={emailLink}
            className="underline break-all dark:text-[#BAB2E7]"
          >
            {languageData.footer.email}
          </a>
        </p>
      </div>

      {/* Right Links */}
      <div className="flex gap-x-8 mt-6 md:mt-0 self-center md:self-end">
        <a className="font-medium text-gray-700 dark:text-gray-300" href="">
          {languageData.footer.links[0].text}
        </a>
        <a className="font-medium text-[#17D18B] dark:text-green-500" href="">
          {languageData.footer.links[1].text}
        </a>
        <a className="font-medium text-[#0BA6F6] dark:text-blue-500" href="">
          {languageData.footer.links[2].text}
        </a>
      </div>
    </div>
  );
};

export default FooterSection;
