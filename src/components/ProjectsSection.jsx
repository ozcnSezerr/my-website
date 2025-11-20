// components/ProjectsSection.jsx
import React from "react";
import ProjectCard from "./ProjectCard";
import data from "../data.json";

const ProjectsSection = () => {
  const projectsData = data.en.projectsSection.projects;
  if (!projectsData) return null;

  return (
    <section className="pb-30">
      <div className="mx-auto sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-5xl font-bold dark:text-[#AEBCCF] text-center mb-12 md:text-left">
          {data.en.projectsSection.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-21 gap-y-12 place-items-center">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              links={project.links}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
