import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(true); // Default to dark for a dev portfolio look

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setDark(!dark);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    // Changed bg to be dynamic: white in light mode, dark gray in dark mode
    <nav className="fixed w-full top-0 z-50 transition-colors duration-300 bg-white dark:bg-[#1e1e1e] text-gray-900 dark:text-white border-b border-gray-200 dark:border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold cursor-pointer text-gray-900 dark:text-white"
        >
          Chinmaya
        </motion.h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-8 font-medium">
            {navLinks.map((item, i) => (
              <li key={i} className="relative group">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {item}
                </a>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300" />
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300"
          >
            Contact Me
          </a>

          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {dark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-blue-600" />}
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
          >
            {dark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
          </button>
          <button onClick={toggleMenu} className="text-gray-900 dark:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-64 h-screen bg-white dark:bg-[#1e1e1e] shadow-2xl p-6 flex flex-col z-40"
          >
            <button onClick={toggleMenu} className="self-end mb-8 text-gray-600 dark:text-gray-300">
              <X size={28} />
            </button>

            <div className="flex flex-col space-y-6">
              {navLinks.map((item, i) => (
                <a
                  key={i}
                  href={`#${item.toLowerCase()}`}
                  onClick={toggleMenu}
                  className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600"
                >
                  {item}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={toggleMenu}
              className="mt-auto border border-blue-600 text-blue-600 text-center py-3 rounded-md font-semibold"
            >
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}