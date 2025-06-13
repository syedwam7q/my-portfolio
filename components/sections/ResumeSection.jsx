import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, Mail, Briefcase, GraduationCap, Award, Code, Cpu, Globe, Palette, Zap } from 'lucide-react';

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState('experience');

  // Resume data from RESUME.md
  const personalInfo = {
    name: "Syed Wamiq Mustafa",
    email: "sdirwamiq@gmail.com",
    location: "Chennai, Tamil Nadu 603203",
    summary: "A highly organized and efficient developer skilled in Python, C/C++, Rust, Next.js, and Qiskit, with a strong ability to transform complex challenges into clean, scalable solutions. Experienced in data structures, machine learning, artificial intelligence, and computer architecture. Proficient in building end-to-end ML pipelines using Pandas, NumPy, and TensorFlow, and automating workflows to enhance performance and reliability. Adept in both independent and collaborative environments, with additional creative expertise in graphic design, video editing, and photo editing. Committed to continuous learning and delivering robust, real-world solutions that drive impact."
  };

  const skills = [
    { category: "Programming Languages", items: [
      { name: 'C/C++', level: 85, icon: <Code className="w-5 h-5" /> },
      { name: 'Python', level: 90, icon: <Code className="w-5 h-5" /> },
      { name: 'Rust', level: 75, icon: <Code className="w-5 h-5" /> },
      { name: 'JavaScript', level: 80, icon: <Code className="w-5 h-5" /> },
      { name: 'HTML/CSS', level: 85, icon: <Code className="w-5 h-5" /> },
    ]},
    { category: "Frameworks & Libraries", items: [
      { name: 'React & Next.js', level: 80, icon: <Globe className="w-5 h-5" /> },
      { name: 'TensorFlow/PyTorch', level: 75, icon: <Cpu className="w-5 h-5" /> },
      { name: 'Qiskit', level: 70, icon: <Cpu className="w-5 h-5" /> },
      { name: 'Web3.js/Ethereum', level: 65, icon: <Globe className="w-5 h-5" /> },
    ]},
    { category: "Tools & Platforms", items: [
      { name: 'Git/Version Control', level: 85, icon: <Code className="w-5 h-5" /> },
      { name: 'Data Analysis (Pandas/NumPy)', level: 80, icon: <Zap className="w-5 h-5" /> },
      { name: 'Adobe Creative Suite', level: 75, icon: <Palette className="w-5 h-5" /> },
      { name: 'Database Systems', level: 70, icon: <Zap className="w-5 h-5" /> },
    ]},
  ];

  const experience = [
    {
      title: "Intern Software Developer",
      company: "V Genuine Solutions Pvt. Ltd.",
      period: "Jun 2025 – July 2025",
      responsibilities: [
        "Contributed to cross-functional development projects by collaborating with stakeholders and aligning business and engineering goals.",
        "Adapted swiftly to evolving requirements, ensuring timely delivery of key milestones.",
        "Fostered strong cross-departmental communication, enhancing teamwork and project transparency."
      ]
    },
    {
      title: "Academic & Research Projects",
      company: "University Research",
      period: "Ongoing",
      responsibilities: [
        "Participated in quantum algorithms and emerging computation models research.",
        "Collaborated with faculty and peers to meet project goals and learn new industry skills."
      ]
    },
    {
      title: "RISC-V & Shakti Processor Research",
      company: "Research Project",
      period: "Ongoing",
      responsibilities: [
        "Conducted architecture optimization and workflow improvements for embedded systems.",
        "Diagnosed and resolved hardware/software issues, escalating complex cases appropriately.",
        "Delivered high-quality project components on schedule under R&D standards.",
        "Attended specialized training in advanced processor architecture."
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering (CTECH)",
      institution: "SRM Institute of Science and Technology",
      period: "Expected Graduation: August 2026"
    }
  ];

  const languages = [
    { name: "English", proficiency: "Native" },
    { name: "Urdu", proficiency: "Native" },
    { name: "Hindi", proficiency: "Native" }
  ];

  const affiliations = [
    "ACM – Association for Computing Machinery",
    "DSA Club Member – SRM"
  ];

  const hobbies = [
    "Machine Learning, AI, Data Science, Quantum Computing, Web & App Development",
    "District-level Football & Cricket (DPS Budgam)",
    "IMUN Delegate"
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="resume" className="relative z-10 py-24 px-6 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-6xl font-black mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          INTERACTIVE RESUME
        </motion.h2>
        
        <motion.p
          className="text-xl text-center text-cyan-300 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore my professional journey through this interactive resume or download a PDF version.
        </motion.p>
        
        {/* Download button */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a 
            href="/Syed_Wamiq.pdf" 
            download="Syed_Wamiq_Resume.pdf"
            className="group relative px-8 py-4 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transition-transform group-hover:scale-110" />
            <span className="relative z-10 flex items-center gap-2 font-bold">
              DOWNLOAD PDF <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </a>
        </motion.div>
        
        {/* Personal Info */}
        <motion.div
          className="mb-12 p-6 border border-cyan-900/50 bg-black/50 rounded-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {personalInfo.name}
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed">
            {personalInfo.summary}
          </p>
        </motion.div>
        
        {/* Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {['experience', 'skills', 'education', 'languages', 'affiliations'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </motion.div>
        
        {/* Tab Content */}
        <div className="mt-8">
          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Professional Experience
              </h3>
              
              <div className="relative border-l-2 border-cyan-500 pl-8 ml-4">
                {experience.map((job, index) => (
                  <motion.div 
                    key={index}
                    className="mb-12 relative"
                    variants={itemVariants}
                  >
                    <div className="absolute -left-12 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                    </div>
                    
                    <div className="group p-6 border border-gray-800 rounded-lg hover:border-cyan-500/50 transition-all duration-300 bg-black/50 backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl"></div>
                      
                      <h4 className="text-xl font-bold text-white mb-2">{job.title}</h4>
                      <div className="flex items-center gap-2 text-cyan-400 mb-4">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{job.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {job.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Technical Skills
              </h3>
              
              <div className="space-y-12">
                {skills.map((skillCategory, categoryIndex) => (
                  <motion.div key={categoryIndex} variants={itemVariants}>
                    <h4 className="text-xl font-bold mb-6 text-white">{skillCategory.category}</h4>
                    <div className="grid md:grid-cols-2 gap-8">
                      {skillCategory.items.map((skill, index) => (
                        <motion.div 
                          key={index} 
                          className="group"
                          variants={itemVariants}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                                {skill.icon}
                              </div>
                              <span className="font-bold text-lg">{skill.name}</span>
                            </div>
                            <span className="text-cyan-400 font-mono">{skill.level}%</span>
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
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Education Tab */}
          {activeTab === 'education' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Education
              </h3>
              
              <div className="relative border-l-2 border-cyan-500 pl-8 ml-4">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    className="mb-12 relative"
                    variants={itemVariants}
                  >
                    <div className="absolute -left-12 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                    </div>
                    
                    <div className="group p-6 border border-gray-800 rounded-lg hover:border-cyan-500/50 transition-all duration-300 bg-black/50 backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl"></div>
                      
                      <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                      <div className="flex items-center gap-2 text-cyan-400 mb-4">
                        <GraduationCap className="w-4 h-4" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Languages Tab */}
          {activeTab === 'languages' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Languages
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {languages.map((lang, index) => (
                  <motion.div 
                    key={index}
                    className="p-6 border border-gray-800 rounded-lg hover:border-cyan-500/50 transition-all duration-300 bg-black/50 backdrop-blur-sm group"
                    variants={itemVariants}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl"></div>
                    <h4 className="text-xl font-bold text-white mb-2">{lang.name}</h4>
                    <div className="flex items-center gap-2 text-cyan-400">
                      <Globe className="w-4 h-4" />
                      <span>{lang.proficiency}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Affiliations Tab */}
          {activeTab === 'affiliations' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Affiliations
                  </h3>
                  
                  <ul className="space-y-4">
                    {affiliations.map((affiliation, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start gap-3"
                        variants={itemVariants}
                      >
                        <Award className="w-5 h-5 text-cyan-400 mt-1" />
                        <span className="text-gray-300">{affiliation}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Hobbies & Interests
                  </h3>
                  
                  <ul className="space-y-4">
                    {hobbies.map((hobby, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start gap-3"
                        variants={itemVariants}
                      >
                        <span className="text-cyan-400 mt-1">•</span>
                        <span className="text-gray-300">{hobby}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;