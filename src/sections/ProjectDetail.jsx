import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import {
  ArrowLeft,
  ExternalLink,
  Cpu,
  ShieldCheck,
  Folder,
} from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project)
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-cyan-400 font-mono uppercase">
        Project Not Found.
      </div>
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#0a0a0a] py-16 px-6 md:px-12 lg:px-24 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* --- FIXED: Back Button Size --- */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-all mb-10 font-mono uppercase tracking-[0.2em] text-xs group"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>Back to Home</span>
        </button>

        <header className="mb-12">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 italic tracking-tighter uppercase leading-none">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-cyan-400/5 text-cyan-400 border border-cyan-400/20 rounded-lg text-[10px] font-mono uppercase tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 items-start mt-12">
          <div className="space-y-12">
            <div>
              <h3 className="text-white font-bold flex items-center gap-3 mb-4 uppercase tracking-wider text-sm">
                <Cpu className="text-cyan-400" size={20} /> Technical Insight
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg border-l border-cyan-400/20 pl-6 italic">
                {project.insight}
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold flex items-center gap-3 mb-4 uppercase tracking-wider text-sm">
                <ShieldCheck className="text-cyan-400" size={20} /> Challenges
                Overcome
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg pl-6">
                {project.challenges}
              </p>
            </div>

            {/* <div className="pt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-400 text-black font-black rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 text-sm uppercase tracking-tighter"
              >
                Explore Codebase <ExternalLink size={18} />
              </a>
            </div> */}
          </div>

          {/* --- UPDATED: Visual Container with better height and alignment --- */}
          {/* <div className="bg-[#111] border border-white/5 rounded-[40px] p-8 aspect-video lg:max-h-[650px] flex flex-col items-center justify-center group overflow-hidden relative self-start">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="flex flex-col items-center gap-4">
              <Folder
                size={56}
                className="text-white/5 group-hover:text-cyan-400/20 transition-all duration-700 group-hover:scale-110"
              />
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-[0.3em] opacity-60">
                Live Demo Coming Soon
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
