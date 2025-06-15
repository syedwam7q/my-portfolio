import React, { useState, useEffect, useRef, useContext } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code, Palette, Rocket, Cpu, Globe, Zap } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import CustomCursor from './CustomCursor';
import Navigation from './Navigation';
import ScrollProgress from './ScrollProgress';
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from './ThemeContext';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ResumeSection from './sections/ResumeSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse tracking (only on desktop)
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Intersection Observer for sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: isMobile ? 0.2 : 0.5,
        rootMargin: isMobile ? "-10% 0px" : "0px"
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [isMobile]);

  return (
    <div className={`relative min-h-screen overflow-hidden theme-transition ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <ParticleBackground />
      <CustomCursor mousePos={mousePos} />
      <ScrollProgress />
      <ThemeToggle />
      <div className="scan-line" />
      
      <Navigation activeSection={activeSection} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ResumeSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <footer className="relative z-10 py-6 text-center border-t backdrop-blur-sm theme-transition">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Syed Wamiq - Portfolio. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/syedwam7q" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub Profile" 
                className="text-gray-500 hover:text-cyber-blue dark:text-gray-400 dark:hover:text-cyber-blue transition-colors"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/syedwamiq" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn Profile" 
                className="text-gray-500 hover:text-cyber-blue dark:text-gray-400 dark:hover:text-cyber-blue transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:contact@syedwamiq.com" 
                aria-label="Email Contact" 
                className="text-gray-500 hover:text-cyber-blue dark:text-gray-400 dark:hover:text-cyber-blue transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;