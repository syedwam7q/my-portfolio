import React, { createContext, useState, useEffect } from 'react';

// Create theme context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Default to dark mode
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Check for saved theme preference in localStorage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Check for system preference if no saved preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);
  
  // Update localStorage and apply theme class when theme changes
  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Apply theme class to document
    document.documentElement.classList.toggle('dark-theme', isDarkMode);
    document.documentElement.classList.toggle('light-theme', !isDarkMode);
    
    // Update meta theme-color for browser UI
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isDarkMode ? '#000000' : '#f5f5f5');
    }
  }, [isDarkMode]);
  
  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;