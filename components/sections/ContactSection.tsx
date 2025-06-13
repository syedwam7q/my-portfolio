import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative z-10 py-24 px-6 bg-gray-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          LET'S CREATE SOMETHING AMAZING
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ready to push the boundaries of what's possible? Let's connect and bring your vision to life.
        </motion.p>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="mailto:sdirwamiq@gmail.com" 
            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all"
          >
            <Mail className="w-5 h-5" />
            <span className="font-bold">Email Me</span>
          </a>
          <a 
            href="https://github.com/syedwam7q" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-3 px-6 py-3 border-2 border-cyan-500 rounded-lg hover:bg-cyan-500/20 transition-all"
          >
            <Github className="w-5 h-5" />
            <span className="font-bold">GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/syed-wamiq-713592316" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-3 px-6 py-3 border-2 border-cyan-500 rounded-lg hover:bg-cyan-500/20 transition-all"
          >
            <Linkedin className="w-5 h-5" />
            <span className="font-bold">LinkedIn</span>
          </a>
        </motion.div>
        
        <motion.div 
          className="mt-16 p-8 bg-black/50 border border-cyan-900/50 rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-cyan-400">Send a Message</h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 bg-gray-900 border border-cyan-900/50 rounded-md focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 bg-gray-900 border border-cyan-900/50 rounded-md focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full p-3 bg-gray-900 border border-cyan-900/50 rounded-md focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
            </div>
            <div>
              <textarea 
                rows={5} 
                placeholder="Your Message" 
                className="w-full p-3 bg-gray-900 border border-cyan-900/50 rounded-md focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-md hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all"
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