import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isDarkMode } = useContext(ThemeContext);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = document.documentElement.scrollTop;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial calculation
    handleScroll();
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[60]">
      <div 
        className={`h-full ${
          isDarkMode 
            ? 'bg-gradient-to-r from-gradient-cyan-start via-gradient-blue-start to-gradient-purple-start shadow-neon-cyan' 
            : 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-md'
        }`}
        style={{ width: `${scrollProgress}%`, transition: 'width 0.1s ease-out' }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Page scroll progress"
      />
    </div>
  );
};

export default ScrollProgress;