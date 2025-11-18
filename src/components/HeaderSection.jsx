import React from "react";
import data from "../data.json";
import ToggleMode from "./ToggleMode";
import ToggleLanguage from "./ToggleLanguage";
function HeaderSection() {
  return (
    <section className="pb-29">
      {/* toggle section */}
      <div className="flex p-8 justify-end gap-5 pr-42">
        <ToggleMode />
        <div className="w-0.5 h-6 bg-gray-400 "></div>
        <ToggleLanguage />
      </div>

      <div className="flex justify-between pr-52 pl-48">
        <div
          className="
          rotate-18
  w-14 h-14 
  rounded-full 
  bg-[#EEEBFF] 
  text-[#7B61FF] 
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
            className="self-center font-medium text-gray-500 flex items-center rounded-sm"
            href=""
          >
            {data.en.heroSection.navigation.Skills}
          </a>

          <a
            className="self-center font-medium text-gray-500 flex items-center rounded-sm"
            href=""
          >
            {data.en.heroSection.navigation.Projects}
          </a>

          <a
            className="w-32 h-12 self-center font-medium text-[#3730A3] border border-[#3730A3] flex items-center justify-center rounded-sm"
            href=""
          >
            {data.en.heroSection.navigation["Hire me"]}
          </a>
        </nav>
      </div>

      {/* hero section */}
      <div className="flex justify-center mt-14 gap-16">
        <div className="flex flex-col gap-9">
          {/* explaining part */}
          <div className="flex gap-2 text-theme">
            <hr className="w-25 self-center text-theme" />
            <p className="text-lg font-medium">{data.en.heroSection.author}</p>
          </div>
          <h1 className="whitespace-pre-line font-bold text-7xl/18">
            {data.en.heroSection.intro}
          </h1>
          <p className="whitespace-pre-line font-normal text-gray-500 ">
            {data.en.heroSection.text}
          </p>

          {/* social media buttons */}
          <div className="flex gap-2.5">
            <a
              className="bg-theme items-center text-white font-medium text-xl px-7 py-3 rounded-md"
              href=""
            >
              {data.en.heroSection.navigation["Hire me"]}
            </a>
            <a
              className="flex border items-center gap-2 border-theme px-4 rounded-md"
              href=""
            >
              <img
                className="w-6"
                src={`./public/images-1/${data.en.heroSection.socials[0].logo}`}
                alt=""
              />
              <p className="text-theme font-medium text-xl">
                {data.en.heroSection.socials[0].text}
              </p>
            </a>
            <a
              className="flex border items-center gap-2 border-theme px-4 rounded-md"
              href=""
            >
              <img
                className="w-6"
                src={`./public/images-1/${data.en.heroSection.socials[1].logo}`}
                alt=""
              />
              <p className="text-theme font-medium text-xl">
                {data.en.heroSection.socials[1].text}{" "}
              </p>
            </a>
          </div>
        </div>

        {/* profile image */}
        <img
          className="
            mt-2
            self-center
            w-120 h-90
            rounded-2xl
            "
          src={`./public/images-1/${data.en.heroSection.profileImage}`}
          alt="..."
        />
      </div>
    </section>
  );
}

export default HeaderSection;
