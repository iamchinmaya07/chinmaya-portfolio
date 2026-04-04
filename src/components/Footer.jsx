import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-blue-900 to-black text-white transition-colors">
      <motion.div
        className="max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0 md:gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Branding */}
        <motion.div
          className="flex flex-col space-y-4 w-full md:w-1/4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-white">Chinmaya Sahoo</h3>
          <p className="text-gray-400 text-sm">
            Full Stack Developer | JavaScript | React| Node.js | MongoDB | Express.js | Next.js 
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          className="flex flex-col space-y-4 w-full md:w-1/4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="text-xl font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="flex flex-col space-y-4 w-full md:w-1/4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h4 className="text-xl font-semibold text-white">Contact</h4>
            <a
              href="mailto:cs172668@gmail.com"
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <FaEnvelope className="text-blue-500 mr-3" />
              <span>cs172668@gmail.com</span>
            </a>
            <div className="flex items-center text-gray-400 hover:text-white transition-colors">
              <FaPhoneAlt className="text-blue-400 mr-3" />
              <span>+91 63711 XXXXX</span>
            </div>
        </motion.div>

        {/* Socials */}
        <motion.div
          className="flex flex-col space-y-4 w-full md:w-1/4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h4 className="text-xl font-semibold text-white">Connect</h4>
          <div className="flex space-x-4 text-gray-400 text-2xl">
            <a
              href="https://github.com/iamchinmaya07"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-transform transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/chinmaya9090/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-6 text-center text-gray-500 text-sm">
        &copy; {currentYear} Chinmaya Sahoo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;