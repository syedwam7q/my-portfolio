import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, Info, X } from 'lucide-react';

// Project card component
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  // Get gradient colors based on project type
  let gradientColors = project.color || 'from-gradient-cyan-start to-gradient-blue-end';
  
  return (
    <>
      <motion.div 
        key={index} 
        className="group relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background glow effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl"
          style={{ backgroundImage: `linear-gradient(to right, ${project.color.split(' ')[1]}, ${project.color.split(' ')[3]})` }}
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Project card */}
        <motion.div 
          className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-5 md:p-6 transition-all duration-300 h-full flex flex-col"
          whileHover={{ 
            y: -8,
            borderColor: 'rgba(6, 182, 212, 0.5)',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* Project header with color bar */}
          <div className="mb-4">
            <motion.div 
              className={`h-2 w-full bg-gradient-to-r ${project.color} rounded-full mb-4`}
              whileHover={{ scaleX: 1.03 }}
            />
            <div className="flex justify-between items-start">
              <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
              <motion.button
                className="text-gray-400 hover:text-cyber-blue p-1 rounded-full bg-gray-800/50 hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowDetails(true)}
                aria-label={`View details for ${project.title}`}
              >
                <Info size={18} />
              </motion.button>
            </div>
          </div>
          
          {/* Project image if available */}
          {project.image && (
            <div className="relative h-40 mb-4 overflow-hidden rounded-md">
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
            </div>
          )}
          
          {/* Project description */}
          <p className="text-gray-300 text-sm md:text-base mb-4 flex-grow">{project.description}</p>
          
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, techIndex) => (
              <motion.span 
                key={techIndex} 
                className="px-2 md:px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs md:text-sm text-gray-300"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'rgba(8, 145, 178, 0.2)',
                  borderColor: 'rgba(8, 145, 178, 0.5)',
                  color: '#ffffff'
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
          
          {/* Project links */}
          <div className="flex gap-3 mt-auto">
            {project.github && (
              <motion.a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm py-2 px-3 bg-gray-800 hover:bg-gray-700 rounded-md border border-gray-700 hover:border-cyan-700"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <Github size={16} />
                <span>Code</span>
              </motion.a>
            )}
            
            {project.link && (
              <motion.a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyber-blue hover:text-white transition-colors text-sm py-2 px-3 bg-cyan-900/20 hover:bg-cyan-800/40 rounded-md border border-cyan-900/50 hover:border-cyan-500"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                aria-label={`Visit ${project.title} live demo`}
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </motion.a>
            )}
          </div>
        </motion.div>
      </motion.div>
      
      {/* Project details modal */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDetails(false)}
          >
            <motion.div
              className="relative bg-gray-900 border border-cyan-900/30 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-gray-800/50 hover:bg-gray-800 transition-colors z-10"
                onClick={() => setShowDetails(false)}
                aria-label="Close details"
              >
                <X size={20} />
              </button>
              
              {/* Project header */}
              <div className={`h-2 w-full bg-gradient-to-r ${project.color} rounded-t-lg`} />
              
              <div className="p-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                
                {/* Project image if available */}
                {project.image && (
                  <div className="relative h-60 mb-6 overflow-hidden rounded-md">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                  </div>
                )}
                
                {/* Full description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-cyber-blue">Overview</h4>
                  <p className="text-gray-300 mb-4">{project.fullDescription || project.description}</p>
                  
                  {/* Key features if available */}
                  {project.features && (
                    <>
                      <h4 className="text-lg font-semibold mb-2 text-cyber-blue">Key Features</h4>
                      <ul className="list-disc pl-5 text-gray-300 space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                
                {/* Tech stack */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-cyber-blue">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors py-2 px-4 bg-gray-800 hover:bg-gray-700 rounded-md border border-gray-700 hover:border-cyan-700"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github size={18} />
                      <span>View Source</span>
                    </a>
                  )}
                  
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyber-blue hover:text-white transition-colors py-2 px-4 bg-cyan-900/20 hover:bg-cyan-800/40 rounded-md border border-cyan-900/50 hover:border-cyan-500"
                      aria-label={`Visit ${project.title} live demo`}
                    >
                      <ExternalLink size={18} />
                      <span>Visit Project</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ProjectsSection = () => {
  // Enhanced projects data with more details
  const projects = [
    {
      title: 'DevKit Pro',
      description: 'A comprehensive developer toolkit with code snippets, documentation, and utilities',
      fullDescription: 'DevKit Pro is a powerful web application designed to streamline the development workflow. It provides a centralized repository of code snippets, comprehensive documentation, and various utilities that developers can leverage to increase productivity.',
      features: [
        'Searchable code snippet library with syntax highlighting',
        'Interactive documentation with examples',
        'Developer tools including formatters and validators',
        'Customizable dashboard for quick access to frequently used resources'
      ],
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
      color: 'from-cyan-500 to-blue-500',
      link: 'https://devkit-pro-zeta.vercel.app',
      github: 'https://github.com/syedwam7q/devkit-pro',
      image: '/images/projects/devkit-pro.jpg'
    },
    {
      title: 'Blockchain-Based eVoting System',
      description: 'Secure and transparent electronic voting system using blockchain technology',
      fullDescription: 'This project implements a secure, transparent, and tamper-proof electronic voting system using blockchain technology. It addresses key challenges in traditional voting systems by ensuring vote integrity, voter anonymity, and public verifiability.',
      features: [
        'Secure voter authentication using cryptographic techniques',
        'Immutable vote recording on Ethereum blockchain',
        'Real-time vote counting and result verification',
        'Transparent audit trail accessible to all participants'
      ],
      tech: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'Hardhat', 'MetaMask'],
      color: 'from-purple-500 to-pink-500',
      github: 'https://github.com/syedwam7q/Blockchain-Based-eVoting-System',
      image: '/images/projects/blockchain-voting.jpg'
    },
    {
      title: 'Sign Language Detection',
      description: 'Real-time sign language detection and translation using computer vision',
      fullDescription: 'This application uses computer vision and machine learning to detect and translate sign language gestures in real-time. It aims to bridge communication gaps between hearing-impaired individuals and others by providing instant translation of sign language to text or speech.',
      features: [
        'Real-time hand gesture recognition with high accuracy',
        'Translation of American Sign Language (ASL) to text',
        'Support for both static signs and dynamic gestures',
        'Customizable user interface with accessibility features'
      ],
      tech: ['Python', 'TensorFlow', 'OpenCV', 'MediaPipe', 'NumPy', 'Scikit-learn'],
      color: 'from-green-500 to-emerald-500',
      github: 'https://github.com/syedwam7q/Sign-Language-Detection',
      image: '/images/projects/sign-language.jpg'
    },
  ];

  return (
    <section id="projects" className="relative z-10 py-24 px-6 bg-gradient-to-b from-dark-blue/50 to-black">
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
            FEATURED PROJECTS
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore my latest work showcasing innovative solutions and technical expertise
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="https://github.com/syedwam7q"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-gradient-cyan-start to-gradient-blue-end px-6 py-3 rounded-md shadow-lg hover:shadow-cyan-900/30 transition-all duration-300 hover:-translate-y-1"
            aria-label="View more projects on GitHub"
          >
            <Github size={20} />
            <span className="font-bold">View More Projects</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;