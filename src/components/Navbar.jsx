import React from 'react';
import { Home, User, Cpu, GraduationCap, Briefcase, FolderCode, Award, Mail } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { name: 'Home', id: 'hero', icon: <Home size={20} /> }, // Added Home
    { name: 'About', id: 'about', icon: <User size={20} /> },
    { name: 'Skills', id: 'skills', icon: <Cpu size={20} /> },
    { name: 'Education', id: 'education', icon: <GraduationCap size={20} /> },
    { name: 'Experience', id: 'experience', icon: <Briefcase size={20} /> },
    { name: 'Projects', id: 'projects', icon: <FolderCode size={20} /> },
    // { name: 'Certifications', id: 'certifications', icon: <Award size={20} /> },
    { name: 'Contact', id: 'contact', icon: <Mail size={20} /> }
  ];

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z- hidden lg:flex flex-col gap-2 p-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
      {navItems.map((item) => (
        <a 
          key={item.name} 
          href={`#${item.id}`}
          className="group relative p-4 text-gray-400 hover:text-cyan-400 transition-all rounded-2xl hover:bg-white/5"
        >
          {item.icon}
          
          {/* Tooltip */}
          <span className="absolute left-16 top-1/2 -translate-y-1/2 px-3 py-1 bg-cyan-400 text-black text-[10px] font-black uppercase tracking-widest rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap translate-x-[-10px] group-hover:translate-x-0">
            {item.name}
          </span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;