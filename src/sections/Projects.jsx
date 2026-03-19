// import React from "react";
// import { motion } from "framer-motion";
// import { ExternalLink, Folder, ArrowRight } from "lucide-react";
// import { projects } from "../data/projects";
// import { Link } from "react-router-dom"; // Add this

// const Projects = () => {
//   return (
//     <section id="projects" className="py-20 px-6 md:px-20 max-w-full">
//       <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-4 italic tracking-tighter">
//         <span className="text-accent text-2xl font-mono not-italic">01.</span> Selected Projects
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mt-10">
//         {projects.map((project, index) => (
//           <Link to={`/project/${project.id}`} key={index} className="block group">
//             <motion.div
//               whileHover={{ y: -10 }}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="bg-[#111] p-8 rounded-3xl border border-white/5 group-hover:border-cyan-400/30 transition-all flex flex-col h-full gap-4 relative overflow-hidden"
//             >
//               <div className="flex justify-between items-start mb-6">
//                 <Folder className="text-accent" size={40} />
//                 <div className="text-gray-500 group-hover:text-cyan-400 transition-colors">
//                   <ArrowRight size={24} />
//                 </div>
//               </div>

//               <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
//                 {project.title}
//               </h3>
//               <p className="text-gray-400 text-sm leading-relaxed mb-6">
//                 {project.description}
//               </p>

//               <div className="flex flex-wrap gap-3 mt-auto">
//                 {project.tags.map((tag, i) => (
//                   <span key={i} className="text-[10px] font-mono uppercase tracking-widest text-cyan-400/80 bg-cyan-400/5 px-2 py-1 rounded">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";
import { motion } from "framer-motion";
import { Folder, ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-20 lg:pl-40 max-w-full">
      {/* Section Header with Left Padding for Sidebar alignment */}
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-4 italic tracking-tighter">
          <span className="text-cyan-400 text-2xl font-mono not-italic"></span> Selected Projects
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {projects.map((project, index) => (
            <Link to={`/project/${project.id}`} key={index} className="block group">
              <motion.div
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#111] p-8 rounded-3xl border border-white/5 group-hover:border-cyan-400/30 transition-all flex flex-col h-full gap-4 relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-6">
                  <Folder className="text-cyan-400" size={40} />
                  <div className="text-gray-500 group-hover:text-cyan-400 transition-colors">
                    <ArrowRight size={24} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono uppercase tracking-widest text-cyan-400/80 bg-cyan-400/5 px-2 py-1 rounded border border-cyan-400/10">
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