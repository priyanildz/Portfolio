import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Wrench, Cpu } from 'lucide-react';

const skillData = [
  { category: "Languages", icon: <Code2 />, items: ["Python", "C++", "JavaScript"] },
  { category: "Frameworks", icon: <Layers />, items: ["React", "Flutter", "Django"] },
  { category: "Tools", icon: <Wrench />, items: ["Git", "Docker", "VS Code"] },
  { category: "Other", icon: <Cpu />, items: ["Machine Learning", "APIs"] }
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 max-w-6xl mx-auto py-20">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">Skills</h2>
        <div className="h-[1px] flex-grow bg-white/10"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillData.map((group, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-[#111]/50 backdrop-blur-sm border border-white/5 rounded-3xl hover:border-cyan-400/20 transition-all group"
          >
            <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              {React.cloneElement(group.icon, { size: 32 })}
            </div>
            <h3 className="text-white font-bold text-lg mb-6">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-white/5 text-gray-400 text-[10px] rounded-full border border-white/5 uppercase tracking-wider font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills; // Make sure this line exists!