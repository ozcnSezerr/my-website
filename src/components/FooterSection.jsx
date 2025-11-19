import React from "react";
import data from "../data.json";

const FooterSection = () => {
  const emailLink = `mailto:${data.en.footer.email}`;

  return (
    <div
      className="
  flex bg-[#F9F9F9] pt-30 pb-40 gap-x-82 justify-center
  flex-col md:flex-row md:gap-x-82 gap-y-10 md:gap-y-0 items-center md:items-start
"
    >
      <div className="flex flex-col gap-y-20 text-center md:text-left items-center md:items-start">
        <p className="font-semibold text-5xl whitespace-pre-line md:text-5xl">
          {data.en.footer.title}
        </p>

        <p className="text-[#AF0C48] font-medium text-xl md:text-xl">
          <span>👉</span>
          <a href={emailLink} className="underline break-all">
            {data.en.footer.email}
          </a>
        </p>
      </div>

      <div className="flex gap-x-8 mt-6 md:mt-0 self-center md:self-end">
        <a className="font-medium" href="">
          {data.en.footer.links[0].text}
        </a>
        <a className="text-[#00AB6B] font-medium" href="">
          {data.en.footer.links[1].text}
        </a>
        <a className="text-[#0077B5] font-medium" href="">
          {data.en.footer.links[2].text}
        </a>
      </div>
    </div>
  );
};

export default FooterSection;
