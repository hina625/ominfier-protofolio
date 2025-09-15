"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Sparkles, Zap } from "lucide-react";

export default function DigitalArtShowcase() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 gradient-bg overflow-hidden">
      {/* Enhanced Galaxy Background Effects */}
      <div className="absolute inset-0 -z-20">
        {/* Interactive Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.3), transparent 50%)`
          }}
        />
        
        {/* Purple Galaxy Gradients */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-purple-900/20 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-900/10 to-transparent" />
        
        {/* Galaxy Nebula Effects */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 80%)"
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating Galaxy Particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Galaxy Stars */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: i % 3 === 0 ? 'rgba(147, 51, 234, 0.8)' : 
                             i % 3 === 1 ? 'rgba(236, 72, 153, 0.6)' : 'rgba(255, 255, 255, 0.4)',
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Digital Art Pieces */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-4xl lg:text-6xl font-bold mb-4">
                <span className="text-white">Meet the </span>
                <br />
                <span className="text-white"> Intelligent of </span>
                <br />
                <span className="text-purple-400 flex items-center gap-2">
                  AI agents
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-8 h-8" />
                  </motion.div>
                </span>
              </h2>
            </motion.div>

            {/* Art Pieces Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Art Piece 1 - Blue Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-blue-400/50 shadow-2xl">
                  {/* Image */}
                  <motion.div
                    className="relative w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/pic1.png"
                      alt="Digital Art 1"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent" />
                    
                    {/* Floating Particles */}
                    {[...Array(15)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  {/* Glowing Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-blue-400"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                        "0 0 40px rgba(59, 130, 246, 0.6)",
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              {/* Art Piece 2 - Pink Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-pink-400/50 shadow-2xl">
                  {/* Image */}
                  <motion.div
                    className="relative w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/pic2.png"
                      alt="Digital Art 2"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent" />
                    
                    {/* Floating Sparkles */}
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-pink-400 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  {/* Glowing Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-pink-400"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(236, 72, 153, 0.3)",
                        "0 0 40px rgba(236, 72, 153, 0.6)",
                        "0 0 20px rgba(236, 72, 153, 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              {/* Art Piece 3 - Teal Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-teal-400/50 shadow-2xl">
                  {/* Image */}
                  <motion.div
                    className="relative w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/pic3.png"
                      alt="Digital Art 3"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent" />
                    
                    {/* Floating Particles */}
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-teal-400 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          x: [0, Math.random() * 20 - 10, 0],
                          y: [0, Math.random() * 20 - 10, 0],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  {/* Glowing Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-teal-400"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(20, 184, 166, 0.3)",
                        "0 0 40px rgba(20, 184, 166, 0.6)",
                        "0 0 20px rgba(20, 184, 166, 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Call to Action Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Dark Panel */}
              <motion.div
                className="relative p-8 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl backdrop-blur-sm border border-gray-700/50 shadow-2xl"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glowing Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">Meet the future</h3>
                  <h3 className="text-2xl font-bold text-white mb-2">of intelligent</h3>
                  <div className="flex items-center gap-2 mb-8">
                    <h3 className="text-2xl font-bold text-purple-400">AI agents</h3>
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Sparkles className="w-6 h-6 text-purple-400" />
                    </motion.div>
                  </div>
                  
                  {/* Start Button */}
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-xl flex items-center justify-between group"
                  >
                    <span>Start Journey</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                </div>
                
                {/* Floating Sparkles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-400 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
