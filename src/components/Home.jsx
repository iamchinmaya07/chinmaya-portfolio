import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Stars, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

// 1. CHANGE PHOTO: Import your image here. 
// Place your photo in src/assets/heroImg.jpg
import heroImg from "../assets/homeImg.jpg"; 

export default function Home() {
  // We use the 'dark' class on <html> to determine theme
  const isDark = document.documentElement.classList.contains("dark");

  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "MongoDB",
    "Express", "TailwindCSS", "AI Agents", "Python", "C++", "Next.js"
  ];

  return (
    <section id="home" className="relative flex justify-center items-center w-full overflow-hidden px-4 py-16 min-h-screen transition-colors duration-500 bg-white dark:bg-[#1e1e1e]">
      
      {/* === 🎨 3D CANVAS BACKGROUND === */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <Suspense fallback={null}>
            <Float speed={2} rotationIntensity={3} floatIntensity={2}>
              <mesh>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshStandardMaterial
                  color={isDark ? "#A5B4FC" : "#6366F1"}
                  emissive={isDark ? "#818CF8" : "#A5B4FC"}
                  metalness={0.9}
                  roughness={0.05}
                />
              </mesh>
            </Float>
            <Stars radius={80} depth={50} count={4000} factor={4} fade speed={1} />
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-purple-400 rounded-full filter blur-3xl opacity-20"></div>

      {/* === CONTENT AREA === */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full max-w-7xl mx-auto gap-12 z-10">
        
        {/* === LEFT CONTENT === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center lg:text-left px-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-gray-800 dark:text-gray-100">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Chinmaya Sahoo
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-xl mx-auto lg:mx-0 text-gray-600 dark:text-gray-300">
            Full Stack Developer | AI Enthusiast | MERN Specialist
          </p>

          {/* === CTA BUTTONS === */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf" // 2. CHANGE RESUME: Put resume.pdf in your 'public' folder
              download
              className="border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Download Resume
            </motion.a>
          </div>

          {/* === SOCIAL LINKS === */}
          <div className="flex justify-center lg:justify-start space-x-6 text-2xl sm:text-3xl text-gray-700 dark:text-gray-300">
            {/* 3. CHANGE LINKS: Replace the hrefs below */}
            <a href="https://github.com/iamchinmaya07" target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/chinmaya9090/" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

          {/* === RIGHT IMAGE === */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}

            whileHover={{ 
              scale: 1.08,     
              y: -10,         
              rotate: 1       
            }}
            

            className="relative w-77 md:w-96 aspect-square rounded-3xl shadow-2xl overflow-hidden  dark:border-gray-800 cursor-pointer">

            <img
              src={heroImg}
              alt="Chinmaya"
              className="w-full h-full object-cover"
            />
          </motion.div>
      </div>

      {/* === SKILLS MARQUEE === */}
      <div className="absolute bottom-0 w-full overflow-hidden py-4 backdrop-blur-md">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <span key={i} className="mx-6 text-lg font-bold text-gray-800 dark:text-gray-200 tracking-widest">
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}