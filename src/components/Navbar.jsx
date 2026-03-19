// import React from 'react';

// const Navbar = () => {
//   const navItems = [
//     { name: 'About', id: 'about' },
//     { name: 'Skills', id: 'skills' },
//     { name: 'Resume', id: 'resume' },
//     { name: 'Projects', id: 'projects' },
//     { name: 'Certifications', id: 'certifications' },
//     { name: 'Contact', id: 'contact' }
//   ];

//   return (
//     <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[1000]">
//       <div className="flex items-center gap-4 md:gap-8 px-6 py-4 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl">
//         {navItems.map((item) => (
//           <a 
//             key={item.name} 
//             href={`#${item.id}`}
//             className="text-gray-400 hover:text-cyan-400 transition-all font-mono text-[10px] md:text-xs tracking-widest uppercase hover:scale-110"
//           >
//             {item.name}
//           </a>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import { User, Cpu, FileText, FolderCode, Award, Mail } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { name: 'About', id: 'about', icon: <User size={20} /> },
    { name: 'Skills', id: 'skills', icon: <Cpu size={20} /> },
    { name: 'Education/Experience', id: 'resume', icon: <FileText size={20} /> },
    { name: 'Projects', id: 'projects', icon: <FolderCode size={20} /> },
    { name: 'Certifications', id: 'certifications', icon: <Award size={20} /> },
    { name: 'Contact', id: 'contact', icon: <Mail size={20} /> }
  ];

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-[1000] hidden lg:flex flex-col gap-4 p-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
      {navItems.map((item) => (
        <a 
          key={item.name} 
          href={`#${item.id}`}
          className="group relative p-4 text-gray-400 hover:text-cyan-400 transition-all rounded-xl hover:bg-white/5"
        >
          {item.icon}
          
          {/* Tooltip that appears on hover */}
          <span className="absolute left-16 top-1/2 -translate-y-1/2 px-3 py-1 bg-cyan-400 text-black text-[10px] font-bold uppercase tracking-widest rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {item.name}
          </span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;