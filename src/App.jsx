import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

// Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Resume from "./sections/Resume";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import ProjectDetail from "./sections/ProjectDetail";

// The Home component that gathers all sections for the main page
const Home = () => (
  <div className="flex flex-col"> {/* This stacks them vertically properly */}
    <Hero />
    <About />
    <Skills />
    <Resume />
    <Projects />
    {/* <Certifications /> */}
    <Contact />
  </div>
);

function App() {
  return (
    <Router>
      <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-cyan-400/30 relative">
        {/* Global Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-400/10 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-blob" style={{ animationDelay: "2s" }}></div>
        </div>

        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>

        <ScrollToTop />
        
        <footer className="py-10 text-center text-gray-500 text-sm border-t border-white/5">
          <p>© {new Date().getFullYear()} Nidhi. Built with React & Tailwind.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;