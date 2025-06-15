import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = ['hero', 'about', 'skills', 'resume', 'projects', 'contact'];
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-cyan-900/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          SYED WAMIQ<span className="text-cyan-400">.</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`relative group cursor-pointer ${
                activeSection === item ? 'text-cyan-400' : 'text-white'
              }`}
            >
              <span className="relative z-10 capitalize">
                {item === 'hero' ? 'Home' : item}
              </span>
              <span className={`absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 ${
                activeSection === item ? 'opacity-30' : ''
              }`} />
              {activeSection === item && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500" />
              )}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-gray-900 backdrop-blur-md border-t border-cyan-500/50 pt-20 animate-fadeIn shadow-[0_4px_30px_rgba(0,255,255,0.1)]">
          <div className="flex flex-col items-center gap-8 p-8 bg-gradient-to-b from-black to-gray-900/95 rounded-lg mx-4 shadow-inner shadow-cyan-900/20 border border-cyan-900/30">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item}`}
                className={`text-2xl font-bold transition-all duration-300 animate-fadeInUp hover:text-cyan-400 ${
                  activeSection === item ? 'text-cyan-400' : 'text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
                style={{ 
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <span className="relative">
                  {item === 'hero' ? 'Home' : item}
                  {activeSection === item && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500" />
                  )}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;