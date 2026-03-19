import React, { useRef, useState } from 'react'; // Added useState
import emailjs from '@emailjs/browser';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  
  const whatsappNumber = "91XXXXXXXXXX"; // Put your actual number here

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
        setTimeout(() => setIsSent(false), 5000); // Reset success message after 5s
        e.target.reset();
      }, (error) => {
        setIsSending(false);
        alert("Error: " + error.text);
      });
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        {/* <h2 className="text-cyan-400 font-mono mb-4 text-xl tracking-widest">06. CONTACT</h2> */}
        <h3 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">Let's Talk.</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-12 bg-[#111] p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden">
        {/* Left Side: Quick Links */}
        <div className="flex flex-col justify-center gap-8">
          <p className="text-gray-400 text-lg">Prefer a direct chat?</p>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" className="flex items-center gap-4 text-white hover:text-cyan-400 transition-all text-xl font-bold group">
            <div className="p-4 bg-green-500/10 rounded-full text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all"><MessageSquare /></div>
            WhatsApp
          </a>
          <a href="mailto:nidhi@example.com" className="flex items-center gap-4 text-white hover:text-cyan-400 transition-all text-xl font-bold group">
            <div className="p-4 bg-cyan-400/10 rounded-full text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all"><Mail /></div>
            Email Me
          </a>
        </div>

        {/* Right Side: Form */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input type="text" name="user_name" placeholder="Name" required className="bg-black/50 border border-white/10 p-4 rounded-xl focus:border-cyan-400 outline-none text-white transition-all" />
          <input type="email" name="user_email" placeholder="Email" required className="bg-black/50 border border-white/10 p-4 rounded-xl focus:border-cyan-400 outline-none text-white transition-all" />
          <textarea name="message" rows="4" placeholder="Your Message" required className="bg-black/50 border border-white/10 p-4 rounded-xl focus:border-cyan-400 outline-none text-white transition-all resize-none"></textarea>
          
          <button 
            type="submit" 
            disabled={isSending || isSent}
            className={`py-4 rounded-xl flex items-center justify-center gap-2 font-black transition-all ${isSent ? 'bg-green-500 text-black' : 'bg-cyan-400 text-black hover:bg-white'}`}
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