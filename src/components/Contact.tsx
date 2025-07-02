const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-6 max-w-2xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold text-brand-purple mb-6">Contact</h2>

      {/* Contact text */}
      <p className="text-gray-300 mb-6">
        Interested in working together? Send me a message or email me directly at{" "}
        <a
          href="mailto:noah.j.ragan@gmail.com"
          className="text-brand-teal underline"
        >
          noah.j.ragan@gmail.com
        </a>
      </p>

      {/* Optional form (can be integrated with EmailJS / Netlify later) */}
      <form className="grid grid-cols-1 gap-4 text-left">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-gray-800 text-white p-3 rounded border border-brand-teal focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="bg-gray-800 text-white p-3 rounded border border-brand-teal focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="bg-gray-800 text-white p-3 rounded border border-brand-teal focus:outline-none"
        />
        <button
          type="submit"
          className="bg-brand-purple hover:bg-brand-teal text-white py-2 px-6 rounded transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
