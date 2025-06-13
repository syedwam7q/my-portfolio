import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative z-10 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-6xl font-black mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ABOUT ME
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              A developer and systems thinker who turns abstract ideas into intuitive, high-impact tools and interfaces.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With a blend of backend logic, frontend precision, and a soft spot for dev experience, I engineer digital environments that feel elegant, make sense fast, and leave room for curiosity.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether it's a visual simulator, an interactive code tool, or a full-stack MVP, I aim to bridge the technical and the tangible — crafting experiences that are as purposeful as they are polished.
            </p>
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-sm hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative bg-gray-900 p-8 rounded-lg border border-cyan-900/50">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-cyan-400">20+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400">2+</div>
                  <div className="text-gray-400">Years</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400">100%</div>
                  <div className="text-gray-400">Passion</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pink-400">∞</div>
                  <div className="text-gray-400">Ideas</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;