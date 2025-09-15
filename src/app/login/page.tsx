"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import BackgroundParticles from "@/components/BackgroundParticles";
import { motion } from "framer-motion";
import { 
  Bot, 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  Sparkles, 
  Star,
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  Brain,
  Cpu,
  MessageCircle,
  Settings,
  Lightbulb,
  Heart
} from "lucide-react";

export default function LoginPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // Handle login logic here
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Background Particles Effect */}
        <div className="absolute inset-0 -z-30">
          <BackgroundParticles />
      </div>
        // ...existing code...

        {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Login Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Header */}
              <div className="text-center lg:text-left">
                <motion.div
                  className="flex justify-center lg:justify-start mb-6"
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
                    <Bot className="w-8 h-8 text-white" />
              </div>
            </motion.div>

                <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Welcome Back
              </span>
                </h1>
                <p className="text-gray-300 text-xl">
              Sign in to Professor Bot AI Assistant
            </p>
              </div>

          {/* Login Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
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
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-purple-400/30 rounded-xl bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </motion.div>

                {/* Password Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-purple-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="block w-full pl-10 pr-12 py-3 border border-purple-400/30 rounded-xl bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-purple-400 transition-colors" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-purple-400 transition-colors" />
                      )}
                    </button>
                  </div>
                </motion.div>

                {/* Remember Me & Forgot Password */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 block text-sm text-gray-300">
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Forgot password?
                  </a>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center gap-2">
                    {isLoading ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Signing in...
                      </>
                    ) : (
                      <>
                        <Shield className="w-5 h-5" />
                        Sign In
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </div>
                </motion.button>
              </form>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-6"
              >
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-600" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-900/50 text-gray-400">Or continue with</span>
                  </div>
                </div>
              </motion.div>

              {/* Social Login Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-6 grid grid-cols-2 gap-3"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-xl shadow-sm bg-gray-800/50 text-sm font-medium text-gray-300 hover:bg-gray-700/50 transition-colors duration-300"
                >
                  <User className="w-5 h-5 mr-2" />
                  Google
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-xl shadow-sm bg-gray-800/50 text-sm font-medium text-gray-300 hover:bg-gray-700/50 transition-colors duration-300"
                >
                  <Bot className="w-5 h-5 mr-2" />
                  GitHub
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Sign Up Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
                className="text-center lg:text-left"
          >
            <p className="text-gray-400">
              Don't have an account?{" "}
              <a
                href="#"
                className="font-medium text-purple-400 hover:text-purple-300 transition-colors"
              >
                Sign up for free
              </a>
            </p>
              </motion.div>
          </motion.div>

            {/* Right Side - Rotating Bot */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Outer Rotating Ring */}
          <motion.div
                  className="w-96 h-96 rounded-full border-2 border-purple-400/30 relative"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  {/* Floating Icons around the ring */}
                  {[
                    { icon: Brain, color1: "purple-400", color2: "pink-400", delay: 0 },
                    { icon: Cpu, color1: "blue-400", color2: "cyan-400", delay: 0.2 },
                    { icon: MessageCircle, color1: "green-400", color2: "emerald-400", delay: 0.4 },
                    { icon: Settings, color1: "yellow-400", color2: "orange-400", delay: 0.6 },
                    { icon: Lightbulb, color1: "pink-400", color2: "rose-400", delay: 0.8 },
                    { icon: Heart, color1: "red-400", color2: "pink-400", delay: 1.0 },
                    { icon: Zap, color1: "cyan-400", color2: "blue-400", delay: 1.2 },
                    { icon: Shield, color1: "emerald-400", color2: "green-400", delay: 1.4 }
                  ].map((item, index) => {
                    const angle = (index * 45) - 90; // Start from top
                    const radius = 180; // Distance from center
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    
                    return (
                      <motion.div
                        key={index}
                        className={`absolute w-12 h-12 rounded-full bg-gradient-to-br from-${item.color1} to-${item.color2} flex items-center justify-center shadow-lg`}
                        style={{
                          left: `calc(50% + ${x}px - 24px)`,
                          top: `calc(50% + ${y}px - 24px)`,
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: item.delay }}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Middle Rotating Ring */}
                <motion.div
                  className="absolute inset-8 w-80 h-80 rounded-full border border-purple-300/20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                {/* Inner Rotating Ring */}
                <motion.div
                  className="absolute inset-16 w-64 h-64 rounded-full border border-pink-300/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                {/* Orbital Images Revolution */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ 
                    y: [0, -5, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  {/* Main Container with Glow Effect */}
                  <motion.div 
                    className="w-96 h-96 relative flex items-center justify-center"
                    animate={{
                      boxShadow: [
                        "0 0 40px rgba(147, 51, 234, 0.4)",
                        "0 0 80px rgba(236, 72, 153, 0.7)",
                        "0 0 40px rgba(147, 51, 234, 0.4)"
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Central Hub */}
                    <motion.div
                      className="absolute w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl z-10"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <Bot className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Orbital Images - Inner Orbit */}
                    {[
                      { src: "/pic1.png", color: "from-purple-500/30 to-pink-500/30", size: "w-16 h-16", radius: 80, speed: 15 },
                      { src: "/pic2.png", color: "from-blue-500/30 to-cyan-500/30", size: "w-16 h-16", radius: 80, speed: 15 },
                      { src: "/pic3.png", color: "from-green-500/30 to-emerald-500/30", size: "w-16 h-16", radius: 80, speed: 15 },
                      { src: "/pic4.png", color: "from-yellow-500/30 to-orange-500/30", size: "w-16 h-16", radius: 80, speed: 15 }
                    ].map((image, index) => (
                      <motion.div
                        key={`inner-${index}`}
                        className={`absolute ${image.size} rounded-full overflow-hidden shadow-xl border-2 border-white/30`}
                        style={{
                          left: '50%',
                          top: '50%',
                          transformOrigin: '0 0'
                        }}
                        animate={{
                          rotate: [0, 360],
                          x: [0, Math.cos((index * 90) * Math.PI / 180) * image.radius],
                          y: [0, Math.sin((index * 90) * Math.PI / 180) * image.radius]
                        }}
                        transition={{
                          duration: image.speed,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <img 
                          src={image.src} 
                          alt={`Profile ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${image.color}`}
                          animate={{
                            opacity: [0.3, 0.7, 0.3]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    ))}

                    {/* Orbital Images - Outer Orbit */}
                    {[
                      { src: "/pic5.png", color: "from-pink-500/30 to-rose-500/30", size: "w-14 h-14", radius: 140, speed: 20 },
                      { src: "/pic6.png", color: "from-cyan-500/30 to-blue-500/30", size: "w-14 h-14", radius: 140, speed: 20 },
                      { src: "/pic7.png", color: "from-emerald-500/30 to-green-500/30", size: "w-14 h-14", radius: 140, speed: 20 },
                      { src: "/pic8.png", color: "from-orange-500/30 to-red-500/30", size: "w-14 h-14", radius: 140, speed: 20 },
                      { src: "/pic9.png", color: "from-indigo-500/30 to-purple-500/30", size: "w-14 h-14", radius: 140, speed: 20 },
                      { src: "/pic10.png", color: "from-teal-500/30 to-cyan-500/30", size: "w-14 h-14", radius: 140, speed: 20 }
                    ].map((image, index) => (
              <motion.div
                        key={`outer-${index}`}
                        className={`absolute ${image.size} rounded-full overflow-hidden shadow-lg border-2 border-white/20`}
                        style={{
                          left: '50%',
                          top: '50%',
                          transformOrigin: '0 0'
                        }}
                        animate={{
                          rotate: [0, -360],
                          x: [0, Math.cos((index * 60) * Math.PI / 180) * image.radius],
                          y: [0, Math.sin((index * 60) * Math.PI / 180) * image.radius]
                        }}
                        transition={{
                          duration: image.speed,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <img 
                          src={image.src} 
                          alt={`Profile ${index + 5}`} 
                          className="w-full h-full object-cover"
                        />
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${image.color}`}
                          animate={{
                            opacity: [0.2, 0.6, 0.2]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
              </motion.div>
            ))}

                    {/* Orbital Rings */}
                    <motion.div
                      className="absolute inset-0 border border-purple-400/20 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      className="absolute inset-8 border border-pink-400/15 rounded-full"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      className="absolute inset-16 border border-cyan-400/10 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Central Pulsing Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.4, 0.1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Orbital Trails */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={`trail-${i}`}
                        className="absolute w-1 h-1 bg-white/60 rounded-full"
                        style={{
                          left: '50%',
                          top: '50%',
                          transformOrigin: '0 0'
                        }}
                        animate={{
                          rotate: [0, 360],
                          x: [0, Math.cos((i * 45) * Math.PI / 180) * 100],
                          y: [0, Math.sin((i * 45) * Math.PI / 180) * 100],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.5
                        }}
                      />
                    ))}

                    {/* Floating Sparkles */}
                    {[...Array(20)].map((_, i) => {
                      const angle = (i * 18) * Math.PI / 180;
                      const radius = 160;
                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;
                      
                      return (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          style={{
                            left: `calc(50% + ${x}px - 2px)`,
                            top: `calc(50% + ${y}px - 2px)`,
                          }}
                          animate={{
                            scale: [0, 1.5, 0],
                            opacity: [0, 1, 0],
                            rotate: [0, 360]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.15,
                            ease: "easeInOut"
                          }}
                        />
                      );
                    })}
                  </motion.div>
                </motion.div>

                {/* Enhanced Floating Particles around Bot */}
                {[...Array(30)].map((_, i) => {
                  const angle = (i * 12) * Math.PI / 180;
                  const radius = 180 + Math.random() * 40;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        left: `calc(50% + ${x}px - 3px)`,
                        top: `calc(50% + ${y}px - 3px)`,
                        width: `${Math.random() * 4 + 2}px`,
                        height: `${Math.random() * 4 + 2}px`,
                        backgroundColor: i % 4 === 0 ? 'rgba(147, 51, 234, 0.8)' : 
                                       i % 4 === 1 ? 'rgba(236, 72, 153, 0.7)' : 
                                       i % 4 === 2 ? 'rgba(59, 130, 246, 0.6)' : 'rgba(255, 255, 255, 0.5)',
                      }}
                      animate={{
                        scale: [0, 1.5, 0],
                        opacity: [0, 1, 0],
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        rotate: [0, 360, 0]
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                    />
                  );
                })}

                {/* Enhanced Energy Waves */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full border-2"
                    style={{
                      left: `${i * 5}%`,
                      top: `${i * 5}%`,
                      width: `${100 - i * 10}%`,
                      height: `${100 - i * 10}%`,
                      borderColor: i % 2 === 0 ? 'rgba(147, 51, 234, 0.3)' : 'rgba(236, 72, 153, 0.3)'
                    }}
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.8, 0, 0.8],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.6,
                      ease: "easeOut"
                    }}
                  />
                ))}

                {/* Orbiting Mini Bots */}
                {[...Array(4)].map((_, i) => {
                  const angle = (i * 90) * Math.PI / 180;
                  const radius = 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg"
                      style={{
                        left: `calc(50% + ${x}px - 16px)`,
                        top: `calc(50% + ${y}px - 16px)`,
                      }}
                      animate={{
                        rotate: [0, 360],
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 2
                      }}
                    >
                      <Bot className="w-4 h-4 text-white" />
                    </motion.div>
                  );
                })}

                {/* Glowing Dots */}
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30) * Math.PI / 180;
                  const radius = 140;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                      style={{
                        left: `calc(50% + ${x}px - 6px)`,
                        top: `calc(50% + ${y}px - 6px)`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  );
                })}
              </div>
          </motion.div>
        </div>
      </div>
      </div>
    </>
  );
}