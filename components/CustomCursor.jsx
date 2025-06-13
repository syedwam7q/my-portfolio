import React, { useState, useEffect } from 'react';

const CustomCursor = ({ mousePos }) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if device is mobile
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
  
  // Don't render custom cursor on mobile devices
  if (isMobile) return null;
  
  return (
    <>
      {/* Main cursor */}
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
      
      {/* Trailing effect */}
      <div
        className="fixed w-10 h-10 rounded-full pointer-events-none opacity-30"
        style={{
          left: mousePos.x - 20,
          top: mousePos.y - 20,
          background: 'radial-gradient(circle, rgba(0,255,255,0.5) 0%, rgba(0,255,255,0) 70%)',
          zIndex: 9998,
          transition: 'transform 0.2s ease-out, left 0.1s linear, top 0.1s linear',
        }}
      />
    </>
  );
};

export default CustomCursor;