import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  tech: string[];
  color: string;
  link?: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'DevKit Pro',
      description: 'A comprehensive developer toolkit with code snippets, documentation, and utilities',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      color: 'from-cyan-500 to-blue-500',
      link: 'https://devkit-pro-zeta.vercel.app',
    },
    {
      title: 'Blockchain-Based eVoting System',
      description: 'Secure and transparent electronic voting system using blockchain technology',
      tech: ['Solidity', 'Ethereum', 'Web3.js', 'React'],
      color: 'from-purple-500 to-pink-500',
      link: 'https://github.com/syedwam7q/Blockchain-Based-eVoting-System',
    },
    {
      title: 'Sign Language Detection',
      description: 'Real-time sign language detection and translation using computer vision',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'MediaPipe'],
      color: 'from-green-500 to-emerald-500',
      link: 'https://github.com/syedwam7q/Sign-Language-Detection',
    },
  ];

  return (
    <section id="projects" className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-6xl font-black mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          FEATURED PROJECTS
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl"
                   style={{ backgroundImage: `linear-gradient(to right, ${project.color.split(' ')[1]}, ${project.color.split(' ')[3]})` }}
              />
              <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className={`h-2 w-full bg-gradient-to-r ${project.color} rounded-full mb-6`} />
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    className="inline-block text-cyan-400 hover:text-white transition-colors"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;