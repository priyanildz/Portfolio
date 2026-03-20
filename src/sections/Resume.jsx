import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const Resume = () => {
  const education = [
    {
      title: "Masters of Science in Artificial Intelligence",
      sub: "KES’ B.K.Shroff College of Arts & Commerce",
      date: "Aug 2024 – Present",
      score: "SGPA: 9.09 (Sem 3)",
    },
    {
      title: "Bachelor of Science in Information Technology",
      sub: "Ghanshyamdas Saraf College, Mumbai University",
      date: "2021 – 2024",
      score: "CGPI: 8.93",
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      sub: "Durgadevi Saraf Junior College",
      date: "2020 – 2021",
      score: "90.33%",
    },
  ];

  const experience = [
    {
      title: "Software Developer Intern",
      sub: "SSPD Technology Solutions",
      date: "July 2025 – Present",
      desc: "Developed scalable full-stack applications using the MERN stack integrating ReactJS and Angular with Node.js/Express backends. Managed cloud databases via MongoDB Atlas and streamlined production deployments on Vercel.",
    },
    {
      title: "Software and Research Intern",
      sub: "Chalbo India Pvt. Ltd., Raipur (Remote)",
      date: "Feb 2025 - May 2025",
      desc: "Contributed to software development and research-based projects. Demonstrated proactive problem-solving and received appreciation for professionalism and timely delivery.",
    },
  ];

  return (
    <div className="lg:pl-40">
      {/* --- EDUCATION FRAME --- */}
      <section
        id="education"
        className="min-h-screen flex flex-col justify-center py-20 px-6 max-w-5xl mx-auto border-b border-white/5"
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">
            {/* <span className="text-cyan-400 font-mono text-2xl not-italic mr-2">
            01.
          </span> */}
            Education
          </h2>
          <div className="h-[1px] flex-grow bg-white/10"></div>
        </div>

        <div className="space-y-12">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-cyan-400/20"
            >
              <div className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(0,245,255,1)]" />
              <h3 className="text-2xl font-bold text-white leading-tight">
                {item.title}
              </h3>
              <p className="text-cyan-400 font-mono mt-1">{item.sub}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-500 text-xs uppercase tracking-widest">
                  {item.date}
                </span>
                <span className="text-cyan-400/60 font-mono text-sm">
                  {item.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- EXPERIENCE FRAME --- */}
      <section
        id="experience"
        className="min-h-screen flex flex-col justify-center py-20 px-6 max-w-5xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">
            {/* <span className="text-cyan-400 font-mono text-2xl not-italic mr-2">
            01.
          </span> */}
            Experience
          </h2>
          <div className="h-[1px] flex-grow bg-white/10"></div>
        </div>

        <div className="space-y-12">
          {experience.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-white/10"
            >
              <div className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-white/50" />
              <h3 className="text-2xl font-bold text-white leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-400 font-mono mt-1">{item.sub}</p>
              <span className="text-gray-500 text-xs uppercase tracking-widest mt-2 block mb-4">
                {item.date}
              </span>
              <p className="text-gray-500 leading-relaxed max-w-3xl text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;
