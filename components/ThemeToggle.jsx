import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { ThemeContext } from './ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  
  return (
    <motion.button 
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg backdrop-blur-md transition-colors duration-300 border"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        background: isDarkMode ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        borderColor: isDarkMode ? 'rgba(0, 255, 255, 0.3)' : 'rgba(59, 130, 246, 0.3)',
      }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDarkMode ? 0 : 180 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-blue-600" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;