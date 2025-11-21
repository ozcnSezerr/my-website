import React from "react";
import data from "../data.json";
import ToggleMode from "./ToggleMode";
import ToggleLanguage from "./ToggleLanguage";
import { useLanguage } from "../context/LanguageContext";

function HeaderSection() {
  const { languageData } = useLanguage();
  return (
    <section className="pb-29">
      {/* toggle section */}
      <div className="flex p-8 justify-end gap-5 pr-42">
        <ToggleMode />
        <div className="w-0.5 h-6 bg-gray-400 "></div>
        <ToggleLanguage />
      </div>

      <div className="flex justify-between pr-52 pl-48 pb-6">
        <div
          className="
          rotate-18
  w-14 h-14 
  rounded-full 
  bg-[#EEEBFF] 
  dark:bg-[#4731D3]
  text-[#7B61FF] 
  dark:text-[#8F88FF]
  grid 
  place-items-center 
  text-xl 
  font-bold 
  select-none
"
        >
          S
        </div>

        {/* nav section  */}
        <nav className="flex gap-x-16">
          <a
            className="self-center  text-lg font-medium text-gray-500 flex items-center rounded-sm"
            href="#skills"
          >
            {languageData.heroSection.navigation[0].title}
          </a>

          <a
            className="self-center text-lg font-medium text-gray-500 flex items-center rounded-sm"
            href=""
          >
            {languageData.heroSection.navigation[1].title}
          </a>

          <a
            className="w-32 h-12 self-center text-lg font-medium text-[#3730A3] dark:bg-[#d3d3fc] border border-[#3730A3] flex items-center justify-center rounded-sm"
            href=""
          >
            {languageData.heroSection.navigation[2].title}
          </a>
        </nav>
      </div>

      {/* hero section */}
      <div className="flex justify-center mt-14 gap-16">
        <div className="w-147 flex flex-col gap-9">
          {/* explaining part */}
          <div className="flex gap-2 text-theme dark:text-[#B7AAFF]">
            <hr className="w-25 self-center " />
            <p className="text-lg font-medium">
              {languageData.heroSection.author}
            </p>
          </div>
          <h1 className="whitespace-pre-line font-bold text-7xl/18 dark:text-[#AEBCCF]">
            {languageData.heroSection.intro}
          </h1>
          <p className="whitespace-pre-line  font-normal text-gray-500 dark:text-[#FFFFFF] ">
            {languageData.heroSection.text}
          </p>

          {/* social media buttons */}
          <div className="flex gap-2.5">
            <a
              className="bg-theme dark:bg-[#d3d3fc] items-center text-white dark:text-gray-900 font-medium text-xl px-7 py-3 rounded-md"
              href=""
            >
              {languageData.heroSection.socials[2].text}
            </a>
            <a
              className="flex border dark:bg-[#383838] items-center gap-2 border-theme dark:border-[#B7AAFF] px-4 rounded-md"
              href=""
            >
              <img
                className="w-6"
                src={`./images-1/${languageData.heroSection.socials[0].logo}`}
                alt=""
              />
              <p className="text-theme font-medium text-xl dark:text-[#B7AAFF]">
                {languageData.heroSection.socials[0].text}
              </p>
            </a>
            <a
              className="flex border items-center dark:bg-[#383838] gap-2 border-theme dark:border-[#B7AAFF] px-4 rounded-md"
              href=""
            >
              <img
                className="w-6"
                src={`./images-1/${languageData.heroSection.socials[1].logo}`}
                alt=""
              />
              <p className="text-theme font-medium text-xl dark:text-[#B7AAFF]">
                {languageData.heroSection.socials[1].text}{" "}
              </p>
            </a>
          </div>
        </div>

        {/* profile image */}
        <img
          className="
            mt-2
            self-center
            h-90
            w-120
            rounded-2xl
            hidden md:block
            dark:brightness-75
            "
          src={`./images-1/${languageData.heroSection.profileImage}`}
          alt="profile photo"
        />
      </div>
    </section>
  );
}

export default HeaderSection;
