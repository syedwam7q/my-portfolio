/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core cyber colors
        'cyber-blue': '#00FFFF',
        'cyber-pink': '#FF00FF',
        'cyber-purple': '#9900FF',
        'cyber-yellow': '#FFFF00',
        'cyber-green': '#00FF66',
        'cyber-orange': '#FF6600',
        
        // Dark theme colors
        'dark-blue': '#001B2E',
        'dark-purple': '#1A0B2E',
        'dark-cyan': '#003333',
        'dark-gray': '#121212',
        
        // Light theme colors
        'light-blue': '#E6FFFF',
        'light-purple': '#F2E6FF',
        'light-cyan': '#E6FFFF',
        'light-gray': '#F5F5F5',
        
        // Gradient stops
        'gradient-blue-start': '#0099FF',
        'gradient-blue-end': '#0033FF',
        'gradient-cyan-start': '#00FFFF',
        'gradient-cyan-end': '#00CCFF',
        'gradient-purple-start': '#9900FF',
        'gradient-purple-end': '#6600FF',
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'scan-line': 'scan-line 4s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'fadeInUp': 'fadeInUp 0.5s ease-in-out',
        'fadeInDown': 'fadeInDown 0.5s ease-in-out',
        'fadeInLeft': 'fadeInLeft 0.5s ease-in-out',
        'fadeInRight': 'fadeInRight 0.5s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 8s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-5px, 5px)' },
          '40%': { transform: 'translate(-5px, -5px)' },
          '60%': { transform: 'translate(5px, 5px)' },
          '80%': { transform: 'translate(5px, -5px)' },
        },
        'scan-line': {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
        'pulse-glow': {
          '0%, 100%': { filter: 'brightness(1) drop-shadow(0 0 5px rgba(0, 255, 255, 0.7))' },
          '50%': { filter: 'brightness(1.2) drop-shadow(0 0 20px rgba(0, 255, 255, 1))' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fadeInUp': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fadeInDown': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fadeInLeft': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fadeInRight': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'cyber-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'cyber-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'neon-cyan': '0 0 5px theme("colors.cyber-blue"), 0 0 20px rgba(0, 255, 255, 0.3)',
        'neon-purple': '0 0 5px theme("colors.cyber-purple"), 0 0 20px rgba(153, 0, 255, 0.3)',
        'neon-pink': '0 0 5px theme("colors.cyber-pink"), 0 0 20px rgba(255, 0, 255, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(0, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
}