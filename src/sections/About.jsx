import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React",
    "Python",
    "Angular",
    "MSc AI",
    "NLP",
    "MongoDB",
    "UiPath",
    "Node.js",
    "Javascript",
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-20 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">
          {/* <span className="text-cyan-400 font-mono text-2xl not-italic mr-2">
            01.
          </span> */}
          About Me
        </h2>
        <div className="h-[1px] flex-grow bg-white/10"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="text-gray-400 text-lg leading-relaxed">
          <p>
            A goal-oriented M.Sc. in Artificial Intelligence student with robust
            experience in Python, MongoDB, and Web and APP Development.
          </p>
          <p className="mt-4">
            Dedicated to backend technologies, actively exploring
            Node.js/Express.js, and excelling at building scalable, intelligent
            systems, such as the "IT Samachaar" curation agent. Seeking an
            opportunity to apply expertise in AI-driven backend projects and
            deliver high-signal solutions.
          </p>

          {/* Quick Skill Tags */}
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-cyan-400/5 border border-cyan-400/20 text-cyan-400 rounded-xl text-xs font-mono uppercase tracking-widest hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Creative "Code" Card */}
        <div className="relative group justify-self-center">
          {/* Animated Glow behind the card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          <motion.div
            whileHover={{ rotateY: 10, rotateX: -5 }}
            className="relative bg-[#0d0d0d] p-8 rounded-3xl border border-white/10 text-cyan-400 font-mono text-sm shadow-2xl"
          >
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>

            <p className="text-purple-400">// Current Focus</p>
            <p className="text-white mt-2">
              <span className="text-cyan-400">const</span> status ={" "}
              <span className="text-yellow-200">"Learning & Building"</span>;
            </p>
            <p className="text-white">
              <span className="text-cyan-400">const</span> goals = [
              <span className="text-yellow-200">"ML/DL"</span>,
              <span className="text-yellow-200">"3D Web"</span>
              ];
            </p>
            <p className="text-gray-600 mt-4 italic">
              /* Open for opportunities */
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
