import skills from "../data/skills";
import { motion } from "framer-motion";

const Skills = () => (
  <motion.section
    id="skills"
    className="py-8 px-3 sm:px-6 md:px-8 my-8"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <div className="max-w-6xl mx-auto bg-[#181032]/80 rounded-2xl border border-brand-teal shadow-lg pt-8 pb-8 px-4 sm:px-8 text-center">
      <div className="inline-block mb-4 relative">
        <h2 className="text-3xl font-bold text-brand-purple z-10 relative underline decoration-brand-teal underline-offset-4 mb-2">
          Skills
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((category) => (
          <div
            key={category.title}
            className="text-center md:text-left bg-[#211442]/80 rounded-xl p-6 pb-8 shadow border border-brand-purple"
          >
            <h3 className="text-xl text-brand-teal font-semibold mb-2">
              {category.title}
            </h3>
            <ul className="list-disc list-inside text-gray-300 inline-block md:inline md:list-inside">
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Skills;
