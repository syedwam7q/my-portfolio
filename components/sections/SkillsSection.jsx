import React from 'react';
import { Code, Palette, Cpu, Globe, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = [
    { name: 'Python Development', level: 90, icon: <Code className="w-5 h-5" /> },
    { name: 'React & Next.js', level: 70, icon: <Code className="w-5 h-5" /> },
    { name: '3D Visualization (Three.js)', level: 60, icon: <Palette className="w-5 h-5" /> },
    { name: 'Interface Architecture', level: 80, icon: <Palette className="w-5 h-5" /> },
    { name: 'API Development', level: 80, icon: <Globe className="w-5 h-5" /> },
    { name: 'System Optimization', level: 80, icon: <Zap className="w-5 h-5" /> },
    { name: 'Rust Programming', level: 60, icon: <Code className="w-5 h-5" /> },
    { name: 'AI & Machine Learning', level: 70, icon: <Cpu className="w-5 h-5" /> },
    { name: 'Quantum Computing (Qiskit)', level: 60, icon: <Cpu className="w-5 h-5" /> },
    { name: 'Visual Design & Media', level: 80, icon: <Palette className="w-5 h-5" /> },
  ];

  return (
    <section id="skills" className="relative z-10 py-24 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-6xl font-black mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          SKILLS & EXPERTISE
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-3 flex-wrap">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-1.5 md:p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                    {skill.icon}
                  </div>
                  <span className="font-bold text-sm md:text-lg">{skill.name}</span>
                </div>
                <span className="text-cyan-400 font-mono text-sm md:text-base">{skill.level}%</span>
              </div>
              <div className="relative h-4 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 group-hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                />
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                     style={{
                       background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
                       animation: 'slide 1s linear infinite',
                     }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;