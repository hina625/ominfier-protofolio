"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Sparkles, 
  Layers, 
  Zap, 
  ArrowRight, 
  Star, 
  Crown, 
  Shield, 
  Globe, 
  Code, 
  Database, 
  Cloud,
  Mic,
  Video,
  Users,
  Settings
} from "lucide-react";

export default function OmnifierFeatures({ features }: { features?: any }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const featureList =
    features ||
    [
      {
        title: "Unified Hub",
        desc: "All your tools, unified. Switch contexts instantly.",
        longDesc: "Seamlessly integrate all your development tools in one powerful interface. Switch between projects, manage workflows, and access everything you need without context switching.",
        icon: <Layers className="w-8 h-8" />,
        color: "from-blue-400 to-cyan-400",
        bgColor: "from-blue-500/20 to-cyan-500/20",
        delay: 0.1,
        status: "Live",
        features: ["Multi-tool", "Context Switch", "Workflow"]
      },
      {
        title: "Smart Automations",
        desc: "Create flows that run when you need them — without code.",
        longDesc: "Build powerful automation workflows with our visual flow builder. No coding required - just drag, drop, and deploy. Automate repetitive tasks and focus on what matters.",
        icon: <Zap className="w-8 h-8" />,
        color: "from-yellow-400 to-orange-400",
        bgColor: "from-yellow-500/20 to-orange-500/20",
        delay: 0.2,
        status: "Beta",
        features: ["Visual Builder", "No Code", "Triggers"]
      },
      {
        title: "Cosmic Insights",
        desc: "Analytics that shine a light on what matters.",
        longDesc: "Get deep insights into your development patterns, productivity metrics, and project health. Make data-driven decisions with beautiful, interactive dashboards.",
        icon: <Sparkles className="w-8 h-8" />,
        color: "from-purple-400 to-pink-400",
        bgColor: "from-purple-500/20 to-pink-500/20",
        delay: 0.3,
        status: "Live",
        features: ["Analytics", "Dashboards", "Metrics"]
      },
      {
        title: "Launchpad",
        desc: "Deploy changes and features with one click.",
        longDesc: "Deploy your applications to any cloud provider with our one-click deployment system. Manage environments, monitor performance, and scale automatically.",
        icon: <Rocket className="w-8 h-8" />,
        color: "from-green-400 to-emerald-400",
        bgColor: "from-green-500/20 to-emerald-500/20",
        delay: 0.4,
        status: "Live",
        features: ["One-Click Deploy", "Cloud", "Auto-Scale"]
      },
      {
        title: "Voice Assistant",
        desc: "Control everything with your voice commands.",
        longDesc: "Interact with your development environment using natural language. Ask questions, execute commands, and get instant responses from our AI-powered voice assistant.",
        icon: <Mic className="w-8 h-8" />,
        color: "from-indigo-400 to-purple-400",
        bgColor: "from-indigo-500/20 to-purple-500/20",
        delay: 0.5,
        status: "Coming Soon",
        features: ["Voice Control", "AI", "Natural Language"]
      },
      {
        title: "Team Collaboration",
        desc: "Work together seamlessly across teams.",
        longDesc: "Collaborate in real-time with your team members. Share screens, code together, and stay synchronized with live updates and notifications.",
        icon: <Users className="w-8 h-8" />,
        color: "from-pink-400 to-rose-400",
        bgColor: "from-pink-500/20 to-rose-500/20",
        delay: 0.6,
        status: "Live",
        features: ["Real-time", "Screen Share", "Notifications"]
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
              Omnifier
            </span>
            <span className="text-white ml-4">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the powerful features that make Omnifier the ultimate development platform
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featureList.map((feature: any, index: number) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: feature.delay }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                transition: { duration: 0.4 }
              }}
              className="group relative"
            >
              <div className="relative p-0 rounded-3xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/60 transition-all duration-500 h-full overflow-hidden">
                {/* Header Section */}
                <div className="relative p-6 border-b border-white/10">
                  <div className="flex items-start justify-between mb-4">
          <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="text-white">
                        {feature.icon}
                </div>
                    </motion.div>
                    
                    {/* Status Badge */}
                    <motion.div
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        feature.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        feature.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                        'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {feature.status}
                    </motion.div>
              </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
            </div>

                {/* Content Section */}
                <div className="p-6">
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {feature.longDesc}
                  </p>
                  
                  {/* Features List */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {feature.features.map((tech: any, techIndex: number) => (
                      <motion.span
                        key={tech}
                        className="text-xs text-purple-300 bg-purple-900/30 px-2 py-1 rounded-full border border-purple-500/30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: feature.delay + techIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
            </div>

                  {/* Action Button */}
              <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-4 bg-gradient-to-r ${feature.color} text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2`}
              >
                    <span>Explore Feature</span>
                    <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-full" />
                
                {/* Background Glow */}
              <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      </div>
    </section>
  );
}
