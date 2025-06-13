import React from 'react';

const CustomCursor = ({ mousePos }) => {
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