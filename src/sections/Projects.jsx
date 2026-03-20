import React from "react";
import { motion } from "framer-motion";
import { Folder, ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-20 lg:pl-40 max-w-full">
      <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">
            {/* <span className="text-cyan-400 font-mono text-2xl not-italic mr-2">
            01.
          </span> */}
            Projects
          </h2>
          <div className="h-[1px] flex-grow bg-white/10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <Link to={`/project/${project.id}`} key={index} className="block group">
              <motion.div
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#111]/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 group-hover:border-cyan-400/30 transition-all flex flex-col h-full gap-4 relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-6">
                  <Folder className="text-cyan-400" size={32} />
                  <div className="text-gray-500 group-hover:text-cyan-400 transition-colors">
                    <ArrowRight size={24} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors uppercase tracking-tight leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[9px] font-mono uppercase tracking-widest text-cyan-400/80 bg-cyan-400/5 px-2 py-1 rounded border border-cyan-400/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;