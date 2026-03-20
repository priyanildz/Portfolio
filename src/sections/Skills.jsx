import React from "react";
import { motion } from "framer-motion";
import {
  SiPython, SiJavascript, SiCplusplus, SiHtml5, 
  SiFlask, SiReact, SiMongodb, SiPostgresql, SiAngular, 
  SiFlutter, SiVercel, SiGit, SiGooglecolab, SiJupyter,SiUipath, SiOpenai, SiPandas, SiScikitlearn, SiCss
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const allSkills = [
  // Languages & Frameworks
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
  { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <SiCss />, color: "#1572B6" },
  { name: "Flask", icon: <SiFlask />, color: "#FFFFFF" },
  { name: "ReactJS", icon: <SiReact />, color: "#61DAFB" },
  { name: "Angular", icon: <SiAngular />, color: "#DD0031" },
  { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
  
  // AI/ML & Data
  { name: "Machine Learning", icon: <SiScikitlearn />, color: "#F7931E" },
//   { name: "Data Science", icon: <SiPandas />, color: "#150458" },
  { name: "NLP / AI", icon: <SiOpenai />, color: "#412991" },
  { name: "Sentiment Analysis", icon: <SiOpenai />, color: "#10a37f" },
  
  // Web & Database
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "SQL / PLSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "Vercel", icon: <SiVercel />, color: "#FFFFFF" },
  
  // Tools
  { name: "VS Code", icon: <VscCode />, color: "#007ACC" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "Google Colab", icon: <SiGooglecolab />, color: "#F9AB00" },
  { name: "Jupyter", icon: <SiJupyter />, color: "#F37626" },
  { name: "UiPath", icon: <SiUipath />, color: "#FA4616" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-20 lg:pl-40 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">
          {/* <span className="text-cyan-400 font-mono text-2xl not-italic mr-2">
            01.
          </span> */}
          Skills
        </h2>
        <div className="h-[1px] flex-grow bg-white/10"></div>
      </div>

        {/* Adjusted grid to handle more items: grid-cols-3 for mobile, up to 6 for desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {allSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.03 }}
              className="relative group flex flex-col items-center justify-center p-6 bg-[#0f0f0f] border border-white/5 rounded-2xl hover:border-cyan-400/30 transition-all duration-300"
            >
              {/* Subtle Brand Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl blur-lg"
                style={{ backgroundColor: skill.color }}
              ></div>

              <div className="text-3xl mb-3 text-gray-500 group-hover:text-white transition-colors duration-300">
                {skill.icon}
              </div>

              <span className="text-[9px] font-mono text-center uppercase tracking-tighter text-gray-500 group-hover:text-cyan-400 transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;