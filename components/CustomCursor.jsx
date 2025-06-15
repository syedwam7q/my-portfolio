import React, { useState, useEffect, useRef, useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const CustomCursor = ({ mousePos: initialMousePos }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOverLink, setIsOverLink] = useState(false);
  const [isOverButton, setIsOverButton] = useState(false);
  const [isOverInput, setIsOverInput] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const { isDarkMode } = useContext(ThemeContext);
  
  // Refs for cursor elements
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  
  // Use RAF for smoother cursor movement
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const mousePos = useRef(initialMousePos || { x: 0, y: 0 });
  
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
  
  // Handle mouse movement with RAF for smoother performance
  useEffect(() => {
    if (isMobile || !isEnabled) return;
    
    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;
    
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    
    const animateCursor = (time) => {
      if (previousTimeRef.current !== undefined) {
        // Both dot and ring follow cursor exactly at the same position
        // This ensures perfect alignment
        dotX = mousePos.current.x;
        dotY = mousePos.current.y;
        ringX = mousePos.current.x;
        ringY = mousePos.current.y;
        
        // Apply transforms directly to DOM for better performance
        if (dotRef.current) {
          dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
        }
        
        if (ringRef.current) {
          ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
        }
      }
      
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateCursor);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animateCursor);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, [isMobile, isEnabled]);
  
  // Update mousePos ref when prop changes
  useEffect(() => {
    if (initialMousePos) {
      mousePos.current = initialMousePos;
    }
  }, [initialMousePos]);
  
  // Track when cursor is over interactive elements
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseOver = (e) => {
      const target = e.target;
      
      // Check if cursor is over a link
      if (target.tagName === 'A' || target.closest('a')) {
        setIsOverLink(true);
      } else {
        setIsOverLink(false);
      }
      
      // Check if cursor is over a button
      if (target.tagName === 'BUTTON' || target.closest('button') || 
          target.getAttribute('role') === 'button' || target.closest('[role="button"]')) {
        setIsOverButton(true);
      } else {
        setIsOverButton(false);
      }
      
      // Check if cursor is over an input or interactive element
      if (
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.tagName === 'SELECT' || 
        target.isContentEditable ||
        target.closest('input, textarea, select, [contenteditable="true"]')
      ) {
        setIsOverInput(true);
      } else {
        setIsOverInput(false);
      }
    };
    
    document.addEventListener('mouseover', handleMouseOver);
    
    // Add keyboard shortcut to toggle cursor (Shift + C)
    const handleKeyDown = (e) => {
      if (e.shiftKey && e.key === 'C') {
        setIsEnabled(prev => !prev);
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobile]);
  
  // Don't render custom cursor on mobile devices or when disabled
  if (isMobile || !isEnabled) return null;
  
  // Don't show custom cursor when over inputs
  if (isOverInput) return null;
  
  // Get theme-specific cursor styles
  const getCursorStyles = () => {
    return {
      dot: {
        backgroundColor: isDarkMode ? 'rgba(0, 255, 255, 0.9)' : 'rgba(0, 112, 243, 0.9)',
        width: isOverLink || isOverButton ? '8px' : '6px',
        height: isOverLink || isOverButton ? '8px' : '6px',
        opacity: 0.9,
        boxShadow: isDarkMode ? '0 0 5px rgba(0, 255, 255, 0.5)' : '0 0 5px rgba(0, 112, 243, 0.5)',
      },
      ring: {
        borderColor: isDarkMode ? 'rgba(0, 255, 255, 0.6)' : 'rgba(0, 112, 243, 0.6)',
        width: isOverLink || isOverButton ? '32px' : '26px',
        height: isOverLink || isOverButton ? '32px' : '26px',
        opacity: isOverLink || isOverButton ? 0.7 : 0.4,
        borderWidth: '1.5px',
      }
    };
  };
  
  const styles = getCursorStyles();
  
  return (
    <>
      {/* Dot cursor - enhanced with glow effect */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none transition-colors duration-150"
        style={{
          width: styles.dot.width,
          height: styles.dot.height,
          backgroundColor: styles.dot.backgroundColor,
          boxShadow: styles.dot.boxShadow,
          zIndex: 9999,
          opacity: styles.dot.opacity,
          willChange: 'transform',
        }}
        aria-hidden="true"
      />
      
      {/* Ring cursor - enhanced with better visibility */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none border"
        style={{
          width: styles.ring.width,
          height: styles.ring.height,
          borderColor: styles.ring.borderColor,
          borderWidth: styles.ring.borderWidth,
          zIndex: 9998,
          opacity: styles.ring.opacity,
          willChange: 'transform',
          boxShadow: isDarkMode ? '0 0 10px rgba(0, 255, 255, 0.1)' : '0 0 10px rgba(0, 112, 243, 0.1)',
          transitionProperty: 'width, height, border-color, opacity',
          transitionDuration: '0.2s',
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;