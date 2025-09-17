"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Play, 
  Pause, 
  Volume2, 
  Download, 
  Upload, 
  Settings, 
  Zap, 
  Film, 
  Music, 
  Image as ImageIcon,
  ArrowRight,
  Star,
  Sparkles,
  Layers,
  Palette,
  Rocket,
  Camera,
  Headphones,
  Video,
  Mic,
  Wifi,
  Shield,
  Globe
} from "lucide-react";

export default function FFmpegFeatures() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const ffmpegFeatures = [
    {
      id: 1,
      title: "Video Conversion",
      description: "Convert between 200+ formats",
      image: "/pic1.png",
      color: "from-red-500 to-orange-500",
      bgColor: "from-red-500/20 to-orange-500/20",
      delay: 0.1,
      features: ["MP4", "AVI", "MOV", "MKV"]
    },
    {
      id: 2,
      title: "Audio Processing",
      description: "High-quality audio manipulation",
      image: "/pic2.png",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      delay: 0.2,
      features: ["MP3", "WAV", "FLAC", "AAC"]
    },
    {
      id: 3,
      title: "Image Sequences",
      description: "Create videos from images",
      image: "/pic3.png",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/20 to-emerald-500/20",
      delay: 0.3,
      features: ["PNG", "JPG", "GIF", "WebP"]
    },
    {
      id: 4,
      title: "Stream Processing",
      description: "Real-time media streaming",
      image: "/pic4.png",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/20 to-pink-500/20",
      delay: 0.4,
      features: ["RTMP", "HLS", "DASH", "WebRTC"]
    },
    {
      id: 5,
      title: "Video Effects",
      description: "Apply filters and effects",
      image: "/pic5.png",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-500/20 to-orange-500/20",
      delay: 0.5,
      features: ["Filters", "Transitions", "Color", "Scale"]
    },
    {
      id: 6,
      title: "Batch Processing",
      description: "Process multiple files",
      image: "/pic6.png",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-500/20 to-purple-500/20",
      delay: 0.6,
      features: ["Batch", "Queue", "Parallel", "Auto"]
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e] overflow-hidden">
      {/* Different Background Effects */}
      <div className="absolute inset-0 -z-20">
        {/* Interactive Background */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.2), transparent 40%)`
          }}
        />
        
        {/* Blue Gradient Overlays */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-900/20 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-900/15 to-transparent" />
        
        {/* Animated Orbs */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 80%)"
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating Tech Particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        {/* Tech Grid Pattern */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-blue-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
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
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              FFmpeg
            </span>
            <span className="text-white ml-4">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Powerful multimedia processing with industry-standard FFmpeg technology
          </p>
        </motion.div>

        {/* Two Column Layout - Details Left, Images Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  FFmpeg
                </span>
                <span className="text-white ml-2">Capabilities</span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Experience the power of industry-standard multimedia processing with our advanced FFmpeg integration
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              {ffmpegFeatures.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300"
                >
                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Star className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">
                      {feature.description}
                    </p>
                    
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {feature.features.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="text-xs text-blue-300 bg-blue-900/30 px-2 py-1 rounded-full border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Button */}
            <Link href="/contact" passHref legacyBehavior>
              <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-2xl overflow-hidden cursor-pointer inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-3">
                <Download className="w-5 h-5" />
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              </motion.a>
            </Link>
          </motion.div>

          {/* Right Side - Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* First Image */}
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden border-2 border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 shadow-2xl">
                <img
                  src="/pic1.png"
                  alt="FFmpeg Video Processing"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating Icons */}
                {[
                  <Play className="w-6 h-6" />,
                  <Volume2 className="w-6 h-6" />,
                  <Settings className="w-6 h-6" />,
                  <Zap className="w-6 h-6" />
                ].map((icon, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-white opacity-0 group-hover:opacity-100"
                    style={{
                      left: `${15 + i * 20}%`,
                      top: `${20 + (i % 2) * 30}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  >
                    {icon}
                  </motion.div>
                ))}
                
                {/* Corner Badge */}
                <motion.div
                  className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Film className="w-5 h-5 text-white" />
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

            {/* Second Image */}
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden border-2 border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 shadow-2xl">
                <img
                  src="/pic2.png"
                  alt="FFmpeg Audio Processing"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating Particles */}
                {[...Array(8)].map((_, i) => (
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
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
                
                {/* Corner Badge */}
                <motion.div
                  className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Music className="w-5 h-5 text-white" />
                </motion.div>

                {/* Glowing Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-purple-400"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(147, 51, 234, 0.3)",
                      "0 0 40px rgba(147, 51, 234, 0.6)",
                      "0 0 20px rgba(147, 51, 234, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
