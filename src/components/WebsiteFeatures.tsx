"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  Code, 
  Smartphone, 
  Database, 
  Shield, 
  Zap, 
  ArrowRight,
  Star,
  Crown,
  Sparkles,
  Layers,
  Palette,
  Rocket,
  Cloud
} from "lucide-react";

export default function WebsiteFeatures() {
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
        {[...Array(60)].map((_, i) => (
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
        {[...Array(120)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Two Column Layout - Heading Left, Cards Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Side - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Website
                </span>
                <br />
                <span className="text-white">Features</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Discover our comprehensive suite of website development features and services designed to bring your vision to life
              </p>
            </div>

            {/* Additional Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300">Modern & Responsive Design</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-gray-300">Fast Performance & Security</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">Cloud Integration & Scalability</span>
              </div>
            </div>

            {/* Action Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-3">
                <Code className="w-5 h-5" />
                Explore Features
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.button>
          </motion.div>

          {/* Right Side - 4 Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Responsive Design",
                description: "Mobile-first approach for all devices with perfect scaling across platforms",
                color: "from-blue-400 to-cyan-400",
                bgColor: "from-blue-500/20 to-cyan-500/20",
                delay: 0.1
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Modern UI/UX",
                description: "Beautiful and intuitive user interfaces that engage and convert visitors",
                color: "from-purple-400 to-pink-400",
                bgColor: "from-purple-500/20 to-pink-500/20",
                delay: 0.2
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Fast Performance",
                description: "Optimized for speed and efficiency with lightning-fast load times",
                color: "from-yellow-400 to-orange-400",
                bgColor: "from-yellow-500/20 to-orange-500/20",
                delay: 0.3
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Secure Backend",
                description: "Enterprise-grade security features to protect your data and users",
                color: "from-green-400 to-emerald-400",
                bgColor: "from-green-500/20 to-emerald-500/20",
                delay: 0.4
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="relative z-10 flex items-start gap-4">
                    {/* Icon */}
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 -translate-x-full group-hover:translate-x-full" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>


        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative p-10 bg-gradient-to-br from-gray-800/80 to-black/80 rounded-3xl shadow-2xl backdrop-blur-lg text-center border border-gray-700/50">
            {/* Glowing Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Floating Sparkles */}
            {[...Array(8)].map((_, i) => (
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
