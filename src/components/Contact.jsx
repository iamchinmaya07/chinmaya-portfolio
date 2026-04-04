import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import emailjs from "@emailjs/browser";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const Contact = () => {
  const [isClient, setIsClient] = useState(false);
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const sendEmail = (e) => {
    e.preventDefault();

    // Debugging logs
    console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);

    setLoading(true);

    // FIXED: Match these keys to your input 'name' attributes below
    const templateParams = {
      from_name: form.current.name.value,   // Changed from user_name to name
      from_email: form.current.email.value, // Changed from user_email to email
      message: form.current.message.value,
      to_name: "Chinmaya", 
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        templateParams, // Sending the prepared object is safer
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSuccessMessage("Message sent successfully!"); // Using your state
          alert("Thank you. I will get back to you as soon as possible.");
          form.current.reset(); 
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          setSuccessMessage("Failed to send message.");
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full px-4 py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-6xl font-bold inline-block"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-500 bg-clip-text text-transparent">
            Let's Connect!
          </span>
        </motion.h2>
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium mt-2">
          Have a project or just want to say hello? Reach out!
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Contact Info */}
        <motion.div
          className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 flex flex-col justify-between space-y-10 border border-gray-100 dark:border-gray-700 transition-colors duration-300"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              Chinmaya Sahoo
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-base">
              Full Stack Developer | MERN | AI Enthusiast
            </p>
          </div>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <div className="flex items-center group">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <FaEnvelope size={18} />
              </div>
              <span>cs172668@gmail.com</span>
            </div>
            <div className="flex items-center group">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <FaPhoneAlt size={18} />
              </div>
              <span>+91 63711 XXXXX</span>
            </div>
          </div>

          <div className="flex space-x-4 pt-4 border-t border-gray-100 dark:border-gray-800">

            <a href="https://github.com/iamchinmaya07" target="_blank" rel="noreferrer">
              <FaGithub className="text-gray-400 hover:text-black dark:hover:text-white text-3xl transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/chinmaya9090/" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-gray-400 hover:text-blue-600 text-3xl transition-colors" />
            </a>
          </div>
        </motion.div>

        {/* Right Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 space-y-6 border border-gray-100 dark:border-gray-700 transition-colors duration-300"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <label className="text-gray-700 dark:text-gray-300 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm rounded-lg text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-700 dark:text-gray-300 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm rounded-lg text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-700 dark:text-gray-300 text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="What's on your mind?"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm rounded-lg text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none transition resize-none"
            />
          </div>

          {successMessage && (
            <p className={`text-center text-sm font-medium ${successMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
              {successMessage}
            </p>
          )}

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white py-3 px-6 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all text-center text-sm md:text-base w-full disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;