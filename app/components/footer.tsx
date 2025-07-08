"use client";
import React from "react";
import { useMagicHover } from "./useMagicHover";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

const footerLinks = [
  {
    href: "https://github.com/harisdzl",
    label: "github",
  },
  {
    href: "https://www.linkedin.com/in/haris-dzulkifli/",
    label: "linkedin",
  },
  {
    href: "mailto:haris@dbasri.com",
    label: "email",
  },
];

export default function Footer() {
  const { containerRef, bgStyle, getLinkProps } = useMagicHover<HTMLUListElement>();

  return (
    <footer className="mb-16">
      <ul
        ref={containerRef}
        className="font-sm mt-8 flex flex-row justify-start text-left -ml-4 space-x-4 text-neutral-600 md:space-x-4 md:space-y-0 dark:text-neutral-300 relative"
      >
        <div style={bgStyle} />
        {footerLinks.map((link, idx) => (
          <li key={link.label}>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100 relative px-2 py-1 rounded-md"
              rel="noopener noreferrer"
              target="_blank"
              href={link.href}
              {...getLinkProps(idx)}
            >
              <ArrowIcon />
              <p className="ml-2 h-7">{link.label}</p>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
