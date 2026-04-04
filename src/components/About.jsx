import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import aboutImage from '../assets/home1.jpeg'; 

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const mainControls = useAnimation();
  const textControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      textControls.start("visible");
      imageControls.start("visible");
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.5
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const skillVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    },
    hover: {
      y: -3,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <section 
      id="about"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0a0a0a] px-8 py-16 md:py-24 transition-colors duration-700 overflow-hidden relative"
    >

      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.8, duration: 1.5 }}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-400 blur-3xl opacity-20 dark:opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-400 blur-3xl opacity-20 dark:opacity-30"></div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={containerVariants}
        className="w-full max-w-7xl mx-auto z-10"
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-12 text-gray-800 dark:text-gray-100 text-center"
          variants={itemVariants}
        >
          About <span className="text-blue-500 dark:text-blue-400">Me</span>
        </motion.h2>

        {/* Container Card */}
        <motion.div
          className="max-w-6xl w-full mx-auto bg-white/80 dark:bg-[#111111]/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-12 flex flex-col lg:flex-row items-center gap-8 md:gap-12 border border-gray-100 dark:border-gray-800/50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          whileHover={{ 
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            borderColor: "rgba(59, 130, 246, 0.3)"
          }}
        >
          {/* Profile Image */}
          <motion.div
            initial="hidden"
            animate={imageControls}
            variants={imageVariants}
            whileHover="hover"
            className="flex justify-center items-center w-full lg:w-auto"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-105"></div>
              <img
                src={aboutImage}
                alt="Chinmaya"
                className="rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
              />
              <motion.div 
                className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-300/50 transition-all duration-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="text-center lg:text-left flex-1"
            initial="hidden"
            animate={textControls}
            variants={containerVariants}
          >
            <motion.h3 
              className="text-2xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100"
              variants={itemVariants}
            >
              Hi, I'm <span className="text-blue-500 dark:text-blue-400">Chinmaya</span> 👋
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed md:leading-loose text-sm md:text-base"
              variants={itemVariants}
            >
              I'm a dedicated <span className="font-medium text-blue-500 dark:text-blue-400">Full-Stack Developer</span> passionate about crafting scalable and efficient web solutions. I specialize in the MERN stack and enjoy solving complex problems through clean and innovative code.
            </motion.p>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed md:leading-loose text-sm md:text-base"
              variants={itemVariants}
            >
              My expertise lies in building responsive front-end interfaces and robust back-end systems. I am constantly exploring new technologies like <span className="font-medium">AI Integration and Blockchain</span> to stay at the forefront of modern software development.
            </motion.p>

            {/* Specialized Areas */}
            <motion.div 
                className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
                variants={containerVariants}
            >
             {[
              { name: "Frontend Development", classes: "bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800" },
              { name: "Backend Development", classes: "bg-green-100/80 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800" },
              { name: "DevOps", classes: "bg-purple-100/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800" },
              { name: "Blockchain", classes: "bg-yellow-100/80 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700/50" }
             ].map((skill, index) => (
              <motion.span 
                key={index}
               className={`${skill.classes} px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 border shadow-sm`}
               variants={skillVariants}
               whileHover="hover"
              >
               {skill.name}
             </motion.span>
             ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;