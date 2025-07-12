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
  const { containerRef, bgStyle, getLinkProps } = useMagicHover<HTMLDivElement>(
    { widthFactor: 0.75 }
  );

  return (
    <div ref={containerRef} className="relative">
      <div className="hidden md:block" style={bgStyle} />
      {projects.map((proj, idx) => (
        <div
          key={proj.name}
          className="text-sm md:text-base gap-2 grid grid-cols-3 w-full mb-4 relative z-10 text-left"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={proj.href}
            className="text-base md:text-lg font-bold relative px-2 py-1 rounded-md transition-colors duration-200 text-left w-full"
            {...getLinkProps(idx)}
          >
            {proj.name}
          </a>
          <h3 className="text-left w-full">{proj.desc}</h3>
          <span className="w-full" />
        </div>
      ))}
    </div>
  );
};

export default Projects;
