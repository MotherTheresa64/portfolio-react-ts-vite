import { motion } from "framer-motion";

const skills = [
  "React",
  "TypeScript",
  "Flask",
  "Python",
  "SQL",
  "Firebase",
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-32 bg-gradient-to-br from-[#13002c] via-[#1c063a] to-[#09111c] overflow-hidden"
    >
      {/* Optional: VERY subtle animated overlay */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, #7f1fff15 0%, transparent 60%), radial-gradient(ellipse at 40% 70%, #00ffe015 0%, transparent 60%)",
          mixBlendMode: "lighten",
        }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10">
        {/* Name */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-brand-purple mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Noah Ragan
        </motion.h1>

        {/* Title */}
        <motion.h2
          className="text-xl md:text-2xl text-brand-teal mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          Full Stack Software Developer
        </motion.h2>

        {/* Tech badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-gradient-to-r from-brand-teal to-brand-purple text-white px-4 py-1 rounded-full font-semibold text-sm shadow"
              style={{ opacity: 0.9 }}
            >
              {skill}
            </span>
          ))}
        </motion.div>

        {/* Contact badge */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
        >
          <span className="bg-brand-purple bg-opacity-90 text-white px-4 py-1 rounded-full font-semibold text-sm mr-2">
            Contact:
          </span>
          <a
            href="mailto:noah.j.ragan@gmail.com"
            className="bg-brand-teal text-white px-4 py-1 rounded-full font-semibold text-sm hover:underline"
            style={{ opacity: 0.9 }}
          >
            noah.j.ragan@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
