import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code, Palette, Rocket, Cpu, Globe, Zap } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [glitchText, setGlitchText] = useState('DEVELOPER');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles: Particle[] = [];
    const particleCount = 100;
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      
      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        if (this.y < 0) this.y = canvas!.height;
      }
      
      draw() {
        ctx.fillStyle = `rgba(0, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Glitch effect
  useEffect(() => {
    const glitchWords = ['DEVELOPER', 'CREATOR', 'INNOVATOR', 'DESIGNER'];
    const interval = setInterval(() => {
      const randomWord = glitchWords[Math.floor(Math.random() * glitchWords.length)];
      setGlitchText(randomWord);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { name: 'React/Next.js', level: 95, icon: <Code className="w-5 h-5" /> },
    { name: 'Three.js/WebGL', level: 85, icon: <Cpu className="w-5 h-5" /> },
    { name: 'UI/UX Design', level: 90, icon: <Palette className="w-5 h-5" /> },
    { name: 'Backend APIs', level: 88, icon: <Globe className="w-5 h-5" /> },
    { name: 'Performance', level: 92, icon: <Zap className="w-5 h-5" /> },
  ];

  const projects = [
    {
      title: 'Neural Network Visualizer',
      description: 'Interactive 3D visualization of deep learning architectures',
      tech: ['Three.js', 'TensorFlow.js', 'React'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Quantum Computing Sim',
      description: 'Real-time quantum circuit simulator with entanglement visualization',
      tech: ['WebGL', 'TypeScript', 'Web Workers'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'AR Shopping Platform',
      description: 'Augmented reality e-commerce with real-time product placement',
      tech: ['WebXR', 'Node.js', 'MongoDB'],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      {/* Custom cursor */}
      <div
        className="fixed w-6 h-6 border-2 border-cyan-400 rounded-full pointer-events-none transition-transform duration-100"
        style={{
          left: mousePos.x - 12,
          top: mousePos.y - 12,
          transform: 'scale(1)',
          zIndex: 9999,
          mixBlendMode: 'difference',
        }}
      />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-cyan-900/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            PORTFOLIO.
          </div>
          <div className="flex gap-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group cursor-pointer"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
              </a>
            ))}
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center z-10">
        <div className="text-center space-y-8">
          <div className="relative">
            <h1 className="text-8xl font-black tracking-tighter">
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
                CREATIVE
              </span>
              <span className="block mt-2 relative">
                <span className="absolute inset-0 text-red-500 animate-pulse" style={{ clipPath: 'inset(0 0 0 0)' }}>
                  {glitchText}
                </span>
                <span className="relative">{glitchText}</span>
              </span>
            </h1>
          </div>
          
          <p className="text-xl text-cyan-300 max-w-2xl mx-auto leading-relaxed">
            Pushing the boundaries through innovative design and cutting-edge technology
          </p>
          
          <div className="flex gap-6 justify-center mt-12">
            <a href="#projects" className="group relative px-8 py-4 overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transition-transform group-hover:scale-110" />
              <span className="relative z-10 flex items-center gap-2 font-bold">
                VIEW WORK <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a href="#contact" className="relative px-8 py-4 border-2 border-cyan-500 hover:bg-cyan-500/20 transition-colors">
              <span className="font-bold">GET IN TOUCH</span>
            </a>
          </div>
        </div>
        
        <ChevronDown className="absolute bottom-8 left-1/2 -translate-x-1/2 w-8 h-8 animate-bounce text-cyan-400" />
      </section>
      
      {/* About Section */}
      <section id="about" className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-black mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            ABOUT ME
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a full-stack developer and creative technologist obsessed with crafting 
                extraordinary digital experiences that blur the line between art and technology.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With expertise in 3D graphics, machine learning, and interactive design, 
                I transform complex ideas into intuitive, visually stunning applications that 
                captivate and inspire.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gray-900 p-8 rounded-lg border border-cyan-900/50">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-cyan-400">50+</div>
                    <div className="text-gray-400">Projects</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-400">5+</div>
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
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-24 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-black mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            SKILLS & EXPERTISE
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group">
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
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 group-hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]"
                    style={{ width: `${skill.level}%` }}
                  />
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                       style={{
                         background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
                         animation: 'slide 1s linear infinite',
                       }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-black mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            FEATURED PROJECTS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl"
                     style={{ backgroundImage: `linear-gradient(to right, ${project.color.split(' ')[1]}, ${project.color.split(' ')[3]})` }}
                />
                <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2">
                  <div className={`h-2 w-full bg-gradient-to-r ${project.color} rounded-full mb-6`} />
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            LET'S CREATE SOMETHING AMAZING
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to push the boundaries of what's possible? Let's connect and bring your vision to life.
          </p>
          <div className="flex gap-8 justify-center">
            <a href="mailto:hello@example.com" className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all">
              <Mail className="w-5 h-5" />
              <span className="font-bold">Email Me</span>
            </a>
            <a href="#" className="group flex items-center gap-3 px-6 py-3 border-2 border-cyan-500 rounded-lg hover:bg-cyan-500/20 transition-all">
              <Github className="w-5 h-5" />
              <span className="font-bold">GitHub</span>
            </a>
            <a href="#" className="group flex items-center gap-3 px-6 py-3 border-2 border-cyan-500 rounded-lg hover:bg-cyan-500/20 transition-all">
              <Linkedin className="w-5 h-5" />
              <span className="font-bold">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(-20px);
          }
          to {
            transform: translateX(20px);
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;