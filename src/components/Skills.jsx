import React from "react";
import { motion } from "framer-motion";

import { IoLogoNodejs } from 'react-icons/io5';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaJava,
  FaSitemap,
  FaCogs,
  FaServer,
  FaHtml5,
  FaCss3Alt,
  FaAws
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiApachekafka,
  SiCss,
  SiExpress ,
  SiMongodb,
  SiRedis,
} from "react-icons/si";

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen w-full py-16 transition-all duration-500  dark:bg-[#111111] text-gray-800 dark:text-gray-100">

      <motion.div
        className="max-w-7xl mx-auto px-6 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h2
          variants={cardVariants}
          className="text-4xl md:text-5xl font-extrabold mb-4 text-emerald-400 dark:text-indigo-400">
          My <span className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-emerald-400 to-lime-400 dark:from-indigo-400 dark:via-purple-500 dark:to-pink-400">Skills</span>
        </motion.h2>

        <motion.p
          variants={cardVariants}
          className="text-lg text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Full Stack Developer | AI Enthusiast | Learning DSA, Microservices & System Design 🚀
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Frontend */}
          <SkillCard
            title="Frontend"
            skills={[
              { name: "React", icon: <FaReact className="text-sky-400" /> },
              { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
              { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
              { name: "JS", icon: <span className="text-yellow-400 font-bold">JS</span> },
              { name: "HTML", icon: <FaHtml5 className="text-[#E34C26]" />},
              { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" font-bold/>}
            ]}
          />

          {/* Backend */}
          <SkillCard
            title="Backend"
            skills={[
              { name: "Node.js", icon:  <FaNodeJs className="text-[#68A063]" font-bold />},
              { name: "Express.js", icon:  <FaNodeJs className="text-[#83A7DB]" font-bold />},
              { name: "MongoDB", icon:  <SiMongodb  className="text-[#00ED64]" />},
              { name: "Redis", icon:  <SiRedis  className="text-[#dc382d]" />},
              { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
            ]}
          />

          {/* DevOps */}
          <SkillCard
            title="DevOps Basics"
            skills={[
              { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
              { name: "AWS", icon: <FaAws className="text-[#66cc33]" /> },
              { name: "Git/GitHub", icon: <FaGitAlt className="text-rose-400" /> },
            ]}
          />

          {/* DSA */}
          <SkillCard
            title="DSA Problem Solving"
            skills={[
              { name: "Arrays", icon: <span>📚</span> },
              { name: "Logic", icon: <span>🧠</span> },
              { name: "Oops", icon: <span>🧱</span> },
              { name: "Trees/Graphs", icon: <span>🌳</span> },
              { name: "DP", icon: <span>🔄</span> },
            ]}
          />

        </motion.div>
      </motion.div>
    </section>
  );
};

const SkillCard = ({ title, skills }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
        transition: { type: "spring", stiffness: 300 },
      }}
      className="bg-white/50 dark:bg-[#1e1e1e]/50 backdrop-blur-xl rounded-3xl shadow-xl p-8 flex flex-col items-center border border-gray-100 dark:border-gray-800/50 transition-all duration-300"
    >
      <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100">
        {title}
      </h3>

      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center space-y-3"
          >
            <motion.div
              whileHover={{ 
                scale: 1.2, 
                rotate: 10,
              }}
              className="text-4xl"
            >
              {skill.icon}
            </motion.div>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-tighter">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;