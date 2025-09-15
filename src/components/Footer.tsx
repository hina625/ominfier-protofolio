"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Bot, 
  Sparkles, 
  Zap, 
  Brain, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Twitter, 
  Linkedin, 
  Github, 
  Youtube, 
  Instagram,
  Facebook,
  Send,
  Mic,
  Headphones,
  Volume2,
  Radio,
  Cpu,
  Shield,
  Lock,
  Award,
  Star,
  Heart,
  MessageCircle,
  Users,
  Settings,
  Code,
  Database,
  Cloud,
  Rocket,
  Layers,
  CheckCircle,
  ThumbsUp,
  Download,
  Play,
  Pause,
  Wifi,
  WifiOff
} from "lucide-react";

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const footerLinks = {
    app: [
      { name: "Voice AI", href: "#voice-ai", icon: <Mic className="w-4 h-4" /> },
      { name: "Features", href: "#features", icon: <Zap className="w-4 h-4" /> },
      { name: "API", href: "#api", icon: <Code className="w-4 h-4" /> },
      { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> }
    ]
  };

  const socialLinks = [
    { name: "Twitter", href: "#", icon: <Twitter className="w-5 h-5" />, color: "hover:text-blue-400" },
    { name: "LinkedIn", href: "#", icon: <Linkedin className="w-5 h-5" />, color: "hover:text-blue-600" },
    { name: "GitHub", href: "#", icon: <Github className="w-5 h-5" />, color: "hover:text-gray-300" },
    { name: "YouTube", href: "#", icon: <Youtube className="w-5 h-5" />, color: "hover:text-red-500" },
    { name: "Instagram", href: "#", icon: <Instagram className="w-5 h-5" />, color: "hover:text-pink-500" },
    { name: "Facebook", href: "#", icon: <Facebook className="w-5 h-5" />, color: "hover:text-blue-500" }
  ];

  return (
    <footer className="relative gradient-bg text-white overflow-hidden">
      {/* Enhanced Galaxy Background Effects */}
      <div className="absolute inset-0 -z-20">
        {/* Interactive Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.3), transparent 50%)`
          }}
        />
        
        {/* Purple Galaxy Gradients */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-purple-900/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-900/10 to-transparent" />
        
        {/* Galaxy Nebula Effects */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 80%)"
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 15 - 7.5, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        {/* Galaxy Stars */}
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              backgroundColor: i % 3 === 0 ? 'rgba(147, 51, 234, 0.6)' : 
                             i % 3 === 1 ? 'rgba(236, 72, 153, 0.4)' : 'rgba(255, 255, 255, 0.3)',
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Stay Updated
                  </span>
                  <span className="text-white ml-2">with Professor Bot</span>
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Get the latest updates on voice AI technology, automatic AI features, and exclusive insights from our team.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-purple-400/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/60 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    />
                    <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Subscribe
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Logo */}
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Bot className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Omnifier</h3>
                    <p className="text-sm text-gray-400">Voice AI & Automatic AI</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed max-w-md">
                  Professor Bot revolutionizes human-machine interaction through advanced voice AI technology and intelligent automatic processing. Experience the future of AI today.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>hello@omnifier.ai</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className={`p-3 bg-gray-900/50 rounded-full border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300 text-gray-400 ${social.color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                key="app"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-white capitalize">
                  App
                </h4>
                <ul className="space-y-3">
                  {footerLinks.app.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group"
                      >
                        <motion.div
                          className="text-purple-400 group-hover:text-pink-400 transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {link.icon}
                        </motion.div>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Voice AI Features Showcase */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Professor Bot
                </span>
                <span className="text-white ml-2">Capabilities</span>
              </h3>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { icon: <Mic className="w-6 h-6" />, name: "Voice Recognition", color: "from-cyan-400 to-blue-400" },
                { icon: <Brain className="w-6 h-6" />, name: "AI Processing", color: "from-purple-400 to-pink-400" },
                { icon: <Headphones className="w-6 h-6" />, name: "Voice Synthesis", color: "from-green-400 to-emerald-400" },
                { icon: <Globe className="w-6 h-6" />, name: "Multi-Language", color: "from-yellow-400 to-orange-400" },
                { icon: <Shield className="w-6 h-6" />, name: "Privacy First", color: "from-red-400 to-pink-400" },
                { icon: <Zap className="w-6 h-6" />, name: "Real-time", color: "from-indigo-400 to-purple-400" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="text-center p-4 bg-gradient-to-br from-gray-900/40 to-gray-800/20 rounded-xl border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300"
                >
                  <motion.div
                    className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </motion.div>
                  <p className="text-sm text-gray-300 font-medium">{feature.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-gray-400 text-sm"
              >
                <span>© 2024 Omnifier. All rights reserved.</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-pink-400" />
                </motion.div>
                <span>Made with AI</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 text-sm text-gray-400"
              >
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>All systems operational</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
