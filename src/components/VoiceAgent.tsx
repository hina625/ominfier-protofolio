"use client";

import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  Bot, 
  Brain, 
  Sparkles, 
  Zap, 
  Settings, 
  Globe,
  Shield
} from "lucide-react";

export default function VoiceAgent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);



  const voiceFeatures = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Advanced AI models for data-driven insights and forecasting",
      color: "from-blue-400 to-cyan-400",
      delay: 0.1
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Workflow Automation",
      description: "Intelligent bots that streamline and optimize daily tasks",
      color: "from-purple-400 to-pink-400",
      delay: 0.2
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Smart Decision Making",
      description: "AI-powered recommendations for better business outcomes",
      color: "from-green-400 to-emerald-400",
      delay: 0.3
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Productivity Boost",
      description: "Reduce manual effort and maximize efficiency",
      color: "from-red-400 to-orange-400",
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
            Smarter workflows
            </span>
            <span className="text-white ml-4"> with AI and automation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Omnifier leverages advanced AI models and intelligent automation to optimize your daily tasks. From predictive analytics to workflow bots, it reduces manual effort, boosts productivity, and ensures smarter decision-making for businesses and individuals alike.
          </p>
        </motion.div>

        {/* Two Column Layout - Agent Visual Left, Features Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Agent Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-96 h-96">
              {/* Main Bot Body */}
              <motion.div
                className="relative w-full h-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm border-2 border-purple-400/50 shadow-2xl flex flex-col items-center justify-center p-8"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(147, 51, 234, 0.3)",
                    "0 0 40px rgba(147, 51, 234, 0.6)",
                    "0 0 20px rgba(147, 51, 234, 0.3)",
                  ],
                }}
              >
                {/* Bot Head */}
                <div className="relative w-32 h-32 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-purple-400/30 flex items-center justify-center mb-4">
                  <Bot className="w-16 h-16 text-purple-400" />
                  
                  {/* Animated LED Eyes */}
                  <motion.div
                    className="absolute top-4 left-6 w-3 h-3 bg-cyan-400 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute top-4 right-6 w-3 h-3 bg-cyan-400 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                  />
                  
                  {/* Bot Antenna */}
                  <motion.div
                    className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-purple-400"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Bot Body */}
                <div className="relative w-40 h-24 rounded-xl bg-gradient-to-br from-gray-600 to-gray-700 border border-purple-400/20 flex items-center justify-center">
                  {/* Chest Panel */}
                  <div className="w-32 h-16 rounded-lg bg-gradient-to-br from-gray-500 to-gray-600 border border-purple-400/30 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-1">
                      {[...Array(9)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-cyan-400 rounded-sm"
                          animate={{
                            opacity: [0.3, 1, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Side Panels */}
                  <div className="absolute -left-2 top-2 w-4 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-l-lg border-l-2 border-purple-400/30" />
                  <div className="absolute -right-2 top-2 w-4 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-r-lg border-r-2 border-purple-400/30" />
                </div>

                {/* Bot Arms */}
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-l-lg border-l-2 border-purple-400/30" />
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-r-lg border-r-2 border-purple-400/30" />
                
                {/* Bot Legs */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
                  <div className="w-8 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-t-lg border-t-2 border-purple-400/30" />
                  <div className="w-8 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-t-lg border-t-2 border-purple-400/30" />
                </div>

                {/* Bot Status Lights */}
                <div className="absolute top-2 right-2 flex gap-2">
                  <motion.div
                    className={`w-3 h-3 rounded-full ${
                      isActive ? 'bg-green-400' : 'bg-red-400'
                    }`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-yellow-400"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full bg-blue-400"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </div>

                {/* Bot Power Button */}
                <motion.button
                  className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsActive(!isActive)}
                >
                  <div className={`w-4 h-4 rounded-full ${isActive ? 'bg-white' : 'bg-gray-300'}`} />
                </motion.button>

                {/* Floating AI Icons */}
                {[
                  <Brain className="w-6 h-6" />,
                  <Globe className="w-6 h-6" />,
                  <Sparkles className="w-6 h-6" />,
                  <Zap className="w-6 h-6" />
                ].map((icon, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-cyan-400"
                    style={{
                      left: `${15 + i * 20}%`,
                      top: `${15 + (i % 2) * 35}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 180, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.8,
                    }}
                  >
                    {icon}
                  </motion.div>
                ))}

                {/* Bot Scanning Lines */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-cyan-400/30"
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Data Stream Effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-8 bg-gradient-to-b from-cyan-400 to-transparent"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: '-2rem',
                      }}
                      animate={{
                        y: ['-2rem', '26rem'],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
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

          {/* Right Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Professor Bot
                </span>
                <span className="text-white ml-2">Capabilities</span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Advanced AI platform with predictive analytics, workflow automation, and intelligent decision-making for enhanced productivity
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              {voiceFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300"
                >
                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400/10 transition-colors duration-300"
                onClick={() => router.push('/contact')}
              >
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5" />
                  Contact Us
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Voice Commands Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative p-12 bg-gradient-to-br from-gray-900/90 to-purple-900/50 rounded-3xl shadow-2xl backdrop-blur-lg text-center border border-purple-400/30">
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-pink-500/10"
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-white flex items-center justify-center gap-4">
                AI Optimization Features
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Brain className="w-8 h-8 text-purple-400" />
                </motion.div>
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Leverage advanced AI models and intelligent automation to optimize workflows and enhance productivity
              </p>
              
              {/* AI Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  "Predictive Analytics & Forecasting",
                  "Intelligent Workflow Automation",
                  "Smart Data Processing & Insights",
                  "AI-Powered Decision Support",
                  "Productivity Optimization Tools",
                  "Advanced Business Intelligence"
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-xl border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300"
                  >
                    <p className="text-gray-300 text-sm">{feature}</p>
                  </motion.div>
                ))}
              </div>

            </div>
            
            {/* Floating Sparkles */}
            {[...Array(12)].map((_, i) => (
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
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
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
