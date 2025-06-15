import React, { useEffect, useRef, useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [isHovering, setIsHovering] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

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

  // Remove mouse tracking for particles to improve usability
  useEffect(() => {
    // No mouse tracking for particles - this improves usability
    setMousePosition({ x: null, y: null });
    setIsHovering(false);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    // Reduce particle count on mobile for better performance
    const particleCount = isMobile ? 40 : 120;
    
    // Connection line settings
    const maxDistance = isMobile ? 100 : 150;
    const connectionOpacity = isDarkMode ? 0.15 : 0.1;
    
    // Get color palette based on theme
    const getColorPalette = () => {
      if (isDarkMode) {
        return {
          primary: {
            r: 0,
            g: 255,
            b: 255,
            name: 'cyan'
          },
          secondary: {
            r: 0,
            g: 100,
            b: 255,
            name: 'blue'
          },
          accent: {
            r: 153,
            g: 0,
            b: 255,
            name: 'purple'
          }
        };
      } else {
        return {
          primary: {
            r: 0,
            g: 112,
            b: 243,
            name: 'blue'
          },
          secondary: {
            r: 79,
            g: 70,
            b: 229,
            name: 'indigo'
          },
          accent: {
            r: 236,
            g: 72,
            b: 153,
            name: 'pink'
          }
        };
      }
    };
    
    const colorPalette = getColorPalette();
    
    class ParticleClass {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * (isMobile ? 1.5 : 2);
        this.baseSize = this.size;
        this.speedX = Math.random() * (isMobile ? 1 : 1.5) - (isMobile ? 0.5 : 0.75);
        this.speedY = Math.random() * (isMobile ? 1 : 1.5) - (isMobile ? 0.5 : 0.75);
        this.opacity = Math.random() * 0.5 + 0.2;
        this.baseOpacity = this.opacity;
        
        // Random color variation based on theme
        const colorChoice = Math.random();
        if (colorChoice < 0.6) {
          // Primary color variations
          const primary = colorPalette.primary;
          this.color = {
            r: primary.r,
            g: primary.name === 'cyan' ? Math.floor(Math.random() * 55) + 200 : primary.g,
            b: primary.name === 'cyan' ? Math.floor(Math.random() * 55) + 200 : primary.b
          };
        } else if (colorChoice < 0.9) {
          // Secondary color variations
          const secondary = colorPalette.secondary;
          this.color = {
            r: secondary.r,
            g: secondary.g,
            b: secondary.b
          };
        } else {
          // Accent color variations
          const accent = colorPalette.accent;
          this.color = {
            r: accent.r,
            g: accent.g,
            b: accent.b
          };
        }
      }
      
      update() {
        // Normal movement
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Wrap around screen edges
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
        
        // No mouse interaction - particles move independently
        // This makes the site much more usable
      }
      
      draw() {
        if (!ctx) return;
        
        // Safety check to ensure coordinates and size are valid numbers
        if (isNaN(this.x) || isNaN(this.y) || isNaN(this.size) || this.size <= 0) {
          return;
        }
        
        // Draw particle with its color
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
        ctx.beginPath();
        try {
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        } catch (error) {
          console.error("Error drawing particle:", error);
          // Reset particle to valid state
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * (isMobile ? 1.5 : 2);
        }
      }
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new ParticleClass());
    }
    
    // Function to draw connections between particles
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            // Calculate opacity based on distance
            const opacity = connectionOpacity * (1 - distance / maxDistance);
            
            // Create gradient for connection line
            const gradient = ctx.createLinearGradient(
              particles[i].x, 
              particles[i].y, 
              particles[j].x, 
              particles[j].y
            );
            
            gradient.addColorStop(0, `rgba(${particles[i].color.r}, ${particles[i].color.g}, ${particles[i].color.b}, ${opacity})`);
            gradient.addColorStop(1, `rgba(${particles[j].color.r}, ${particles[j].color.g}, ${particles[j].color.b}, ${opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = isDarkMode ? 0.5 : 0.4;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    let animationFrameId;
    
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw connections between particles
      connectParticles();
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isMobile, mousePosition, isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;