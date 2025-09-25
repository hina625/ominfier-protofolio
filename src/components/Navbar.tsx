"use client";

import React, { useState, useEffect } from "react";

// Glowing cursor-follow effect for the whole app
function CursorGlow() {
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  React.useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return (
    <div
      className="custom-cursor"
      style={{
        transform: `translate(${pos.x - 18}px, ${pos.y - 18}px)`
      }}
    />
  );
}
import { motion } from "framer-motion";
import { 
  Bot, 
  Menu, 
  X, 
  ArrowRight,
  Home,
  User,
  Briefcase,
  MessageCircle,
  Settings
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    { name: "About", href: "/about", icon: <User className="w-4 h-4" /> },
    { name: "Portfolio", href: "/portfolio", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Contact", href: "/contact", icon: <MessageCircle className="w-4 h-4" /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`mobile-menu-container fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
      style={{
        boxShadow: isScrolled ? '0 4px 32px 0 rgba(147,51,234,0.10)' : 'none',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
      }}
    >
      {/* Glowing cursor-follow effect */}
      <style>{`
        .custom-cursor {
          pointer-events: none;
          position: fixed;
          z-index: 9999;
          left: 0; top: 0;
          width: 36px; height: 36px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(236,72,153,0.25) 0%, rgba(147,51,234,0.18) 60%, transparent 100%);
          box-shadow: 0 0 24px 8px rgba(147,51,234,0.12);
          mix-blend-mode: lighten;
          transition: transform 0.13s cubic-bezier(.4,2,.6,1), opacity 0.2s;
          opacity: 0.7;
          pointer-events: none;
        }
        .nav-underline {
          position: absolute;
          left: 0; bottom: -2px;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #a21caf 0%, #ec4899 100%);
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.3s cubic-bezier(.4,2,.6,1);
        }
        .nav-link:hover .nav-underline, .nav-link:focus .nav-underline {
          transform: scaleX(1);
        }
      `}</style>
      <CursorGlow />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
              <Bot className="w-6 h-6 text-white" />
              </div>
            <span className="text-2xl font-bold text-white">Omnifier</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="relative flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 group nav-link focus:outline-none"
                tabIndex={0}
              >
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="font-medium">{item.name}</span>
                <span className="nav-underline" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="/contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Settings className="w-4 h-4" />
             Get started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1,
              height: 'auto'
            }}
            exit={{ 
              opacity: 0,
              height: 0
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black/90 backdrop-blur-lg border-t border-white/10"
          >
            <div className="py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1,
                    x: 0
                  }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-white/5 mx-2"
                >
                  <span className="text-purple-400">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </motion.a>
              ))}
              
              <motion.a
                href="/login"
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1,
                  x: 0
                }}
                transition={{ duration: 0.3, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mx-2 mt-4 flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg"
              >
                <Settings className="w-4 h-4" />
                Login
                <ArrowRight className="w-4 h-4 ml-auto" />
              </motion.a>
            </div>
          </motion.div>
        )}
            </div>

      {/* Background Blur Effect */}
      {isScrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-black/20 backdrop-blur-sm -z-10"
        />
      )}
    </motion.nav>
  );
}