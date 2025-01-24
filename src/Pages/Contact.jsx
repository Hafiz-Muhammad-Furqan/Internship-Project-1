import { useState } from "react";
import { Element } from "react-scroll";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Element name="contact">
      <div className="w-full min-h-[100dvh] py-8 bg-gray-50">
        <div className="max-w-[1000px] mx-auto p-6 bg-white rounded-lg shadow-lg ">
          <h1 className="text-3xl font-bold text-center text-black mb-6 lg:text-5xl">
            Contact Us
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-black"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-500 rounded-lg "
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-black"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-500 rounded-lg "
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-lg font-semibold text-black"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-500 rounded-lg "
                placeholder="Subject"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-black"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-500 rounded-lg "
                placeholder="Your Message"
                rows="5"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1C6F33] text-white py-3 rounded-lg hover:bg-green-700 "
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Contact Information
            </h2>
            <p className="text-lg text-gray-600">Email: contact@example.com</p>
            <p className="text-lg text-gray-600">Phone: (123) 456-7890</p>
            <p className="text-lg text-gray-600">
              Address: 123 Street, City, Country
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              Our Location
            </h2>
            <div className="w-full h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.265015569844!2d67.05218461494452!3d24.860734448348524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ebc9f1266168d71%3A0x9047bb084f728c93!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2sin!4v1616496795299!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
