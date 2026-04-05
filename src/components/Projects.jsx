import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';


const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A modern, fully responsive portfolio built with React, styled using TailwindCSS, and enhanced by immersive Framer Motion animations to deliver a smooth, visually engaging user experience.',
    image: '/chinmaya-portfolio.png',
    github: 'https://github.com/iamchinmaya07/chinmaya-portfolio',
    live: 'https://chinmaya-sahoo.vercel.app/',
    tech: ['React' , 'Tailwindcss', 'Framer Motion' ]
  },
  {
    id: 2,
    title: 'Swiggyfy',
    description: 'Swiggy clone integrating real-time APIs for restaurant listings, menus, and cart functionality with a responsive user interface.',
    image: '/swiggyfy-project.png',
    github: 'https://github.com/iamchinmaya07/Swiggy',
    live: 'https://swiggyfy.netlify.app/',
    tech: ['React', 'Tailwindcss', 'Swiggy-API']
  },
  {
    id: 3,
    title: 'DSA-Visualizer',
    description: 'Interactive DSA Visualizer to help users understand data structures and algorithms through dynamic, step-by-step animations',
    image: '/AlgoLens-project.png',
    github: 'https://github.com/iamchinmaya07/DSA-Visualizer',
    live: 'https://dsavisuals.netlify.app/',
    tech: ['React', 'Tailwindcss', 'Motion', 'Typescript', 'lucide-react']
  },
  { 
    id: 4,
    title: 'Leet Metricx',
    description: 'A sleek dashboard to visualize LeetCode progress using interactive statistics and dynamic data representations.',
    image: '/LeetMetricx-project.png',
    github: 'https://github.com/iamchinmaya07/LeetMetricx',
    live: 'https://leetmetricx.netlify.app/',
    tech: ['JavaScript', 'LeetCode-API', 'HTML/CSS']
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full px-6 py-16 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] text-gray-800 dark:from-[#0f0f0f] dark:to-[#1f1f1f] dark:text-gray-100 transition-colors duration-500"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-6xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My <span className="text-blue-500 dark:text-blue-400">Projects</span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group bg-white dark:bg-[#111111] rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 flex flex-col border border-gray-100 dark:border-gray-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image Wrapper */}
            <div className="relative w-full h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                {/* <span className="text-white text-xs font-medium">View Details</span> */}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow line-clamp-3">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-blue-100 dark:border-blue-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-800">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <FaGithub size={18} /> Code
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    <FaExternalLinkAlt size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;