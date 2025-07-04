import { motion } from "framer-motion";

const About = () => (
  <motion.section
    id="about"
    className="py-8 px-3 sm:px-6 md:px-8 my-8"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="max-w-4xl mx-auto bg-[#181032]/80 rounded-2xl border border-brand-purple shadow-lg pt-8 pb-8 px-4 sm:px-8 text-center">
      <div className="inline-block mb-4 relative">
        <h2 className="text-3xl font-bold text-brand-purple z-10 relative underline decoration-brand-teal underline-offset-4 mb-2">
          About Me
        </h2>
      </div>
      <p className="text-gray-300 text-md md:text-lg leading-relaxed mb-4">
        I'm Noah Ragan, a full stack software engineer with hands-on experience
        building modern web applications using technologies like React, TypeScript,
        Flask, and SQL. I’ve completed a comprehensive full-stack bootcamp at
        Coding Temple, where I built real-world projects and developed skills in
        REST APIs, authentication, CI/CD, testing, and responsive design.
      </p>
      <p className="text-gray-400 text-sm">
        I’m passionate about crafting scalable applications, clean code, and learning
        new technologies to solve real-world problems.
      </p>
    </div>
  </motion.section>
);

export default About;
