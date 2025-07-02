import React from "react";

// Sample project list — customize these with real projects later
const projects = [
  {
    title: "E-Commerce App",
    description: "A React + Firebase + TypeScript web store with cart, checkout, and admin features.",
    tech: ["React", "Redux Toolkit", "Firebase", "Tailwind"],
    live: "https://your-deployed-site.com",
    github: "https://github.com/MotherTheresa64/Advanced-Ecommerce-App",
  },
  {
    title: "Task Manager",
    description: "A secure task dashboard using Auth0, React, and TypeScript with full CRUD operations.",
    tech: ["React", "Auth0", "TypeScript"],
    live: "https://your-task-app.vercel.app",
    github: "https://github.com/MotherTheresa64/task-management-app",
  },
  {
    title: "Flask Service API",
    description: "REST API built with Flask, MySQL, Marshmallow, Blueprints, and token authentication.",
    tech: ["Flask", "SQLAlchemy", "JWT", "Pytest"],
    github: "https://github.com/MotherTheresa64/Advanced-API-Final",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-brand-purple mb-6">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-800 rounded-lg shadow-md p-6 text-left border border-brand-purple hover:border-brand-teal transition"
          >
            <h3 className="text-xl font-semibold text-brand-teal mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>

            {/* Tech stack as badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-brand-purple text-white px-2 py-1 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="text-sm text-brand-teal underline hover:text-white"
                >
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="text-sm text-brand-teal underline hover:text-white"
                >
                  GitHub Repo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
