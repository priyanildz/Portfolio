// import React from 'react';

// const Resume = () => {
//   return (
//     <section id="resume" className="py-20 px-6 max-w-6xl mx-auto border-t border-white/5">
//       <div className="grid md:grid-cols-2 gap-16">
//         {/* Education */}
//         <div>
//           <h2 className="text-3xl font-black mb-10 text-white uppercase italic">Education</h2>
//           <div className="space-y-12">
//             {[
//               { title: "Course Name", sub: "University Name", date: "year - year" },
//               { title: "Course Name", sub: "College Name", date: "year - year" }
//             ].map((item, i) => (
//               <div key={i} className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-cyan-400/30">
//                 <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-cyan-400" />
//                 <h3 className="text-xl font-bold text-white leading-none">{item.title}</h3>
//                 <p className="text-cyan-400/80 font-mono text-sm mt-2">{item.sub}</p>
//                 <span className="text-gray-500 text-xs uppercase mt-1 block tracking-widest">{item.date}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Experience - Same Style */}
//       </div>
//     </section>
//   );
// };

// export default Resume;



import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  const education = [
    { title: "MSc Artificial Intelligence", sub: "Your University Name", date: "2024 - 2026" },
    { title: "B.Tech Information Technology", sub: "Your College Name", date: "2020 - 2024" }
  ];

  const experience = [
    { 
      title: "IT Samachaar Project", 
      sub: "Lead Developer", 
      date: "2023 - Present",
      desc: "Built an intelligent automation agent for tech news analysis using Python and NLP."
    },
    { 
      title: "Voice Emotion Recognition", 
      sub: "Research Project", 
      date: "2023",
      desc: "Developed a CNN architecture to identify human emotions from raw audio data."
    }
  ];

  return (
    <section id="resume" className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-20 lg:pl-40 max-w-6xl mx-auto border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-16"
      >
        {/* Education Section */}
        <div>
          <h2 className="text-3xl font-black mb-12 text-white uppercase italic tracking-tighter">
            <span className="text-cyan-400 font-mono not-italic text-xl mr-2">03.</span> Education
          </h2>
          <div className="space-y-12">
            {education.map((item, i) => (
              <div key={i} className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-cyan-400/30">
                <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,245,255,0.8)]" />
                <h3 className="text-xl font-bold text-white leading-none">{item.title}</h3>
                <p className="text-cyan-400 font-mono text-sm mt-2">{item.sub}</p>
                <span className="text-gray-500 text-xs uppercase mt-1 block tracking-widest">{item.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h2 className="text-3xl font-black mb-12 text-white uppercase italic tracking-tighter">
            <span className="text-cyan-400 font-mono not-italic text-xl mr-2">04.</span> Experience
          </h2>
          <div className="space-y-12">
            {experience.map((item, i) => (
              <div key={i} className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-white/10">
                <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                <h3 className="text-xl font-bold text-white leading-none">{item.title}</h3>
                <p className="text-gray-400 font-mono text-sm mt-2">{item.sub}</p>
                <span className="text-gray-500 text-[10px] uppercase mt-1 block tracking-widest mb-2">{item.date}</span>
                <p className="text-gray-500 text-sm leading-relaxed italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;