"use client";
import React from "react";
import { useMagicHover } from "./useMagicHover";

const companies = [
  {
    name: "Mito Health",
    href: "https://mitohealth.com/",
    role: "Software Engineer Intern",
    date: "Jul 2024 - Nov 2024",
  },
  {
    name: "Quqo",
    href: "https://www.quqo.com",
    role: "Software Engineer Intern",
    date: "Jan 2024 - Jun 2024",
  },
  {
    name: "Seamoney",
    href: "https://seamoney.com/",
    role: "Retail Finance Intern",
    date: "Jun 2023 - Aug 2023",
  },
  {
    name: "Shopee",
    href: "https://careers.shopee.sg/about",
    role: "Operational Excellence Intern",
    date: "Feb 2023 - Apr 2023",
  },
  {
    name: "Grain",
    href: "https://grain.com.sg/",
    role: "Business Development Intern",
    date: "Apr 2021 - Jul 2021",
  },
];

const Experiences = () => {
  const { containerRef, bgStyle, getLinkProps } = useMagicHover<HTMLDivElement>();

  return (
    <div ref={containerRef} className="relative">
      <div className="hidden md:block" style={bgStyle} />
      {companies.map((exp, idx) => (
        <div
          key={exp.name}
          className="text-sm md:text-base gap-2 grid grid-cols-3 w-full mb-4 relative z-10 text-left"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={exp.href}
            className="text-base md:text-lg font-semibold relative px-2 py-1 rounded-md transition-colors duration-200 text-left w-full"
            {...getLinkProps(idx)}
          >
            {exp.name}
          </a>
          <h3 className="text-left w-full">{exp.role}</h3>
          <span className="text-neutral-600 dark:text-neutral-400 text-left w-full">
            {exp.date}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
