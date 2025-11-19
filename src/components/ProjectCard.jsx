// components/ProjectCard.jsx
import React from "react";

const ProjectCard = ({ title, description, tags, links, image }) => {
  return (
    <div className="flex max-w-120 flex-col bg-white h-full">
      {/* Proje Görseli */}
      <div className="h-48 mb-6 overflow-hidden shadow-sm bg-gray-100 group">
        <img
          src={`../public/images-1/${image}`}
          alt={title}
          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Başlık */}
      <h3 className="text-2xl font-bold text-[#4c40f7] mb-4 font-sans">
        {title}
      </h3>

      {/* Açıklama */}
      <p className="text-gray-500 text-sm mb-6">{description}</p>

      {/* Etiketler */}
      <div className="flex flex-wrap gap-2 mb-8 mt-auto">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-4 py-1 border border-[#4c40f7] text-[#4c40f7] rounded-md text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Linkler */}
      <div className="flex justify-between items-center mt-2">
        <a
          href={links.github.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4c40f7] font-semibold underline underline-offset-4 hover:text-indigo-800"
        >
          {links.github.title}
        </a>
        <a
          href={links.viewSite.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4c40f7] font-semibold underline underline-offset-4 hover:text-indigo-800"
        >
          {links.viewSite.title}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
