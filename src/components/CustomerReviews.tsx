"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  User, 
  Sparkles, 
  ThumbsUp, 
  Heart,
  Award,
  CheckCircle,
  Bot,
  Mic,
  Headphones,
  Volume2,
  Users,
  ArrowRight,
  MessageCircle,
  Zap,
  Crown
} from "lucide-react";

export default function CustomerReviews() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      avatar: "/pic1.png",
      rating: 5,
      title: "Revolutionary Voice AI Technology",
      review: "Professor Bot has completely transformed how we interact with our systems. The voice recognition is incredibly accurate, and the automatic AI processing saves us hours every day. It's like having a genius assistant that never sleeps!",
      features: ["Voice Recognition", "Automatic Processing", "Time Saving"],
      verified: true,
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager, InnovateLab",
      avatar: "/pic2.png",
      rating: 5,
      title: "Game-Changing Automation",
      review: "The automatic AI capabilities are mind-blowing. It understands context, learns from interactions, and executes complex tasks with precision. Our productivity has increased by 300% since implementing Professor Bot.",
      features: ["Context Understanding", "Learning AI", "Productivity Boost"],
      verified: true,
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "CTO, FutureTech Solutions",
      avatar: "/pic3.png",
      rating: 5,
      title: "Natural Voice Interaction",
      review: "Finally, a voice AI that actually understands natural conversation! Professor Bot's voice synthesis is so natural, it feels like talking to a real person. The emotional intelligence is remarkable.",
      features: ["Natural Conversation", "Voice Synthesis", "Emotional AI"],
      verified: true,
      date: "3 days ago"
    },
    {
      id: 4,
      name: "David Park",
      role: "Founder, AI Ventures",
      avatar: "/pic4.png",
      rating: 5,
      title: "Multi-Language Excellence",
      review: "Working with international teams has never been easier. Professor Bot supports 50+ languages with perfect accuracy. The automatic translation and cultural context understanding is phenomenal.",
      features: ["Multi-Language", "Translation", "Cultural Context"],
      verified: true,
      date: "5 days ago"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Operations Director, Global Corp",
      avatar: "/pic5.png",
      rating: 5,
      title: "Seamless Integration",
      review: "Integration was effortless. Professor Bot seamlessly connected with all our existing systems and started working immediately. The ROI was visible within the first week of implementation.",
      features: ["Easy Integration", "System Compatibility", "Quick ROI"],
      verified: true,
      date: "1 week ago"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "AI Researcher, Tech University",
      avatar: "/pic6.png",
      rating: 5,
      title: "Advanced Neural Networks",
      review: "As an AI researcher, I'm impressed by the sophisticated neural networks powering Professor Bot. The learning algorithms are state-of-the-art, and the decision-making process is incredibly intelligent.",
      features: ["Neural Networks", "Learning Algorithms", "Intelligent Decisions"],
      verified: true,
      date: "4 days ago"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number) => {
    setCurrentReview(index);
  };

  return (
    <section className="relative py-24 px-4 sm:px-8 lg:px-16 gradient-bg overflow-hidden">
      {/* Enhanced Galaxy Background Effects */}
      <div className="absolute inset-0 -z-20">
        {/* Interactive Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(1200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.4), transparent 50%)`
          }}
        />
        
        {/* Purple Galaxy Gradients */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-purple-900/30 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-900/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 w-1/3 h-1/3 bg-gradient-to-tr from-pink-900/15 to-transparent" />
        
        {/* Multiple Galaxy Nebula Effects */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(236, 72, 153, 0.3) 50%, transparent 80%)"
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.25, 0.5, 0.25],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 80%)"
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Enhanced Floating Particles */}
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              backgroundColor: i % 4 === 0 ? 'rgba(147, 51, 234, 0.8)' : 
                             i % 4 === 1 ? 'rgba(236, 72, 153, 0.6)' : 
                             i % 4 === 2 ? 'rgba(59, 130, 246, 0.5)' : 'rgba(255, 255, 255, 0.4)',
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        {/* Floating Geometric Shapes */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.6, 0.2],
              y: [0, -50, 0],
              x: [0, Math.random() * 20 - 10, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            <div 
              className={`w-full h-full ${
                i % 3 === 0 ? 'bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full' :
                i % 3 === 1 ? 'bg-gradient-to-br from-cyan-500/30 to-blue-500/30' :
                'bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-lg'
              }`}
            />
          </motion.div>
        ))}
        
        {/* Shooting Stars */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 200],
              y: [0, 200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeOut"
            }}
          />
        ))}
        
        {/* Energy Waves */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border border-purple-400/20 rounded-full"
            animate={{
              scale: [1, 1.5, 2],
              opacity: [0.8, 0.4, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="relative inline-block"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <h2 className="text-6xl lg:text-8xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
              Our Customers
            </h2>
            {/* Glowing effect behind text */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-cyan-400/20 blur-3xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <motion.p 
            className="text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Trusted by innovators, leaders, and creators worldwide
          </motion.p>
          
          {/* Floating Icons around header */}
          {[Star, Heart, Award, CheckCircle, Crown, Zap].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute text-purple-400/30"
              style={{
                left: `${15 + i * 15}%`,
                top: `${5 + (i % 2) * 25}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            >
              <Icon className="w-10 h-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content - Customer Reviews with Smooth Transitions */}
        <div className="relative">
          {/* Customer Avatars Row */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-4 flex-wrap justify-center">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  className="relative cursor-pointer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => goToReview(index)}
                >
                  <motion.div
                    className={`w-16 h-16 rounded-full border-4 overflow-hidden transition-all duration-300 ${
                      index === currentReview 
                        ? 'border-purple-400 shadow-2xl shadow-purple-400/50' 
                        : 'border-gray-600 hover:border-purple-300'
                    }`}
                    animate={{
                      boxShadow: index === currentReview ? [
                        "0 0 0 0 rgba(147, 51, 234, 0.3)",
                        "0 0 20px 8px rgba(147, 51, 234, 0.4)",
                        "0 0 0 0 rgba(147, 51, 234, 0.3)"
                      ] : "0 0 0 0 rgba(0, 0, 0, 0)"
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="w-full h-full object-cover" 
                    />
                  </motion.div>
                  
                  {/* Active indicator */}
                  {index === currentReview && (
                    <motion.div
                      className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Review Card with Smooth Transitions */}
          <motion.div
            key={currentReview}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut"
            }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative bg-gradient-to-br from-gray-900/90 to-purple-900/70 rounded-3xl shadow-2xl border border-purple-400/40 p-12 overflow-hidden">
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                animate={{ 
                  opacity: [0.95, 0.6, 0.95],
                  background: [
                    'linear-gradient(135deg, rgba(236,72,153,0.08) 0%, rgba(59,130,246,0.08) 100%)',
                    'linear-gradient(135deg, rgba(147,51,234,0.15) 0%, rgba(236,72,153,0.15) 100%)',
                    'linear-gradient(135deg, rgba(236,72,153,0.08) 0%, rgba(59,130,246,0.08) 100%)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Quote Icon */}
              <motion.div
                className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                <Quote className="w-8 h-8 text-white" />
              </motion.div>
              
              {/* Rating Stars */}
              <div className="flex items-center gap-2 mb-6">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ 
                      scale: 1, 
                      rotate: 0,
                      y: [0, -3, 0]
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: i * 0.1,
                      y: { duration: 2, repeat: Infinity, delay: i * 0.2 }
                    }}
                  >
                    <Star className="w-7 h-7 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>
              
              {/* Review Title */}
              <motion.h3 
                className="text-3xl font-bold text-white mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {reviews[currentReview].title}
              </motion.h3>
              
              {/* Review Text */}
              <motion.p 
                className="text-xl text-gray-200 leading-relaxed mb-8 italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                "{reviews[currentReview].review}"
              </motion.p>
              
              {/* Features */}
              <motion.div 
                className="flex flex-wrap gap-3 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {reviews[currentReview].features.map((feature, index) => (
                  <motion.span
                    key={feature}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-200 text-sm rounded-full border border-purple-400/30"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(147, 51, 234, 0.4)" 
                    }}
                  >
                    {feature}
                  </motion.span>
                ))}
              </motion.div>
              
              {/* Customer Info */}
              <motion.div 
                className="flex items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <motion.div 
                  className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-400/50"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={reviews[currentReview].avatar}
                    alt={reviews[currentReview].name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <motion.h4 
                    className="text-2xl font-bold text-white mb-1"
                    whileHover={{ x: 5 }}
                  >
                    {reviews[currentReview].name}
                  </motion.h4>
                  <p className="text-lg text-gray-400 mb-1">{reviews[currentReview].role}</p>
                  <p className="text-sm text-gray-500">{reviews[currentReview].date}</p>
                </div>
                {reviews[currentReview].verified && (
                  <motion.div
                    className="ml-auto w-12 h-12 bg-green-500 rounded-full flex items-center justify-center border-2 border-white"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CheckCircle className="w-6 h-6 text-white" />
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <motion.div 
            className="flex items-center justify-center gap-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.15, 
                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.4)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              onClick={prevReview}
              className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <motion.div
                animate={{ x: [-2, 2, -2] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:text-cyan-200" />
              </motion.div>
            </motion.button>
            
            {/* Dots Indicator */}
            <div className="flex items-center gap-3">
              {reviews.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ 
                    scale: 1.3, 
                    y: -2,
                    boxShadow: "0 5px 15px rgba(147, 51, 234, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => goToReview(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-500 ${
                    index === currentReview
                      ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-125 shadow-lg'
                      : 'bg-gray-600 hover:bg-gray-500 hover:scale-110'
                  }`}
                  animate={{
                    scale: index === currentReview ? [1.25, 1.4, 1.25] : 1,
                    boxShadow: index === currentReview ? [
                      "0 0 0 0 rgba(147, 51, 234, 0.3)",
                      "0 0 20px 8px rgba(147, 51, 234, 0.4)",
                      "0 0 0 0 rgba(147, 51, 234, 0.3)"
                    ] : "0 0 0 0 rgba(0, 0, 0, 0)"
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.1
                  }}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ 
                scale: 1.15, 
                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.4)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              onClick={nextReview}
              className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <motion.div
                animate={{ x: [2, -2, 2] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:text-cyan-200" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { icon: <Star className="w-8 h-8" />, value: "4.9/5", label: "Average Rating", color: "from-yellow-400 to-orange-400" },
            { icon: <Users className="w-8 h-8" />, value: "10K+", label: "Happy Customers", color: "from-purple-400 to-pink-400" },
            { icon: <Award className="w-8 h-8" />, value: "99.9%", label: "Accuracy Rate", color: "from-cyan-400 to-blue-400" },
            { icon: <CheckCircle className="w-8 h-8" />, value: "24/7", label: "AI Support", color: "from-green-400 to-emerald-400" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center p-8 bg-gradient-to-br from-gray-900/70 to-gray-800/40 rounded-2xl backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 shadow-xl"
            >
              <motion.div
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-white">
                  {stat.icon}
                </div>
              </motion.div>
              <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
