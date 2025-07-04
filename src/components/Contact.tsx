import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {
      name: formData.name ? "" : "Name is required",
      email: validateEmail(formData.email) ? "" : "Valid email required",
      message: formData.message ? "" : "Message cannot be empty",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) return;

    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mrbkdgvz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        alert("There was an error. Please try again later.");
      }
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-8 px-3 sm:px-6 md:px-8 my-8"
    >
      <div className="max-w-2xl mx-auto bg-[#181032]/80 rounded-2xl border border-brand-teal shadow-lg pt-8 pb-8 px-4 sm:px-8 text-center">
        <div className="inline-block mb-4 relative">
          <h2 className="text-3xl font-bold text-brand-purple z-10 relative underline decoration-brand-teal underline-offset-4 mb-2">
            Contact
          </h2>
        </div>
        <p className="text-gray-300 mb-6">
          Interested in working together? Send me a message or email me directly at{" "}
          <a
            href="mailto:noah.j.ragan@gmail.com"
            className="text-brand-teal underline"
          >
            noah.j.ragan@gmail.com
          </a>
        </p>
        {submitted && (
          <div className="text-green-400 font-semibold mb-4 animate-fade-in-out transition-opacity duration-700">
            ✅ Message sent successfully. Thanks for reaching out!
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 text-left"
          noValidate
        >
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              onChange={handleChange}
              className="bg-gray-800 text-white p-3 rounded border border-brand-teal w-full focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              onChange={handleChange}
              className="bg-gray-800 text-white p-3 rounded border border-brand-teal w-full focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              placeholder="Your Message"
              rows={5}
              onChange={handleChange}
              className="bg-gray-800 text-white p-3 rounded border border-brand-teal w-full focus:outline-none"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="bg-brand-purple hover:bg-brand-teal text-white py-2 px-6 rounded transition disabled:opacity-50 w-full max-w-xs mx-auto mt-2"
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
