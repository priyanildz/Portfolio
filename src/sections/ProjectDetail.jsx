import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowLeft, ExternalLink, Cpu, ShieldCheck } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div className="text-white p-20">Project not found.</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-[#0a0a0a] py-20 px-6 md:px-20 relative z-[100]"
    >
      <button 
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-cyan-400 hover:text-white transition-colors mb-10 font-mono uppercase tracking-widest text-sm"
      >
        <ArrowLeft size={20} /> Back to Home
      </button>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 italic tracking-tighter uppercase leading-none">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-3 mb-12">
          {project.tags.map(tag => (
            <span key={tag} className="px-4 py-1 bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 rounded-full text-xs font-mono">
              {tag}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-20">
          <div className="space-y-10">
            <div>
              <h3 className="text-white font-bold flex items-center gap-2 mb-4 uppercase tracking-wider">
                <Cpu className="text-cyan-400" size={20} /> Technical Insight
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">{project.insight}</p>
            </div>
            <div>
              <h3 className="text-white font-bold flex items-center gap-2 mb-4 uppercase tracking-wider">
                <ShieldCheck className="text-cyan-400" size={20} /> Challenges Overcome
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">{project.challenges}</p>
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-400 text-black font-black rounded-xl hover:bg-white transition-all"
            >
              View Codebase <ExternalLink size={20} />
            </a>
          </div>

          <div className="bg-[#111] border border-white/5 rounded-3xl p-2 h-[400px] overflow-hidden group">
            <div className="w-full h-full bg-[#0a0a0a] rounded-2xl flex items-center justify-center text-gray-700 font-mono">
              [ Project Visual Preview ]
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;