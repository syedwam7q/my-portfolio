import React, { useState, useEffect } from 'react';
import { ChevronDown, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [glitchText, setGlitchText] = useState('DEVELOPER');

  // Glitch effect
  useEffect(() => {
    const glitchWords = ['DEVELOPER', 'CREATOR', 'INNOVATOR', 'DESIGNER'];
    const interval = setInterval(() => {
      const randomWord = glitchWords[Math.floor(Math.random() * glitchWords.length)];
      setGlitchText(randomWord);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center z-10">
      <motion.div 
        className="text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
              CREATIVE
            </span>
            <span className="block mt-2 relative glitch-effect" data-text={glitchText}>
              <span className="absolute inset-0 text-red-500 animate-pulse" style={{ clipPath: 'inset(0 0 0 0)' }}>
                {glitchText}
              </span>
              <span className="relative">{glitchText}</span>
            </span>
          </h1>
        </div>
        
        <motion.p 
          className="text-xl text-cyan-300 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Pushing the boundaries through innovative design and cutting-edge technology
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a href="#projects" className="group relative px-8 py-4 overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transition-transform group-hover:scale-110" />
            <span className="relative z-10 flex items-center gap-2 font-bold">
              VIEW WORK <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a href="#contact" className="relative px-8 py-4 border-2 border-cyan-500 hover:bg-cyan-500/20 transition-colors">
            <span className="font-bold">GET IN TOUCH</span>
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <ChevronDown className="w-8 h-8 animate-bounce text-cyan-400" />
      </motion.div>
    </section>
  );
};

export default HeroSection;