import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Code2 } from "lucide-react";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    /* ADDED id="hero" here so the Navbar Home button works */
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Profile Photo Wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-40 h-40 mb-8"
      >
        <div className="absolute inset-0 bg-cyan-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
        <img
          src={heroImg}
          alt="Nidhi"
          className="relative w-full h-full rounded-full object-cover border-2 border-cyan-400/50 p-1"
        />
      </motion.div>

      <motion.h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter">
        Nidhi Sun<span className="text-cyan-400">il Pandey</span>
      </motion.h1>

      <motion.p className="mt-6 text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed">
        MSc AI Student & Developer. 
        I build intelligent automation agents and interactive web experiences. 
        Currently exploring the intersection of React, Angular and Artificial Intelligence.
      </motion.p>

      {/* Social Links */}
      <motion.div
        className="flex gap-8 mt-12 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {[
          { Icon: Github, href: "https://github.com/priyanildz" },
          { Icon: Linkedin, href: "https://www.linkedin.com/in/nidhi-pandey-96a9ba255/" },
          { Icon: Code2, href: "https://leetcode.com/u/drdz/" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(0,245,255,0.8)] cursor-pointer"
          >
            <item.Icon size={32} strokeWidth={1.5} />
          </a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10"
      >
        <a
          href="/resume.pdf"
          download="Nidhi_Resume.pdf"
          /* Added cursor-pointer */
          className="px-8 py-4 bg-transparent border border-cyan-400 text-cyan-400 font-bold rounded-full hover:bg-cyan-400/10 transition-all duration-300 cursor-pointer inline-block"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;