// 🧠 Grouped skill data to render in the Skills section

export interface SkillCategory {
  title: string;
  skills: string[];
}

const skills: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Bootstrap",
      "HTML5",
      "CSS3",
      "React Router",
      "Redux Toolkit",
      "React Query",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "MySQL",
      "Marshmallow",
      "Flask Blueprints",
      "Token-Based Auth",
      "Flask-Limiter",
      "Flask-Caching",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git + GitHub",
      "Postman",
      "Vercel",
      "Render",
      "GitHub Actions (CI/CD)",
      "Prentus",
    ],
  },
  {
    title: "Authentication",
    skills: ["Auth0", "Firebase Auth", "JWT", "Context API"],
  },
  {
    title: "Testing",
    skills: ["Vitest", "Jest", "React Testing Library", "Pytest"],
  },
];

export default skills;
