import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="grid grid-cols-2 mb-4">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/harisdzl/sprout"
          className="text-lg font-bold"
        >
          Sprout
        </a>
        <h3>Blockchain based job marketplace</h3>
      </div>
      <div className="grid grid-cols-2 mb-4">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/harisdzl/go-crud-app"
          className="text-lg font-bold"
        >
          Go Crud
        </a>
        <h3>Go CRUD Backend </h3>
      </div>
      <div className="grid grid-cols-2 mb-4">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/LanguagePersona"
          className="text-lg font-bold"
        >
          Akerue
        </a>
        <h3>Korean Language Learning App</h3>
      </div>
    </div>
  );
};

export default Projects;
