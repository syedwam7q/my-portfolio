import React, { useState, useEffect, useContext, useRef } from 'react';
import { Menu, X, ChevronRight, Home, User, Code, FileText, FolderOpen, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from './ThemeContext';

const Navigation = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);
  const navRef = useRef(null);
  
  // Navigation items with icons for better accessibility
  const navItems = [
    { id: 'hero', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <User className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Code className="w-4 h-4" /> },
    { id: 'resume', label: 'Resume', icon: <FileText className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <FolderOpen className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> }
  ];
  
  // Handle scroll effect for navigation bar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!mobileMenuOpen) return;
    
    const handleClickOutside = (e) => {
      // Check if click is outside the mobile menu container
      if (mobileMenuOpen && e.target.closest('.mobile-menu-container') === null && 
          e.target.closest('.mobile-menu-button') === null) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    // Prevent scrolling when mobile menu is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Skip if menu is not open
      if (!mobileMenuOpen) return;
      
      // Close menu on Escape key
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        return;
      }
      
      // Handle Tab key navigation
      if (e.key === 'Tab') {
        const focusableElements = navRef.current?.querySelectorAll(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        
        if (!focusableElements || focusableElements.length === 0) return;
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        // If Shift+Tab on first element, move to last element
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
        // If Tab on last element, move to first element
        else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Handle keyboard navigation for individual items
  const handleKeyDown = (e, item) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.location.href = `#${item}`;
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };
  
  // Get theme-specific styles
  const getThemeStyles = () => {
    return {
      nav: isDarkMode 
        ? `${scrolled ? 'py-2 bg-black/70 shadow-md' : 'py-4 bg-black/30'} border-cyan-900/50`
        : `${scrolled ? 'py-2 bg-white/80 shadow-md' : 'py-4 bg-white/50'} border-blue-900/20`,
      activeText: isDarkMode ? 'text-cyber-blue' : 'text-blue-600',
      inactiveText: isDarkMode ? 'text-white' : 'text-gray-800',
      hoverEffect: isDarkMode 
        ? 'from-gradient-cyan-start to-gradient-blue-end' 
        : 'from-blue-500 to-indigo-600',
      mobileMenuBg: isDarkMode 
        ? 'bg-gray-900/95 backdrop-blur-md' 
        : 'bg-gray-100/95 backdrop-blur-md',
      mobileMenuCard: isDarkMode
        ? 'bg-gradient-to-b from-black to-gray-900/95 border-cyan-900/30 shadow-cyan-900/20'
        : 'bg-gradient-to-b from-white to-gray-100/95 border-blue-900/20 shadow-blue-900/10'
    };
  };
  
  const styles = getThemeStyles();
  
  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${styles.nav}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold bg-gradient-to-r from-gradient-cyan-start to-gradient-blue-end bg-clip-text text-transparent"
          aria-label="Syed Wamiq - Back to top"
        >
          SYED WAMIQ<span className="text-cyber-blue">.</span>
        </motion.a>
        
        {/* Desktop Navigation */}
        <div 
          className="hidden md:flex gap-8"
          role="menubar"
          aria-label="Desktop Navigation Menu"
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className={`relative group cursor-pointer flex items-center gap-2 ${
                activeSection === item.id ? styles.activeText : styles.inactiveText
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              aria-label={`Navigate to ${item.label} section`}
              aria-current={activeSection === item.id ? 'page' : undefined}
              role="menuitem"
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
            >
              <span className="opacity-70">{item.icon}</span>
              <span className="relative z-10">
                {item.label}
              </span>
              <span className={`absolute inset-0 bg-gradient-to-r ${styles.hoverEffect} opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-300 ${
                activeSection === item.id ? 'opacity-5' : ''
              }`} />
              {activeSection === item.id && (
                <motion.span 
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r ${styles.hoverEffect}`}
                  layoutId="activeSection"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <motion.button 
          className={`md:hidden p-2 mobile-menu-button ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.9 }}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className={`md:hidden fixed inset-0 z-40 pt-20 mobile-menu-container ${styles.mobileMenuBg}`}
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <motion.div 
              className={`flex flex-col items-center gap-8 p-8 rounded-lg mx-4 shadow-inner border ${styles.mobileMenuCard}`}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              role="menu"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-xl font-bold transition-all duration-300 hover:text-cyber-blue flex items-center gap-3 ${
                    activeSection === item.id ? styles.activeText : styles.inactiveText
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.3,
                    delay: 0.2 + (index * 0.1)
                  }}
                  tabIndex={0}
                  role="menuitem"
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                  aria-label={`Navigate to ${item.label} section`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {activeSection === item.id ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    >
                      <ChevronRight className={`w-5 h-5 ${styles.activeText}`} />
                    </motion.div>
                  ) : (
                    <span className="w-5 h-5 flex items-center justify-center opacity-70">
                      {item.icon}
                    </span>
                  )}
                  <span className="relative">
                    {item.label}
                    {activeSection === item.id && (
                      <motion.span 
                        className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r ${styles.hoverEffect}`}
                        layoutId="activeMobileSection"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;