import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section id="contact" className="relative z-10 py-24 px-6 bg-gray-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 md:mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          LET'S CREATE SOMETHING AMAZING
        </motion.h2>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-12 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ready to push the boundaries of what's possible? Let's connect and bring your vision to life.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="mailto:sdirwamiq@gmail.com" 
            className="group flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all"
          >
            <Mail className="w-5 h-5" />
            <span className="font-bold">Email Me</span>
          </a>
          <a 
            href="https://github.com/syedwam7q" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center justify-center gap-3 px-6 py-3 border-2 border-cyan-500 rounded-lg hover:bg-cyan-500/20 transition-all"
          >
            <Github className="w-5 h-5" />
            <span className="font-bold">GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/syed-wamiq-713592316" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center justify-center gap-3 px-6 py-3 border-2 border-cyan-500 rounded-lg hover:bg-cyan-500/20 transition-all"
          >
            <Linkedin className="w-5 h-5" />
            <span className="font-bold">LinkedIn</span>
          </a>
        </motion.div>
        
        <motion.div 
          className="mt-12 md:mt-16 p-4 md:p-8 bg-black/50 border border-cyan-900/50 rounded-lg mx-2 md:mx-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-cyan-400">Send a Message</h3>
          <form 
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.elements.name.value;
              const email = e.target.elements.email.value;
              const subject = e.target.elements.subject.value;
              const message = e.target.elements.message.value;
              
              // Create mailto link with form data
              const mailtoLink = `mailto:sdirwamiq@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
              
              // Open email client
              window.location.href = mailtoLink;
            }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  required
                  className="w-full p-3 bg-gray-900 border border-cyan-900/50 rounded-md focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors text-base"
                  style={{ WebkitAppearance: "none" }}
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  required
                  className="w-full p-3 bg-gray-900 border border-cyan-900/50 rounded-md focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors text-base"
                  style={{ WebkitAppearance: "none" }}
                />
              </div>
            </div>
            <div>
              <input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                required
                className="w-full p-3 bg-gray-900 border border-cyan-900/50 rounded-md focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors text-base"
                style={{ WebkitAppearance: "none" }}
              />
            </div>
            <div>
              <textarea 
                rows={5} 
                name="message"
                placeholder="Your Message" 
                required
                className="w-full p-3 bg-gray-900 border border-cyan-900/50 rounded-md focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors text-base"
                style={{ WebkitAppearance: "none" }}
              />
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-md hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all text-base"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;