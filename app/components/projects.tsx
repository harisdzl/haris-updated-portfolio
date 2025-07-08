"use client";
import React from "react";
import { useMagicHover } from "./useMagicHover";

const projects = [
  {
    name: "Sprout",
    href: "https://github.com/harisdzl/sprout",
    desc: "Blockchain based job marketplace",
  },
  {
    name: "Go Crud",
    href: "https://github.com/harisdzl/go-crud-app",
    desc: "Go CRUD Backend ",
  },
  {
    name: "Akerue",
    href: "https://github.com/LanguagePersona",
    desc: "Korean Language Learning App",
  },
];

const Projects = () => {
  const { containerRef, bgStyle, getLinkProps } = useMagicHover<HTMLDivElement>({ widthFactor: 0.5 });

  return (
    <div ref={containerRef} className="relative">
      <div style={bgStyle} />
      {projects.map((proj, idx) => (
        <div
          key={proj.name}
          className="grid grid-cols-1 md:grid-cols-3 w-full mb-4 relative z-10 justify-items-center items-center"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={proj.href}
            className="text-lg font-bold relative px-2 py-1 rounded-md transition-colors duration-200 text-center md:text-left w-full"
            {...getLinkProps(idx)}
          >
            {proj.name}
          </a>
          <h3 className="text-center md:text-left w-full">{proj.desc}</h3>
        </div>
      ))}
    </div>
  );
};

export default Projects;
