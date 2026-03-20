import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  
  const whatsappNumber = "919022790465"; // Put your actual number here

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_njrcdys', 
      'template_8kakmtj', 
      form.current, 
      'GZIEhGaMl0mVsom-D'
    )
      .then(() => {
        setIsSending(false);
        setIsSent(true);
        setTimeout(() => setIsSent(false), 5000);
        e.target.reset();
      }, (error) => {
        setIsSending(false);
        alert("Error: " + error.text);
      });
  };

  return (
    /* Changed py-32 to py-10 and added lg:pl-40 for sidebar alignment */
    <section id="contact" className="min-h-screen flex flex-col justify-center py-10 px-6 max-w-6xl mx-auto lg:pl-40">
      <div className="text-center mb-8">
        <h3 className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter italic uppercase">
          Let's <span className="text-cyan-400">Talk.</span>
        </h3>
        <p className="text-gray-500 font-mono text-xs tracking-widest uppercase">Got a project? Let's build it together.</p>
      </div>

      {/* Reduced padding from p-12 to p-8 to save vertical space */}
      <div className="grid md:grid-cols-2 gap-10 bg-[#111]/50 backdrop-blur-sm p-8 rounded-[40px] border border-white/5 relative overflow-hidden">
        
        {/* Left Side: Quick Links */}
        <div className="flex flex-col justify-center gap-6">
          <p className="text-gray-400 text-base italic">Prefer a direct chat?</p>
          
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-white hover:text-cyan-400 transition-all text-lg font-bold group">
            <div className="p-3 bg-green-500/10 rounded-2xl text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all">
              <MessageSquare size={20} />
            </div>
            <span className="tracking-tight">WhatsApp</span>
          </a>

          <a href="mailto:nidhipandey8108@gmail.com" className="flex items-center gap-4 text-white hover:text-cyan-400 transition-all text-lg font-bold group">
            <div className="p-3 bg-cyan-400/10 rounded-2xl text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all">
              <Mail size={20} />
            </div>
            <span className="tracking-tight">Email Me</span>
          </a>
        </div>

        {/* Right Side: Form */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
          <input type="text" name="user_name" placeholder="NAME" required className="bg-black/40 border border-white/5 p-4 rounded-2xl focus:border-cyan-400 outline-none text-white text-sm transition-all font-mono" />
          <input type="email" name="user_email" placeholder="EMAIL" required className="bg-black/40 border border-white/5 p-4 rounded-2xl focus:border-cyan-400 outline-none text-white text-sm transition-all font-mono" />
          <textarea name="message" rows="3" placeholder="YOUR MESSAGE" required className="bg-black/40 border border-white/5 p-4 rounded-2xl focus:border-cyan-400 outline-none text-white text-sm transition-all resize-none font-mono"></textarea>
          
          <button 
            type="submit" 
            disabled={isSending || isSent}
            className={`py-4 mt-2 rounded-2xl flex items-center justify-center gap-2 font-black tracking-tighter transition-all uppercase ${isSent ? 'bg-green-500 text-black' : 'bg-cyan-400 text-black hover:bg-white hover:scale-[1.02]'}`}
          >
            {isSending ? "SENDING..." : isSent ? "MESSAGE SENT!" : "SEND MESSAGE"}
            {isSent ? <CheckCircle size={18} /> : <Send size={18} />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;