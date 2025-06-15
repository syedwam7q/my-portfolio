import React, { useState } from 'react';
import { Code, Palette, Cpu, Globe, Zap, Server, Database, Shield, Layers, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';

// Skill category component
const SkillCategory = ({ title, children }) => {
  return (
    <div className="mb-12">
      <h3 className="text-xl md:text-2xl font-bold mb-6 text-white relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-gradient-cyan-start to-gradient-blue-end"></span>
      </h3>
      <div className="grid md:grid-cols-2 gap-8">
        {children}
      </div>
    </div>
  );
};

// Enhanced skill bar component
const SkillBar = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine color based on skill category
  let gradientColors = "from-gradient-cyan-start to-gradient-blue-end";
  if (skill.category === "design") {
    gradientColors = "from-cyber-pink to-cyber-purple";
  } else if (skill.category === "data") {
    gradientColors = "from-cyber-green to-gradient-blue-start";
  } else if (skill.category === "infrastructure") {
    gradientColors = "from-cyber-orange to-cyber-yellow";
  }
  
  return (
    <motion.div 
      key={index} 
      className="group bg-gray-900/30 p-4 rounded-lg border border-gray-800 hover:border-cyan-900/50 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-3 flex-wrap">
        <div className="flex items-center gap-2 md:gap-3">
          <motion.div 
            className={`p-1.5 md:p-2 bg-gradient-to-r ${gradientColors} rounded-lg`}
            animate={isHovered ? { scale: 1.1, rotate: [0, 5, -5, 0] } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {skill.icon}
          </motion.div>
          <span className="font-bold text-sm md:text-base">{skill.name}</span>
        </div>
        <motion.span 
          className="text-cyber-blue font-mono text-sm md:text-base"
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      
      {/* Skill bar container */}
      <div className="relative h-4 bg-gray-800/70 rounded-full overflow-hidden backdrop-blur-sm">
        {/* Animated progress bar */}
        <motion.div
          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${gradientColors} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: index * 0.05 + 0.2, ease: "easeOut" }}
        />
        
        {/* Animated glow effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: `0 0 10px rgba(0, 255, 255, 0.7)`,
          }}
        />
        
        {/* Animated pattern overlay */}
        <motion.div 
          className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
          }}
          animate={isHovered ? 
            { backgroundPosition: ['0px 0px', '20px 20px'] } : 
            { backgroundPosition: '0px 0px' }
          }
          transition={{ 
            duration: 1, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        {/* Skill level markers */}
        <div className="absolute inset-0 flex justify-between px-1">
          {[25, 50, 75].map((marker) => (
            <div 
              key={marker} 
              className="h-full w-px bg-white/20"
              style={{ left: `${marker}%` }}
            />
          ))}
        </div>
      </div>
      
      {/* Skill description on hover */}
      {skill.description && (
        <motion.div 
          className="mt-2 text-xs text-gray-400"
          initial={{ opacity: 0, height: 0 }}
          animate={isHovered ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {skill.description}
        </motion.div>
      )}
    </motion.div>
  );
};

const SkillsSection = () => {
  // Enhanced skills data with categories and descriptions
  const skills = [
    // Development Skills
    { 
      name: 'Python Development', 
      level: 90, 
      icon: <Code className="w-5 h-5" />,
      category: "development",
      description: "Expert in Python with experience in Django, Flask, and data science libraries."
    },
    { 
      name: 'React & Next.js', 
      level: 85, 
      icon: <Code className="w-5 h-5" />,
      category: "development",
      description: "Building modern web applications with React, Next.js, and related technologies."
    },
    { 
      name: 'TypeScript', 
      level: 80, 
      icon: <Code className="w-5 h-5" />,
      category: "development",
      description: "Strong typing for JavaScript applications to improve code quality and maintainability."
    },
    { 
      name: 'Rust Programming', 
      level: 65, 
      icon: <Code className="w-5 h-5" />,
      category: "development",
      description: "Systems programming with a focus on performance and memory safety."
    },
    
    // Design Skills
    { 
      name: '3D Visualization', 
      level: 75, 
      icon: <Palette className="w-5 h-5" />,
      category: "design",
      description: "Creating immersive 3D experiences with Three.js and WebGL."
    },
    { 
      name: 'UI/UX Design', 
      level: 80, 
      icon: <Palette className="w-5 h-5" />,
      category: "design",
      description: "Designing intuitive and visually appealing user interfaces and experiences."
    },
    
    // Data & AI Skills
    { 
      name: 'AI & Machine Learning', 
      level: 75, 
      icon: <Cpu className="w-5 h-5" />,
      category: "data",
      description: "Implementing ML models using TensorFlow, PyTorch, and scikit-learn."
    },
    { 
      name: 'Data Engineering', 
      level: 70, 
      icon: <Database className="w-5 h-5" />,
      category: "data",
      description: "Building data pipelines and working with large datasets."
    },
    { 
      name: 'Quantum Computing', 
      level: 60, 
      icon: <Cpu className="w-5 h-5" />,
      category: "data",
      description: "Exploring quantum algorithms and applications using Qiskit."
    },
    
    // Infrastructure Skills
    { 
      name: 'API Development', 
      level: 85, 
      icon: <Globe className="w-5 h-5" />,
      category: "infrastructure",
      description: "Designing and implementing RESTful and GraphQL APIs."
    },
    { 
      name: 'DevOps & CI/CD', 
      level: 75, 
      icon: <GitBranch className="w-5 h-5" />,
      category: "infrastructure",
      description: "Setting up automated workflows with GitHub Actions, Jenkins, and Docker."
    },
    { 
      name: 'System Architecture', 
      level: 80, 
      icon: <Layers className="w-5 h-5" />,
      category: "infrastructure",
      description: "Designing scalable and maintainable software architectures."
    },
  ];

  // Group skills by category
  const developmentSkills = skills.filter(skill => skill.category === "development");
  const designSkills = skills.filter(skill => skill.category === "design");
  const dataSkills = skills.filter(skill => skill.category === "data");
  const infrastructureSkills = skills.filter(skill => skill.category === "infrastructure");

  return (
    <section id="skills" className="relative z-10 py-24 px-6 bg-gradient-to-b from-black to-dark-blue/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-black bg-gradient-to-r from-gradient-cyan-start to-gradient-blue-end bg-clip-text text-transparent"
          >
            SKILLS & EXPERTISE
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A comprehensive overview of my technical abilities and proficiency levels across various domains.
          </motion.p>
        </motion.div>
        
        <div className="space-y-12">
          <SkillCategory title="Development">
            {developmentSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </SkillCategory>
          
          <SkillCategory title="Design">
            {designSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index + developmentSkills.length} />
            ))}
          </SkillCategory>
          
          <SkillCategory title="Data & AI">
            {dataSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index + developmentSkills.length + designSkills.length} />
            ))}
          </SkillCategory>
          
          <SkillCategory title="Infrastructure">
            {infrastructureSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index + developmentSkills.length + designSkills.length + dataSkills.length} />
            ))}
          </SkillCategory>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;