"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Smartphone, 
  Code, 
  Database, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight,
  Star,
  Crown,
  Sparkles,
  Layers,
  Palette,
  Rocket,
  Wifi,
  Camera,
  Headphones,
  Settings,
  MessageCircle,
  Download,
  Play,
  Pause,
  Volume2,
  Battery,
  Wifi as WifiIcon,
  Signal
} from "lucide-react";

export default function AppDevelopment() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const appFeatures = [
    {
      id: 1,
      title: "Native iOS Apps",
      description: "Swift & Objective-C development",
      price: "Premium",
      artist: "iOS Team",
      icon: <Smartphone className="w-6 h-6" />,
      borderColor: "border-blue-400",
      badgeColor: "bg-blue-500",
      gradient: "from-blue-500/20 to-cyan-500/20",
      delay: 0.1,
      features: ["SwiftUI", "Core Data", "ARKit", "HealthKit"]
    },
    {
      id: 2,
      title: "Android Development",
      description: "Kotlin & Java expertise",
      price: "Premium",
      artist: "Android Team",
      icon: <Code className="w-6 h-6" />,
      borderColor: "border-green-400",
      badgeColor: "bg-green-500",
      gradient: "from-green-500/20 to-emerald-500/20",
      delay: 0.2,
      features: ["Jetpack Compose", "Room DB", "Material Design", "Firebase"]
    },
    {
      id: 3,
      title: "Cross-Platform",
      description: "React Native & Flutter",
      price: "Pro",
      artist: "Cross-Platform Team",
      icon: <Layers className="w-6 h-6" />,
      borderColor: "border-purple-400",
      badgeColor: "bg-purple-500",
      gradient: "from-purple-500/20 to-pink-500/20",
      delay: 0.3,
      features: ["React Native", "Flutter", "Xamarin", "Ionic"]
    },
    {
      id: 4,
      title: "Backend Services",
      description: "Scalable cloud infrastructure",
      price: "Enterprise",
      artist: "Backend Team",
      icon: <Database className="w-6 h-6" />,
      borderColor: "border-cyan-400",
      badgeColor: "bg-cyan-500",
      gradient: "from-cyan-500/20 to-blue-500/20",
      delay: 0.4,
      features: ["Node.js", "Python", "AWS", "Docker"]
    },
    {
      id: 5,
      title: "UI/UX Design",
      description: "Beautiful user interfaces",
      price: "Design",
      artist: "Design Team",
      icon: <Palette className="w-6 h-6" />,
      borderColor: "border-pink-400",
      badgeColor: "bg-pink-500",
      gradient: "from-pink-500/20 to-purple-500/20",
      delay: 0.5,
      features: ["Figma", "Sketch", "Adobe XD", "Prototyping"]
    },
    {
      id: 6,
      title: "App Store Optimization",
      description: "Maximize app visibility",
      price: "Marketing",
      artist: "ASO Team",
      icon: <Rocket className="w-6 h-6" />,
      borderColor: "border-orange-400",
      badgeColor: "bg-orange-500",
      gradient: "from-orange-500/20 to-red-500/20",
      delay: 0.6,
      features: ["Keywords", "Screenshots", "Reviews", "Analytics"]
    }
  ];

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
        {[...Array(70)].map((_, i) => (
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
        {[...Array(150)].map((_, i) => (
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              App
            </span>
            <span className="text-white ml-4">Development</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into powerful mobile applications with our comprehensive development services
          </p>
        </motion.div>

        {/* Mobile Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="relative">
            {/* Phone Frame */}
            <motion.div
              className="relative w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Screen */}
              <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-4 py-2 text-white text-xs">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <Signal className="w-3 h-3" />
                    <WifiIcon className="w-3 h-3" />
                    <Battery className="w-4 h-2" />
                  </div>
                </div>
                
                {/* App Content */}
                <div className="p-4">
                  <motion.div
                    className="text-center mb-6"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg">Omnifier App</h3>
                    <p className="text-gray-400 text-sm">AI Voice Assistant</p>
                  </motion.div>
                  
                  {/* App Features */}
                  <div className="space-y-3">
                    {[
                      { icon: <MessageCircle className="w-4 h-4" />, text: "Voice Chat" },
                      { icon: <Camera className="w-4 h-4" />, text: "Video Calls" },
                      { icon: <Headphones className="w-4 h-4" />, text: "Audio Processing" },
                      { icon: <Settings className="w-4 h-4" />, text: "Settings" }
                    ].map((feature, index) => (
                      <motion.div
                        key={feature.text}
                        className="flex items-center gap-3 p-2 bg-gray-800/50 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <div className="text-purple-400">{feature.icon}</div>
                        <span className="text-white text-sm">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-30" />
              </div>
              
              {/* Glowing Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-purple-400"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(147, 51, 234, 0.3)",
                    "0 0 40px rgba(147, 51, 234, 0.6)",
                    "0 0 20px rgba(147, 51, 234, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            
            {/* Floating Elements */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-purple-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* App Development Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {appFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className={`relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border-2 ${feature.borderColor}/50 hover:${feature.borderColor} transition-all duration-300 h-full`}>
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Badge */}
                <motion.div
                  className={`absolute -top-2 -left-2 w-8 h-8 ${feature.badgeColor} rounded-full flex items-center justify-center z-10`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Star className="w-4 h-4 text-white" />
                </motion.div>

                {/* Icon Area */}
                <div className="relative mb-6 h-20 flex items-center justify-center">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </motion.div>
                  
                  {/* Floating Particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        y: [0, -15, 0],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-1 mb-4">
                    {feature.features.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        className="text-xs text-gray-300 bg-gray-800/50 px-2 py-1 rounded"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: feature.delay + techIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Price and Artist */}
                  <div className="flex justify-between items-center">
                    <div className="text-purple-400 font-bold text-lg">
                      {feature.price}
                    </div>
                    <div className="text-gray-300 text-sm">
                      {feature.artist}
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 -translate-x-full group-hover:translate-x-full" />
              </div>
            </motion.div>
          ))}
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
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-white flex items-center justify-center gap-4">
                Ready to build your dream app?
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Rocket className="w-8 h-8 text-purple-400" />
                </motion.div>
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                From concept to App Store, we'll bring your vision to life
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/portfolio#contact" passHref legacyBehavior>
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-2xl overflow-hidden cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center gap-3">
                      <Download className="w-5 h-5" />
                      Start Development
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </motion.a>
                </Link>

                <Link href="/portfolio" passHref legacyBehavior>
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400/10 transition-colors duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <Play className="w-5 h-5" />
                      View Portfolio
                    </div>
                  </motion.a>
                </Link>
              </div>
            </div>
            
            {/* Floating Sparkles */}
            {[...Array(10)].map((_, i) => (
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
