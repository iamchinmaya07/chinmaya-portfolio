import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  return (
    // <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-[#1e1e1e]/70 text-gray-900 dark:text-white font-sans">
    <div className="min-h-screen transition-colors duration-300">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;