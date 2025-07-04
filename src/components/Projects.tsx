import { motion } from "framer-motion";

// Sample project list
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

const Projects = () => (
  <motion.section
    id="projects"
    className="py-8 px-3 sm:px-6 md:px-8 my-8"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="max-w-6xl mx-auto bg-[#181032]/80 rounded-2xl border border-brand-purple shadow-lg pt-8 pb-8 px-4 sm:px-8 text-center">
      <div className="inline-block mb-4 relative">
        <h2 className="text-3xl font-bold text-brand-purple z-10 relative underline decoration-brand-teal underline-offset-4 mb-2">
          Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="bg-[#211442]/80 rounded-lg shadow-md p-6 pb-8 text-left border border-brand-teal hover:border-brand-purple transition flex flex-col h-full"
            whileHover={{ scale: 1.03, boxShadow: "0 0 24px #00ffe0aa" }}
          >
            <h3 className="text-xl font-semibold text-brand-teal mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-gradient-to-r from-brand-teal to-brand-purple text-white px-2 py-1 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-teal text-white px-3 py-1 rounded-md text-sm font-semibold shadow hover:bg-brand-purple transition"
                >
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-purple text-white px-3 py-1 rounded-md text-sm font-semibold shadow hover:bg-brand-teal transition"
                >
                  GitHub Repo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Projects;
