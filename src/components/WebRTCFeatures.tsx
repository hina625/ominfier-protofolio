"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Video, 
  Mic, 
  Users, 
  Shield, 
  Zap, 
  Globe, 
  Smartphone, 
  Wifi,
  Camera,
  Headphones,
  Settings,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Star,
  Crown,
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Phone,
  PhoneOff
} from "lucide-react";

export default function WebRTCFeatures() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVolumeOn, setIsVolumeOn] = useState(true);
  const [isCallActive, setIsCallActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    setIsCallActive(true);
    // Reset all states when opening
    setIsVideoOn(true);
    setIsMicOn(true);
    setIsVolumeOn(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsCallActive(false);
    setIsVideoOn(true);
    setIsMicOn(true);
    setIsVolumeOn(true);
  };

  const features = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "HD Video Calls",
      description: "Crystal clear 1080p video streaming with adaptive bitrate",
      color: "from-purple-400 to-pink-400",
      bgColor: "from-purple-500/20 to-pink-500/20",
      delay: 0.1
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Noise Cancellation",
      description: "AI-powered noise reduction for crystal clear audio",
      color: "from-cyan-400 to-blue-400",
      bgColor: "from-cyan-500/20 to-blue-500/20",
      delay: 0.2
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-User Rooms",
      description: "Support for up to 100 participants in a single call",
      color: "from-pink-400 to-purple-400",
      bgColor: "from-pink-500/20 to-purple-500/20",
      delay: 0.3
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "End-to-End Encryption",
      description: "Military-grade security for all your communications",
      color: "from-indigo-400 to-purple-400",
      bgColor: "from-indigo-500/20 to-purple-500/20",
      delay: 0.4
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
          
          {/* 3D Animated Head with Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Image Container */}
              <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-purple-400/50 shadow-2xl"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/pic4.png"
                  alt="WebRTC Technology"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
                
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
              </motion.div>
              
              {/* Background Glow */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  WebRTC
                </span>
                <span className="text-white ml-4">Features</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Experience the next generation of real-time communication with our advanced WebRTC technology
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative"
                >
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-300 h-full">
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    {/* Icon */}
                    <motion.div
                      className={`relative z-10 w-12 h-12 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 -translate-x-full group-hover:translate-x-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action Panel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
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
                Ready to experience the future?
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-8 h-8 text-purple-400" />
                </motion.div>
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Join millions of users experiencing next-generation real-time communication
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openModal}
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-2xl overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center gap-3">
                    <Video className="w-5 h-5" />
                    Start Video Call
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400/10 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <Settings className="w-5 h-5" />
                    Configure Settings
                  </div>
                </motion.button>
              </div>
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
          </div>
        </motion.div>
      </div>

      {/* Video Call Demo Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-4xl h-[80vh] bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl border border-purple-400/30 overflow-hidden"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700/50 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                <span className="ml-4 text-white font-semibold text-lg">WebRTC Demo Call</span>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-700/50 rounded-full transition-colors group"
              >
                <X className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Video Area */}
            <div className="relative flex-1 p-6">
              <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
                {/* Demo Video Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-pink-900/40 flex items-center justify-center">
                  <motion.div 
                    className="text-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div 
                      className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto border-4 border-white/20"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Video className="w-16 h-16 text-white" />
                    </motion.div>
                    <p className="text-white text-lg font-semibold mb-2">Demo Video Call</p>
                    <p className="text-gray-300 text-sm mb-4">WebRTC Technology in Action</p>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm">Connected</span>
                    </div>
                  </motion.div>
                </div>

                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  {/* Top Status Bar */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <div className="flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm">Live</span>
                    </div>
                    <div className="flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full">
                      <Users className="w-4 h-4 text-white" />
                      <span className="text-white text-sm">2 participants</span>
                    </div>
                  </div>

                  {/* Bottom Controls */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center gap-4 bg-black/70 px-6 py-3 rounded-full backdrop-blur-sm">
                      {/* Mic Toggle */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMicOn(!isMicOn)}
                        className={`p-3 rounded-full transition-colors ${
                          isMicOn ? 'bg-gray-600 hover:bg-gray-500' : 'bg-red-600 hover:bg-red-500'
                        }`}
                      >
                        {isMicOn ? (
                          <Mic className="w-5 h-5 text-white" />
                        ) : (
                          <Mic className="w-5 h-5 text-white" />
                        )}
                      </motion.button>

                      {/* Video Toggle */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsVideoOn(!isVideoOn)}
                        className={`p-3 rounded-full transition-colors ${
                          isVideoOn ? 'bg-gray-600 hover:bg-gray-500' : 'bg-red-600 hover:bg-red-500'
                        }`}
                      >
                        {isVideoOn ? (
                          <Video className="w-5 h-5 text-white" />
                        ) : (
                          <Video className="w-5 h-5 text-white" />
                        )}
                      </motion.button>

                      {/* Volume Toggle */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsVolumeOn(!isVolumeOn)}
                        className={`p-3 rounded-full transition-colors ${
                          isVolumeOn ? 'bg-gray-600 hover:bg-gray-500' : 'bg-red-600 hover:bg-red-500'
                        }`}
                      >
                        {isVolumeOn ? (
                          <Volume2 className="w-5 h-5 text-white" />
                        ) : (
                          <VolumeX className="w-5 h-5 text-white" />
                        )}
                      </motion.button>

                      {/* End Call Button */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={closeModal}
                        className="p-3 bg-red-600 hover:bg-red-500 rounded-full transition-colors"
                      >
                        <PhoneOff className="w-5 h-5 text-white" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Side Panel */}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="bg-black/70 p-4 rounded-2xl backdrop-blur-sm">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2">
                          <Users className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-white text-sm">You</p>
                        <div className="flex items-center gap-1 mt-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-green-400 text-xs">Connected</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Demo Features Overlay */}
                <div className="absolute top-20 left-4 space-y-2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-green-600/80 px-3 py-1 rounded-full text-white text-sm"
                  >
                    ✓ HD Video Active
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="bg-blue-600/80 px-3 py-1 rounded-full text-white text-sm"
                  >
                    ✓ Noise Cancellation On
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                    className="bg-purple-600/80 px-3 py-1 rounded-full text-white text-sm"
                  >
                    ✓ End-to-End Encrypted
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

    </section>
  );
}
