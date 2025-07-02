const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-32"
    >
      {/* Animate name */}
      <h1
        className="text-4xl md:text-6xl font-bold text-brand-purple mb-4"
        data-aos="fade-up"
      >
        Noah Ragan
      </h1>

      {/* Animate title */}
      <h2
        className="text-xl md:text-2xl text-brand-teal mb-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Full Stack Software Engineer
      </h2>

      {/* Animate tagline */}
      <p
        className="max-w-xl text-gray-300 text-md md:text-lg mb-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        I specialize in building scalable, maintainable web applications using modern frontend and backend technologies.
      </p>

      {/* CTA buttons */}
      <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="300">
        <a
          href="#projects"
          className="bg-brand-purple hover:bg-brand-teal text-white px-6 py-2 rounded-md transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-brand-teal hover:bg-brand-teal text-white px-6 py-2 rounded-md transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
