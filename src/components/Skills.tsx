import skills from "../data/skills"; // Import skills data

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-brand-purple mb-6">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
        {skills.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl text-brand-teal font-semibold mb-2">{category.title}</h3>
            <ul className="list-disc list-inside text-gray-300">
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
