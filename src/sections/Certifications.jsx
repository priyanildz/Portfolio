// import React from 'react';
// import { Award } from 'lucide-react';

// const Certifications = () => {
//   const certs = ["Google Cloud Professional", "Deep Learning Specialization", "IBM Data Science"];

//   return (
//     <section className="py-20 px-6 md:px-20 max-w-6xl mx-auto">
//       <h2 className="text-3xl font-bold text-white mb-10"><span className="text-cyan-400 font-mono text-xl">05.</span> Certifications</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {certs.map((cert, i) => (
//           <div key={i} className="bg-[#111] p-6 rounded-xl border border-white/5 flex items-center gap-4 hover:border-cyan-400/30 transition-all">
//             <Award className="text-cyan-400" size={30} />
//             <span className="text-gray-300 font-medium">{cert}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Certifications;


import React from 'react';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certs = ["Google Cloud Professional", "Deep Learning Specialization", "IBM Data Science"];

  return (
    /* This ID MUST match the navbar link exactly */
    <section id="certifications" className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-20 lg:pl-40 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-white mb-10 tracking-tighter italic">
          <span className="text-cyan-400 font-mono not-italic text-2xl mr-2"></span> 
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <div key={i} className="bg-[#111] p-6 rounded-2xl border border-white/5 flex items-center gap-4 hover:border-cyan-400/30 transition-all group">
              <Award className="text-cyan-400 group-hover:scale-110 transition-transform" size={30} />
              <span className="text-gray-300 font-medium">{cert}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;