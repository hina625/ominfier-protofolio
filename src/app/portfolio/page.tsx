"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { 
  Bot, 
  Sparkles, 
  Zap, 
  Brain, 
  ArrowRight, 
  Play, 
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
  Settings,
  Rocket,
  Layers,
  CheckCircle,
  Wallet,
  MessageCircle,
  Headphones,
  Volume2,
  VolumeX,
  Clock,
  Cpu,
  Activity,
  Wifi,
  WifiOff,
  Radio,
  RadioReceiver,
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  CheckCircle2,
  X
} from "lucide-react";
import BackgroundParticles from "../../components/BackgroundParticles";

export default function PortfolioPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [particlePositions, setParticlePositions] = useState<Array<{left: number, top: number}>>([]);
  const [starPositions, setStarPositions] = useState<Array<{left: number, top: number, width: number, height: number}>>([]);
  const [iconPositions, setIconPositions] = useState<Array<{left: number, top: number}>>([]);
  
  // Contact Form States
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Contact Form Handlers
  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setContactForm({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 3000);
    }, 2000);
  };

  const resetSubmitStatus = () => {
    setSubmitStatus('idle');
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Generate positions only on client side to prevent hydration mismatch
    setMounted(true);
    setParticlePositions(
      [...Array(80)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100
      }))
    );
    setStarPositions(
      [...Array(150)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        width: Math.random() * 4 + 1,
        height: Math.random() * 4 + 1
      }))
    );
    setIconPositions(
      [...Array(6)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100
      }))
    );
  }, []);

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen gradient-bg text-white overflow-x-hidden">
        <BackgroundParticles variant="voice" particleCount={60} starCount={120} />
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen gradient-bg text-white overflow-x-hidden">
      {/* Use the new BackgroundParticles component */}
      <BackgroundParticles variant="voice" particleCount={60} starCount={120} />
      
      {/* Enhanced AI Voice Background Effects */}
      <div className="absolute inset-0 -z-20">
        {/* Interactive Voice Wave Background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(1200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.4), transparent 60%)`
          }}
        />
        
        {/* Voice AI Gradients */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-purple-900/30 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-900/20 to-transparent" />
        <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-gradient-to-r from-cyan-900/15 to-transparent" />
        
        {/* Voice Wave Nebula Effects */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(236, 72, 153, 0.3) 50%, rgba(6, 182, 212, 0.2) 80%, transparent 100%)"
          }}
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Secondary Voice Wave */}
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-2xl opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 80%)"
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.4, 0.1],
            rotate: [360, 0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Voice Frequency Particles */}
        {particlePositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        {/* AI Processing Stars */}
        {starPositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
              width: `${position.width}px`,
              height: `${position.height}px`,
              backgroundColor: i % 4 === 0 ? 'rgba(147, 51, 234, 0.9)' : 
                             i % 4 === 1 ? 'rgba(236, 72, 153, 0.7)' : 
                             i % 4 === 2 ? 'rgba(6, 182, 212, 0.6)' : 'rgba(255, 255, 255, 0.5)',
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.3, 1],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
        
        {/* Voice Wave Lines */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"
            style={{
              top: `${10 + i * 8}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
        
        {/* Floating AI Icons */}
        {[
          <Mic className="w-6 h-6" />,
          <Headphones className="w-6 h-6" />,
          <Volume2 className="w-6 h-6" />,
          <Radio className="w-6 h-6" />,
          <Brain className="w-6 h-6" />,
          <Cpu className="w-6 h-6" />
        ].map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-400/30"
            style={{
              left: `${iconPositions[i]?.left || 0}%`,
              top: `${iconPositions[i]?.top || 0}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 40 - 20, 0],
              rotate: [0, 360, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => {
              window.location.href = '/';
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Omnifier</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            <a 
              href="#hero" 
              className="text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Home
            </a>
            <a 
              href="#features" 
              className="text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Features
            </a>
            <a 
              href="#revolution" 
              className="text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('revolution')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Revolution
            </a>
            <a 
              href="#ecosystem" 
              className="text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ecosystem
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {
              window.location.href = '/contact';
            }}
          >
            Get Started
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI & Automatic AI
                </span>
                <br />
                <span className="text-white">Professional Solutions</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Discover our comprehensive AI portfolio featuring advanced machine learning models, automatic AI systems, and professional-grade code implementations that power intelligent automation and decision-making.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-3">
                  <Code className="w-6 h-6" />
                  View AI Portfolio
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.button>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-80 h-80">
                {/* AI Agent Visualization */}
                <motion.div
                  className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-purple-400/50 shadow-2xl"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/pic1.png"
                    alt="AI Agent"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
                  
                  {/* Floating AI Icons */}
                  {[
                    <Brain className="w-6 h-6" />,
                    <Zap className="w-6 h-6" />,
                    <Sparkles className="w-6 h-6" />,
                    <Code className="w-6 h-6" />
                  ].map((icon, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-white opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${20 + i * 20}%`,
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
                  
                  {/* Glowing Halo */}
                  <motion.div
                    className="absolute -top-4 -left-4 -right-4 -bottom-4 rounded-full border-2 border-purple-400/30"
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
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI & Code Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional AI implementations, machine learning models, and automatic AI systems with clean, production-ready code that powers intelligent automation and decision-making.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Machine Learning Models",
                description: "Advanced neural networks, deep learning algorithms, and AI models with 99.9% accuracy for predictive analytics and intelligent decision-making.",
                color: "from-cyan-400 to-blue-400"
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Automatic AI Systems",
                description: "Self-learning AI systems that automatically process data, make decisions, and execute complex tasks without human intervention using advanced algorithms.",
                color: "from-purple-400 to-pink-400"
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Professional Code",
                description: "Clean, scalable, and production-ready code implementations with comprehensive documentation, testing, and deployment strategies.",
                color: "from-green-400 to-emerald-400"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/60 transition-all duration-500"
              >
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">
                  {feature.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Code Showcase Section */}
      <section id="revolution" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Professional AI Code
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Our AI implementations feature clean, scalable code with advanced machine learning algorithms, neural networks, and automatic AI systems that power intelligent automation.
                </p>
                <p>
                  Professional-grade code with comprehensive documentation, testing frameworks, and deployment strategies that ensure reliability, maintainability, and performance in production environments.
                </p>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400/10 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5" />
                  View Code Examples
                </div>
              </motion.button>
            </motion.div>

            {/* Right Visual - Code Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-2xl">
                {/* Code Editor Visualization */}
                <div className="relative bg-gray-900/90 rounded-2xl border border-purple-400/30 shadow-2xl overflow-hidden">
                  {/* Code Header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-700/50">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-4 text-gray-300 text-sm font-mono">ai_model.py</span>
                  </div>
                  
                  {/* Code Content */}
                  <div className="p-6 font-mono text-sm">
                    <div className="space-y-2">
                      <div className="text-purple-400">
                        <span className="text-gray-500">1</span> <span className="text-blue-400">import</span> <span className="text-green-400">tensorflow</span> <span className="text-blue-400">as</span> <span className="text-green-400">tf</span>
                      </div>
                      <div className="text-purple-400">
                        <span className="text-gray-500">2</span> <span className="text-blue-400">import</span> <span className="text-green-400">numpy</span> <span className="text-blue-400">as</span> <span className="text-green-400">np</span>
                      </div>
                      <div className="text-purple-400">
                        <span className="text-gray-500">3</span>
                      </div>
                      <div className="text-purple-400">
                        <span className="text-gray-500">4</span> <span className="text-blue-400">class</span> <span className="text-yellow-400">AutomaticAI</span><span className="text-white">:</span>
                      </div>
                      <div className="text-purple-400">
                        <span className="text-gray-500">5</span>     <span className="text-blue-400">def</span> <span className="text-yellow-400">__init__</span><span className="text-white">(</span><span className="text-blue-400">self</span><span className="text-white">,</span> <span className="text-blue-400">model_path</span><span className="text-white">):</span>
                      </div>
                      <div className="text-purple-400">
                        <span className="text-gray-500">6</span>         <span className="text-blue-400">self</span><span className="text-white">.</span><span className="text-blue-400">model</span> <span className="text-white">=</span> <span className="text-green-400">tf.keras.models.load_model</span><span className="text-white">(</span><span className="text-blue-400">model_path</span><span className="text-white">)</span>
                      </div>
                      <div className="text-purple-400">
                        <span className="text-gray-500">7</span>
                      </div>
                      <div className="text-purple-400">
                        <span className="text-gray-500">8</span>     <span className="text-blue-400">def</span> <span className="text-yellow-400">predict</span><span className="text-white">(</span><span className="text-blue-400">self</span><span className="text-white">,</span> <span className="text-blue-400">data</span><span className="text-white">):</span>
                      </div>
                      <div className="text-purple-400">
                        <span className="text-gray-500">9</span>         <span className="text-blue-400">return</span> <span className="text-blue-400">self</span><span className="text-white">.</span><span className="text-blue-400">model</span><span className="text-white">.</span><span className="text-green-400">predict</span><span className="text-white">(</span><span className="text-blue-400">data</span><span className="text-white">)</span>
                      </div>
                      <div className="text-purple-400">
                        <span className="text-gray-500">10</span>
                      </div>
                      <div className="text-purple-400">
                        <span className="text-gray-500">11</span> <span className="text-gray-500"># Automatic AI Processing</span>
                      </div>
                      <div className="text-purple-400">
                        <span className="text-gray-500">12</span> <span className="text-blue-400">def</span> <span className="text-yellow-400">auto_process</span><span className="text-white">(</span><span className="text-blue-400">input_data</span><span className="text-white">):</span>
                      </div>
                      <div className="text-purple-400">
                        <span className="text-gray-500">13</span>     <span className="text-blue-400">ai</span> <span className="text-white">=</span> <span className="text-yellow-400">AutomaticAI</span><span className="text-white">(</span><span className="text-green-400">'model.h5'</span><span className="text-white">)</span>
                      </div>
                      <div className="text-purple-400">
                        <span className="text-gray-500">14</span>     <span className="text-blue-400">result</span> <span className="text-white">=</span> <span className="text-blue-400">ai</span><span className="text-white">.</span><span className="text-green-400">predict</span><span className="text-white">(</span><span className="text-blue-400">input_data</span><span className="text-white">)</span>
                      </div>
                      <div className="text-purple-400">
                        <span className="text-gray-500">15</span>     <span className="text-blue-400">return</span> <span className="text-blue-400">result</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Code Elements */}
                {[
                  <Brain className="w-6 h-6" />,
                  <Cpu className="w-6 h-6" />,
                  <Code className="w-6 h-6" />,
                  <Database className="w-6 h-6" />
                ].map((icon, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-purple-400/60"
                    style={{
                      left: `${10 + i * 20}%`,
                      top: `${-20 + (i % 2) * 40}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 360, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  >
                    {icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Making Impact Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl lg:text-6xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Made Simple
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI and automatic AI systems make complex automation simple. Advanced machine learning models, neural networks, and intelligent algorithms work together to understand, process, and execute tasks with unprecedented accuracy and efficiency.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400/10 transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <Brain className="w-5 h-5" />
                Explore AI Solutions
              </div>
            </motion.button>
          </motion.div>

          {/* Promotional Box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 to-purple-900/50 backdrop-blur-lg border border-purple-400/30 shadow-2xl">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  Experience AI Today.
                </h3>
                <p className="text-gray-300 text-lg">
                  Try our advanced AI and automatic AI technology for free. Experience the future of intelligent automation with our machine learning models and professional-grade code implementations.
                </p>
                
                <motion.div
                  className="flex justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
                    <Bot className="w-10 h-10 text-white" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Metaverse Section */}
      <section id="ecosystem" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-96 h-96">
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-purple-400/30 shadow-2xl">
                  <img
                    src="/pic3.png"
                    alt="AI Metaverse"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
                  
                  {/* Floating AI Elements */}
                  {[
                    <Brain className="w-8 h-8" />,
                    <Globe className="w-8 h-8" />,
                    <Layers className="w-8 h-8" />,
                    <Sparkles className="w-8 h-8" />
                  ].map((icon, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-white"
                      style={{
                        left: `${15 + i * 25}%`,
                        top: `${20 + (i % 2) * 40}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 360, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    >
                      {icon}
                    </motion.div>
                  ))}
                </div>

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

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                  AI ECOSYSTEM
                </span>
                <h2 className="text-4xl lg:text-6xl font-bold mt-4">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    What is AI?
                  </span>
                </h2>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Our AI ecosystem is a comprehensive platform featuring machine learning models, neural networks, and automatic AI systems. Our intelligent algorithms understand context, learn from data, and execute complex tasks through advanced automation, revolutionizing how businesses operate and make decisions.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-3">
                  <Brain className="w-6 h-6" />
                  Start AI Journey
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="relative py-20 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.3), transparent 60%)`
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
              GET IN TOUCH
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold mt-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h2>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Ready to transform your business with AI and automatic AI systems? Let's discuss your project and create intelligent solutions together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We're here to help you bring your AI and automatic AI vision to life. Reach out to us and let's start building intelligent solutions together.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-white/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-300">contact@professorbot.ai</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-white/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-white/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-gray-300">San Francisco, CA</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative p-8 bg-gradient-to-br from-gray-900/80 to-purple-900/50 rounded-3xl shadow-2xl backdrop-blur-lg border border-purple-400/30">
                {/* Background Glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/5 to-pink-500/5"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <form onSubmit={handleContactSubmit} className="space-y-6 relative z-10">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-purple-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactInputChange}
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-purple-400/30 rounded-xl bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-purple-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleContactInputChange}
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-purple-400/30 rounded-xl bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </motion.div>

                  {/* Phone Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-purple-400" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={contactForm.phone}
                        onChange={handleContactInputChange}
                        className="block w-full pl-10 pr-3 py-3 border border-purple-400/30 rounded-xl bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </motion.div>

                  {/* Subject Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MessageSquare className="h-5 w-5 text-purple-400" />
                      </div>
                      <input
                        type="text"
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleContactInputChange}
                        required
                        className="block w-full pl-10 pr-3 py-3 border border-purple-400/30 rounded-xl bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="What's this about?"
                      />
                    </div>
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3">
                        <MessageCircle className="h-5 w-5 text-purple-400" />
                      </div>
                      <textarea
                        name="message"
                        value={contactForm.message}
                        onChange={handleContactInputChange}
                        required
                        rows={5}
                        className="block w-full pl-10 pr-3 py-3 border border-purple-400/30 rounded-xl bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </div>
                  </motion.button>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 bg-green-900/50 border border-green-400/30 rounded-xl"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="text-green-300">Message sent successfully! We'll get back to you soon.</span>
                      <button
                        onClick={resetSubmitStatus}
                        className="ml-auto text-green-400 hover:text-green-300"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 bg-red-900/50 border border-red-400/30 rounded-xl"
                    >
                      <X className="w-5 h-5 text-red-400" />
                      <span className="text-red-300">Failed to send message. Please try again.</span>
                      <button
                        onClick={resetSubmitStatus}
                        className="ml-auto text-red-400 hover:text-red-300"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Omnifier</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-8"
          >
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Explore</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Community</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Follow</a>
          </motion.div>
        </div>
      </footer>
      </div>
    </>
  );
}
